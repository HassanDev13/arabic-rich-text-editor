import { Extension } from "@tiptap/core";
import tippy, { Instance as TippyInstance } from "tippy.js";
import { ReactRenderer } from "@tiptap/react";
import Suggestion from "@tiptap/suggestion";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Fragment, Slice, Node as ProsemirrorNode, Schema } from "@tiptap/pm/model";
import TermAutocompleteList from "./TermAutocompleteList";
import { getCustomTermsFromStorage, incrementTermUsage, TermItem } from "./termDictionary";

// A helper function to find the overlap of characters to replace
function getOverlapLength(textBefore: string, termArabic: string): number {
  const t = textBefore.toLowerCase();
  const s = termArabic.toLowerCase();

  let maxOverlap = 0;
  for (let i = 1; i <= Math.min(t.length, s.length); i++) {
    const suffix = t.slice(-i);
    const prefix = s.slice(0, i);
    if (suffix === prefix) {
      maxOverlap = i;
    }
  }
  return maxOverlap;
}

// Recursively parse and enrich plain text to add term marks while preserving formatting
function enrichText(
  text: string,
  terms: TermItem[],
  schema: Schema,
  originalMarks: readonly any[] = []
): ProsemirrorNode[] {
  if (!text) return [];

  // Sort terms by length descending to match longer multi-word phrases first
  const sortedTerms = [...terms].sort(
    (a, b) => b.english.length - a.english.length || b.arabic.length - a.arabic.length
  );

  let earliestMatch: {
    index: number;
    length: number;
    term: TermItem;
    matchedText: string;
  } | null = null;

  for (const term of sortedTerms) {
    const escEnglish = term.english.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const escArabic = term.arabic.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

    const engRegex = new RegExp(`\\b${escEnglish}\\b`, "gi");
    const araRegex = new RegExp(`(?<![\\s\\u200b\\ufeff])${escArabic}(?![\\s\\u200b\\ufeff])`, "g");

    let match;

    // Check English match
    engRegex.lastIndex = 0;
    while ((match = engRegex.exec(text)) !== null) {
      if (earliestMatch === null || match.index < earliestMatch.index) {
        earliestMatch = {
          index: match.index,
          length: match[0].length,
          term,
          matchedText: match[0],
        };
      }
    }

    // Check Arabic match
    araRegex.lastIndex = 0;
    while ((match = araRegex.exec(text)) !== null) {
      if (earliestMatch === null || match.index < earliestMatch.index) {
        earliestMatch = {
          index: match.index,
          length: match[0].length,
          term,
          matchedText: match[0],
        };
      }
    }
  }

  if (!earliestMatch) {
    return [schema.text(text, originalMarks)];
  }

  // Look ahead to consume existing translations (with/without parentheses) to prevent duplication
  const afterMatchOffset = earliestMatch.index + earliestMatch.length;
  const trailingText = text.slice(afterMatchOffset);

  const escEng = earliestMatch.term.english.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const escAra = earliestMatch.term.arabic.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

  let lookaheadRegex: RegExp;
  if (earliestMatch.matchedText.toLowerCase() === earliestMatch.term.arabic.toLowerCase()) {
    // If we matched the Arabic term, look ahead for the English term (with/without parens)
    lookaheadRegex = new RegExp(`^[\\s\\u200b\\ufeff]*\\(?[\\s\\u200b\\ufeff]*${escEng}\\b[\\s\\u200b\\ufeff]*\\)?`, "i");
  } else {
    // If we matched the English term, look ahead for the Arabic term (with/without parens)
    lookaheadRegex = new RegExp(`^[\\s\\u200b\\ufeff]*\\(?[\\s\\u200b\\ufeff]*${escAra}(?![\\s\\u200b\\ufeff])[\\s\\u200b\\ufeff]*\\)?`, "i");
  }

  const lookaheadMatch = trailingText.match(lookaheadRegex);
  let totalLength = earliestMatch.length;
  if (lookaheadMatch) {
    totalLength += lookaheadMatch[0].length;
  }

  const nodes: ProsemirrorNode[] = [];
  const beforeText = text.slice(0, earliestMatch.index);
  const afterText = text.slice(earliestMatch.index + totalLength);

  if (beforeText) {
    nodes.push(...enrichText(beforeText, terms, schema, originalMarks));
  }

  const term = earliestMatch.term;
  const description = term.description || "مصطلح تقني معتمد.";
  const termText = `${term.arabic} (${term.english})`;

  const termMark = schema.marks.term.create({
    arabic: term.arabic,
    english: term.english,
    description: description,
  });

  // Combine original styling marks with the new term mark
  const newMarks = [...originalMarks.filter((m) => m.type.name !== "term"), termMark];
  nodes.push(schema.text(termText, newMarks));

  if (afterText) {
    nodes.push(...enrichText(afterText, terms, schema, originalMarks));
  }

  return nodes;
}

const TermAutocomplete = Extension.create({
  name: "termAutocomplete",

  addOptions() {
    return {
      terms: [] as TermItem[],
    };
  },

  addProseMirrorPlugins() {
    const terms = this.options.terms || [];

    // Base Suggestion Plugin
    const plugins: any[] = [
      Suggestion({
        pluginKey: new PluginKey("termAutocomplete") as any,
        editor: this.editor,
        char: "", // No trigger character, we use findSuggestionMatch for custom matching

        findSuggestionMatch: ({ $position }) => {
          // Get the text from the start of the current block node up to the cursor
          const text = $position.parent.textBetween(0, $position.parentOffset, null, "\0");

          // Match the trailing word (Arabic letters/digits/hyphens or standard non-whitespace characters)
          const match = text.match(/(\S+)$/);
          if (!match) {
            return null;
          }

          const query = match[0];

          // Trigger suggestions if query has a minimum length of 2 characters
          if (query.length < 2) {
            return null;
          }

          const matchStart = match.index ?? 0;
          const matchEnd = matchStart + query.length;

          // Check if there are any matching terms in the dictionary
          const currentTerms = getCustomTermsFromStorage(terms);
          const queryLower = query.toLowerCase();

          // We support matching by Arabic translation or English translation
          const hasMatch = currentTerms.some(
            (term) =>
              term.arabic.toLowerCase().includes(queryLower) ||
              term.english.toLowerCase().includes(queryLower)
          );

          if (!hasMatch) {
            return null;
          }

          return {
            range: {
              from: $position.start() + matchStart,
              to: $position.start() + matchEnd,
            },
            query: query,
            text: query,
          };
        },

        command: ({ editor, range, props }) => {
          const term = props as TermItem;

          // Resolve overlap to replace the entire typed portion of the term (multi-word support)
          const { state } = editor;
          const $from = state.doc.resolve(range.from);
          const textBefore = $from.parent.textBetween(0, $from.parentOffset, null, "\0");

          // Calculate overlap to replace the whole typed sequence matching the term
          const overlapLen = getOverlapLength(textBefore, term.arabic);

          // If there's an overlap, replace starting from the overlap point
          const replaceFrom = overlapLen > 0 ? range.to - overlapLen : range.from;
          const replaceTo = range.to;

          // Increment term usage count in localStorage
          incrementTermUsage(term.arabic, term.english);

          // Format the inserted content as HTML with data attributes for TermMark parsing
          const description = term.description || "مصطلح تقني معتمد.";
          const insertHTML = `<span data-term="" data-arabic="${term.arabic}" data-english="${term.english}" data-description="${description}">${term.arabic} (${term.english})</span> `;

          editor
            .chain()
            .focus()
            .insertContentAt({ from: replaceFrom, to: replaceTo }, insertHTML)
            .run();
        },

        items: ({ query }: { query: string }) => {
          const currentTerms = getCustomTermsFromStorage(terms);
          const queryLower = query.toLowerCase();

          return currentTerms
            .filter(
              (term) =>
                term.arabic.toLowerCase().includes(queryLower) ||
                term.english.toLowerCase().includes(queryLower)
            )
            .sort((a, b) => b.usageCount - a.usageCount) // Most used terms first
            .slice(0, 5); // Limit to top 5 suggestions
        },

        render: () => {
          let component: any;
          let popup: TippyInstance[];

          return {
            onStart: (props: any) => {
              component = new ReactRenderer(TermAutocompleteList, {
                props,
                editor: props.editor,
              });

              if (!props.clientRect) return;

              popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                duration: 150,
                placement: "bottom-start",
                theme: "none",
                arrow: false,
                offset: [0, 5],
                onCreate(instance) {
                  const content = instance.popper.querySelector(".tippy-content");
                  if (content) {
                    content.setAttribute(
                      "style",
                      "padding: 0; background: transparent; border: none; box-shadow: none;"
                    );
                  }
                },
              }) as TippyInstance[];
            },

            onUpdate(props: any) {
              component.updateProps(props);
              if (!props.clientRect) return;
              popup[0].setProps({
                getReferenceClientRect: props.clientRect,
              });
            },

            onKeyDown(props: any) {
              if (props.event.key === "Escape") {
                popup[0].hide();
                return true;
              }
              return component.ref?.onKeyDown(props) || false;
            },

            onExit() {
              if (popup && popup[0]) popup[0].destroy();
              if (component) component.destroy();
            },
          };
        },
      }),
    ];

    // If terms list is provided, add the paste enricher plugin
    if (terms.length > 0) {
      plugins.push(
        new Plugin({
          key: new PluginKey("termPasteEnricher") as any,
          props: {
            transformPasted: (slice) => {
              const schema = this.editor.schema;

              const enrichFragment = (fragment: Fragment): Fragment => {
                const newNodes: ProsemirrorNode[] = [];
                fragment.forEach((node) => {
                  if (node.isText && node.text) {
                    // Skip text that already has a term mark
                    const hasTermMark = node.marks.some((m) => m.type.name === "term");
                    if (hasTermMark) {
                      newNodes.push(node);
                    } else {
                      newNodes.push(...enrichText(node.text || "", terms, schema as any, node.marks));
                    }
                  } else {
                    newNodes.push(node.copy(enrichFragment(node.content)));
                  }
                });
                return Fragment.fromArray(newNodes);
              };

              const result = new Slice(enrichFragment(slice.content), slice.openStart, slice.openEnd);
              console.log("[Paste Diagnostics] Input plain text:", slice.content.textBetween(0, slice.content.size));
              console.log("[Paste Diagnostics] Output plain text:", result.content.textBetween(0, result.content.size));
              return result;
            },
          },
        })
      );
    }

    return plugins.map(p => p as any);
  },
});

export default TermAutocomplete;
