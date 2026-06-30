import { Mark, mergeAttributes } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import tippy, { Instance as TippyInstance } from "tippy.js";

export const TermMark = Mark.create({
  name: "term",

  addAttributes() {
    return {
      arabic: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-arabic"),
        renderHTML: (attributes) => ({
          "data-arabic": attributes.arabic,
        }),
      },
      english: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-english"),
        renderHTML: (attributes) => ({
          "data-english": attributes.english,
        }),
      },
      description: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-description"),
        renderHTML: (attributes) => ({
          "data-description": attributes.description,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[data-term]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(
        { "data-term": "" },
        HTMLAttributes,
        {
          class: "technical-term text-current border-b border-dotted border-gray-400 dark:border-gray-600 cursor-pointer transition-all duration-150 hover:bg-gray-50/60 dark:hover:bg-gray-800/40",
        }
      ),
      0,
    ];
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("termTooltip"),
        props: {
          handleDOMEvents: {
            mouseover(view, event) {
              const target = event.target as HTMLElement;
              const termEl = target.closest("span[data-term]");

              if (termEl && termEl instanceof HTMLElement) {
                // If this element already has a tippy active, just show it and return
                if ((termEl as any)._tippy) {
                  (termEl as any)._tippy.show();
                  return false;
                }

                const arabic = termEl.getAttribute("data-arabic") || "";
                const english = termEl.getAttribute("data-english") || "";
                const description =
                  termEl.getAttribute("data-description") || "مصطلح معتمد في المعاجم التقنية.";
                const url = `https://taarib.thearabic.org/search?q=${encodeURIComponent(english)}`;

                // Format description text to show sources and pages cleanly in a smaller font size
                let formattedDescription = "";
                if (description.includes("\n")) {
                  const lines = description.split("\n");
                  const processed: string[] = [];
                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (!line) continue;
                    // Check if the line is a page number, and append to the previous source line
                    if ((line.startsWith("ص.") || line.startsWith("ص ")) && processed.length > 0) {
                      processed[processed.length - 1] += ` (${line})`;
                    } else {
                      processed.push(line);
                    }
                  }

                  formattedDescription = processed
                    .map((line, idx) => {
                      if (idx === 0) {
                        return `<div class="font-semibold text-gray-800 text-[10px] mb-0.5">${line}</div>`;
                      }
                      if (line.startsWith("(")) {
                        return `<div class="text-gray-400 text-[8.5px] mb-0.5">${line}</div>`;
                      }
                      return `<div class="text-gray-500 text-[8.5px] leading-normal pr-2">• ${line}</div>`;
                    })
                    .join("");
                } else {
                  formattedDescription = `<div class="text-gray-600 text-[10px]">${description}</div>`;
                }

                tippy(termEl, {
                  content: `
                    <div class="p-2.5 text-right text-[10px] bg-white text-gray-800 rounded-lg shadow-md border border-gray-200 max-w-xs direction-rtl" dir="rtl">
                      <div class="font-bold text-[11px] mb-1 text-gray-900">${arabic} (${english})</div>
                      <div class="mb-2 flex flex-col gap-0.5">${formattedDescription}</div>
                      <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline font-medium flex items-center justify-end gap-0.5">
                        بحث في معجم تعريب ↗
                      </a>
                    </div>
                  `,
                  allowHTML: true,
                  interactive: true,
                  placement: "top",
                  theme: "none",
                  appendTo: () => document.body,
                  duration: [150, 150],
                  onCreate(instance) {
                    const content = instance.popper.querySelector(".tippy-content");
                    if (content) {
                      content.setAttribute(
                        "style",
                        "padding: 0; background: transparent; border: none; box-shadow: none;"
                      );
                    }
                  },
                });

                // Immediately trigger show for the first hover
                (termEl as any)._tippy?.show();
              }
              return false;
            },
          },
        },
      }),
    ];
  },
});
