import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CodeBlock from "@tiptap/extension-code-block";
import { FontFamily } from "@tiptap/extension-font-family";
import { Extension } from "@tiptap/core";
import SlashCommands from "./SlashCommands";

// Custom FontSize Extension
const FontSize = Extension.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: "16px",
            parseHTML: (element) => element.style.fontSize || "16px",
            renderHTML: (attributes) => {
              if (!attributes.fontSize) return {};
              return { style: `font-size: ${attributes.fontSize};` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setFontSize:
        (fontSize: string) =>
        ({ commands }) => {
          return commands.setMark("textStyle", { fontSize });
        },
      unsetFontSize:
        () =>
        ({ commands }) => {
          return commands.unsetMark("textStyle", { extendEmptyMarkRange: true });
        },
    };
  },
});

// Custom LineHeight Extension
const LineHeight = Extension.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["paragraph", "heading", "taskItem", "tableCell", "tableHeader"],
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: "1.5",
            parseHTML: (element) => element.style.lineHeight || "1.5",
            renderHTML: (attributes) => {
              if (!attributes.lineHeight) return {};
              return { style: `line-height: ${attributes.lineHeight};` };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLineHeight:
        (lineHeight: string) =>
        ({ commands }) => {
          return this.options.types.every((type : any) =>
            commands.updateAttributes(type, { lineHeight })
          );
        },
      unsetLineHeight:
        () =>
        ({ commands }) => {
          return this.options.types.every((type : any) =>
            commands.resetAttributes(type, "lineHeight")
          );
        },
    };
  },
});

export const editorExtensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false },
  }),
  Placeholder.configure({ placeholder: "اكتب هنا..." }),
  TextAlign.configure({
    types: ["heading", "paragraph", "taskItem", "tableCell", "tableHeader"],
    alignments: ["left", "center", "right", "justify"],
    defaultAlignment: "right",
  }),
  Image.configure({ inline: true, allowBase64: true }),
  Table.configure({ resizable: true }),
  TableRow,
  TableCell,
  TableHeader,
  Color.configure({ types: [TextStyle.name] }),
  TextStyle,
  Highlight.configure({ multicolor: true }),
  Underline,
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: "https",
    protocols: ["http", "https"],
    HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
    isAllowedUri: (url: string): boolean => {
      try {
        const parsedUrl = new URL(url.includes(":") ? url : `https://${url}`);
        const protocol = parsedUrl.protocol.replace(":", "");
        return ["http", "https"].includes(protocol) && !["example-phishing.com", "malicious-site.net"].includes(parsedUrl.hostname);
      } catch {
        return false;
      }
    },
  }),
  Heading.configure({ levels: [1, 2, 3, 4, 5, 6] as const }),
  TaskList,
  TaskItem.configure({ nested: true }),
  CodeBlock.configure({ HTMLAttributes: { class: "code-block", dir: "ltr" } }),
  SlashCommands,
  FontFamily.configure({ types: ["textStyle"] }),
  FontSize.configure({ types: ["textStyle"] }),
  LineHeight.configure({
    types: ["paragraph", "heading", "taskItem", "tableCell", "tableHeader"],
  }),
];