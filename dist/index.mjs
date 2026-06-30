var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components/rich-text-rtl/editorStyles.ts
var googleFontsLink = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri&family=Cairo&family=Noto+Naskh+Arabic&family=Scheherazade+New&family=Tajawal&family=Almarai&family=Dubai&family=Lalezar&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
`;
var editorStyles = `
  /* Base Tiptap Editor Styles */
  .tiptap {
    padding: 1.5rem 2rem;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
   
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Amiri', serif;
    color: #2c3e50;
  }

  .tiptap p {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
    line-height: 1.8;
  }

  /* Responsive Width */
  @media (max-width: 768px) {
    .tiptap {
      width: 95%;
      padding: 1rem;
    }
  }

  /* First Child Margin Reset */
  .tiptap :first-child {
    margin-top: 0;
  }

  /* List Styles */
  .tiptap ul, .tiptap ol {
    padding: 0 1.5rem;
    margin: 1.5rem 1rem 1.5rem 0.5rem;
    list-style-position: outside;
  }

  .tiptap ul {
    list-style-type: disc;
  }

  .tiptap ol {
    list-style-type: decimal;
  }

  .tiptap ul li p, .tiptap ol li p {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
/* Task List Styles */
.tiptap ul[data-type="taskList"] {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0; /* Simplified margin */
}

.tiptap ul[data-type="taskList"] li {
  display: flex;
  align-items: flex-start;
  padding: 0.25rem 0;
  gap: 0.5rem; /* Gap between checkbox and text */
}

.tiptap ul[data-type="taskList"] li > label {
  flex: 0 0 auto;
  user-select: none;
  margin-top: 0.25rem; /* align checkbox visually with first line of text */
}

.tiptap ul[data-type="taskList"] li > div {
  flex: 1 1 auto;
  text-align: right;
}

.tiptap ul[data-type="taskList"] input[type="checkbox"] {
  cursor: pointer;
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
  accent-color: #8b5cf6; 
  transition: transform 0.2s ease;
}

.tiptap ul[data-type="taskList"] input[type="checkbox"]:hover {
  transform: scale(1.1); 
}

.tiptap ul[data-type="taskList"] input[type="checkbox"]:checked + div {
  text-decoration: line-through;
  color: #6b7280; 
}

  /* RTL Overrides for Task List */
  [dir="rtl"] .tiptap ul[data-type="taskList"] {
    direction: rtl !important;
    margin: 1rem 0.5rem 1rem 0.5rem;
  }

  [dir="rtl"] .tiptap ul[data-type="taskList"] li {
    direction: rtl !important;
    flex-direction: row;
    justify-content: flex-start;
  }

  /* Removed the extra margin on label that was causing too much space */
  [dir="rtl"] .tiptap ul[data-type="taskList"] li > label {
    margin: 0;
    margin-top: 0.35rem; /* Re-apply top margin for alignment */
  }

  /* Headings */
  .tiptap h1, .tiptap h2, .tiptap h3, .tiptap h4, .tiptap h5, .tiptap h6 {
    line-height: 1.2;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    text-wrap: pretty;
    text-align: center;
    color: #2c3e50;
  }

  .tiptap h1, .tiptap h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  .tiptap h1 { font-size: 1.8rem; font-weight: 700; }
  .tiptap h2 { font-size: 1.5rem; font-weight: 600; }
  .tiptap h3 { font-size: 1.3rem; font-weight: 500; }
  .tiptap h4, .tiptap h5, .tiptap h6 { font-size: 1.1rem; font-weight: 500; }

  /* Code Styles */
  .tiptap code {
    background-color: #f3e8ff;
    border-radius: 0.4rem;
    color: #5a189a;
    font-size: 0.85rem;
    padding: 0.25em 0.4em;
    font-family: 'JetBrains Mono', monospace;
    direction: ltr;
    unicode-bidi: embed;
    display: inline-block;
  }

  .tiptap pre {
    background: #0f172a !important;
    border-radius: 0.5rem;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
    margin: 1.5rem 0;
    padding: 1rem;
    direction: ltr;
    text-align: left;
    overflow-x: auto;
  }

  .tiptap pre code {
    background: none;
    color: inherit;
    font-size: 0.8rem;
    padding: 0;
  }

  /* Blockquote Styles */
  .tiptap blockquote {
    border-left: 4px solid #8b5cf6;
    margin: 1.5rem 0;
    padding: 0.75rem 1.5rem;
    text-align: center;
    font-style: italic;
    color: #4a5568;
    background-color: #f5f3ff;
  }

  [dir="rtl"] .tiptap blockquote {
    border-left: none;
    border-right: 4px solid #8b5cf6;
  }

  /* Horizontal Rule */
  .tiptap hr {
    border: none;
    border-top: 2px solid #8b5cf6;
    margin: 2rem 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  /* Table Styles */
  .tiptap table {
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto 1.5rem auto;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .tiptap table td, .tiptap table th {
    border: 1px solid #e2e8f0;
    padding: 0.75rem;
    min-width: 50px;
  }

  .tiptap table th {
    background-color: #f8fafc;
    font-weight: bold;
    color: #2c3e50;
  }

  /* Links */
  .tiptap a {
    color: #8b5cf6;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .tiptap a:hover {
    color: #6d28d9;
    text-decoration: underline;
  }

  /* General RTL Support */
  [dir="rtl"] .tiptap {
    direction: rtl !important;
    text-align: right;
  }

  /* Prosemirror and Editor Content */
  .ProseMirror, .editor-content {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5rem;
    text-align: center;
  }

  [dir="rtl"] .ProseMirror, [dir="rtl"] .editor-content {
    direction: rtl !important;
    text-align: right;
  }

  /* Suggestion Menu Styles */
  .suggestion-menu {
    max-height: 200px;
    overflow-y: auto;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .suggestion-item {
    transition: all 0.2s ease;
    padding: 0.5rem;
    cursor: pointer;
  }

  .suggestion-item:hover,
  .suggestion-item.selected {
    background-color: #f8fafc;
    color: #8b5cf6;
  }
`;
var injectEditorStyles = () => {
  if (document.getElementById("editor-styles")) return;
  const head = document.head;
  const fontDiv = document.createElement("div");
  fontDiv.innerHTML = googleFontsLink;
  while (fontDiv.firstChild) head.appendChild(fontDiv.firstChild);
  const styleElement = document.createElement("style");
  styleElement.id = "editor-styles";
  styleElement.textContent = editorStyles;
  head.appendChild(styleElement);
};

// components/rich-text-rtl/editorConfig.ts
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";

// components/rich-text-rtl/CustomImage.ts
import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";

// components/rich-text-rtl/ImageBlock.tsx
import React3, { useRef, useState } from "react";
import { NodeViewWrapper } from "@tiptap/react";
import { Image as ImageIcon, Upload, Link as LinkIcon } from "lucide-react";

// components/ui/button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// components/ui/button.tsx
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React2.createElement(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// components/rich-text-rtl/ImageBlock.tsx
var ImageBlock = ({ node, updateAttributes, selected }) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  const handleUpload = (event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a2;
        const src = (_a2 = e.target) == null ? void 0 : _a2.result;
        updateAttributes({ src, alt: file.name });
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  const promptForUrl = () => {
    const url = window.prompt("\u0623\u062F\u062E\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 (URL):");
    if (url) {
      updateAttributes({ src: url });
    }
  };
  if (node.attrs.src) {
    return /* @__PURE__ */ React3.createElement(NodeViewWrapper, { as: "figure", className: `relative rounded-md overflow-hidden ${selected ? "ring-2 ring-primary ring-offset-2" : ""}` }, /* @__PURE__ */ React3.createElement("img", { src: node.attrs.src, alt: node.attrs.alt || "\u0635\u0648\u0631\u0629", className: "w-full h-auto rounded-md object-contain max-h-[500px] mx-auto bg-gray-50" }));
  }
  return /* @__PURE__ */ React3.createElement(NodeViewWrapper, { as: "div", className: "my-6" }, /* @__PURE__ */ React3.createElement("div", { className: `border-2 border-dashed rounded-lg p-8 bg-gray-50/50 text-center transition-colors ${selected ? "border-primary bg-primary/5" : "border-gray-200"}` }, /* @__PURE__ */ React3.createElement("div", { className: "flex flex-col items-center justify-center gap-4" }, /* @__PURE__ */ React3.createElement("div", { className: "flex items-center gap-2 text-gray-500 font-medium" }, /* @__PURE__ */ React3.createElement(ImageIcon, { className: "w-6 h-6" }), /* @__PURE__ */ React3.createElement("span", null, "\u0635\u0648\u0631\u0629")), /* @__PURE__ */ React3.createElement("p", { className: "text-sm text-gray-500" }, "\u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0645\u0646 \u062C\u0647\u0627\u0632\u0643 \u0623\u0648 \u0623\u062F\u0631\u062C\u0647\u0627 \u0645\u0646 \u0631\u0627\u0628\u0637."), /* @__PURE__ */ React3.createElement("div", { className: "flex flex-wrap items-center justify-center gap-3 mt-2" }, /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "default",
      onClick: () => {
        var _a;
        return (_a = fileInputRef.current) == null ? void 0 : _a.click();
      },
      disabled: isUploading
    },
    /* @__PURE__ */ React3.createElement(Upload, { className: "w-4 h-4 ml-2" }),
    isUploading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639..." : "\u0631\u0641\u0639 \u0635\u0648\u0631\u0629"
  ), /* @__PURE__ */ React3.createElement(
    "input",
    {
      type: "file",
      ref: fileInputRef,
      onChange: handleUpload,
      accept: "image/*",
      className: "hidden"
    }
  ), /* @__PURE__ */ React3.createElement(
    Button,
    {
      variant: "outline",
      onClick: promptForUrl,
      className: "bg-white"
    },
    /* @__PURE__ */ React3.createElement(LinkIcon, { className: "w-4 h-4 ml-2" }),
    "\u0623\u062F\u0631\u062C \u0645\u0646 \u0631\u0627\u0628\u0637 (URL)"
  )))));
};

// components/rich-text-rtl/CustomImage.ts
var CustomImage = Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageBlock);
  },
  // Make sure to disable inline so it behaves like a block element (like WordPress)
  inline() {
    return false;
  },
  group() {
    return "block";
  }
});

// components/rich-text-rtl/editorConfig.ts
import Table from "@tiptap/extension-table";

// components/rich-text-rtl/TablePlaceholderExtension.ts
import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer as ReactNodeViewRenderer2 } from "@tiptap/react";

// components/rich-text-rtl/TablePlaceholderBlock.tsx
import React4, { useState as useState2 } from "react";
import { NodeViewWrapper as NodeViewWrapper2 } from "@tiptap/react";
import { Table as TableIcon } from "lucide-react";
var TablePlaceholderBlock = ({ editor, getPos, deleteNode, selected }) => {
  const [rows, setRows] = useState2(2);
  const [cols, setCols] = useState2(2);
  const createTable = (e) => {
    e.preventDefault();
    const pos = getPos();
    deleteNode();
    setTimeout(() => {
      editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
    }, 10);
  };
  return /* @__PURE__ */ React4.createElement(NodeViewWrapper2, { as: "div", className: "my-6" }, /* @__PURE__ */ React4.createElement("div", { className: `border-2 border-dashed rounded-lg p-8 bg-gray-50/50 text-center transition-colors ${selected ? "border-primary bg-primary/5" : "border-gray-200"}` }, /* @__PURE__ */ React4.createElement("div", { className: "flex flex-col items-center justify-center gap-4" }, /* @__PURE__ */ React4.createElement("div", { className: "flex items-center gap-2 text-gray-500 font-medium" }, /* @__PURE__ */ React4.createElement(TableIcon, { className: "w-6 h-6" }), /* @__PURE__ */ React4.createElement("span", null, "\u062C\u062F\u0648\u0644")), /* @__PURE__ */ React4.createElement("p", { className: "text-sm text-gray-500" }, "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644 \u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0628\u064A\u0627\u0646\u0627\u062A."), /* @__PURE__ */ React4.createElement("form", { onSubmit: createTable, className: "flex flex-col items-center gap-4 mt-2" }, /* @__PURE__ */ React4.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React4.createElement("div", { className: "flex flex-col items-start gap-1" }, /* @__PURE__ */ React4.createElement("label", { className: "text-sm text-gray-600", htmlFor: "cols-input" }, "\u0639\u062F\u062F \u0627\u0644\u0623\u0639\u0645\u062F\u0629"), /* @__PURE__ */ React4.createElement(
    "input",
    {
      id: "cols-input",
      type: "number",
      min: "1",
      value: cols,
      onChange: (e) => setCols(parseInt(e.target.value) || 1),
      className: "border border-gray-300 rounded-md px-3 py-2 w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary"
    }
  )), /* @__PURE__ */ React4.createElement("div", { className: "flex flex-col items-start gap-1" }, /* @__PURE__ */ React4.createElement("label", { className: "text-sm text-gray-600", htmlFor: "rows-input" }, "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0648\u0641"), /* @__PURE__ */ React4.createElement(
    "input",
    {
      id: "rows-input",
      type: "number",
      min: "1",
      value: rows,
      onChange: (e) => setRows(parseInt(e.target.value) || 1),
      className: "border border-gray-300 rounded-md px-3 py-2 w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary"
    }
  ))), /* @__PURE__ */ React4.createElement(Button, { type: "submit", variant: "default", className: "w-full max-w-[270px]" }, "\u0625\u0646\u0634\u0627\u0621 \u062C\u062F\u0648\u0644")))));
};

// components/rich-text-rtl/TablePlaceholderExtension.ts
var TablePlaceholder = Node.create({
  name: "tablePlaceholder",
  group: "block",
  atom: true,
  parseHTML() {
    return [
      {
        tag: 'div[data-type="table-placeholder"]'
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-type": "table-placeholder" })];
  },
  addNodeView() {
    return ReactNodeViewRenderer2(TablePlaceholderBlock);
  }
});

// components/rich-text-rtl/editorConfig.ts
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
import { Extension as Extension2 } from "@tiptap/core";

// components/rich-text-rtl/SlashCommands.ts
import { Extension } from "@tiptap/core";
import tippy from "tippy.js";
import { ReactRenderer } from "@tiptap/react";

// components/rich-text-rtl/SlashCommandList.tsx
import React7, { forwardRef as forwardRef4, useEffect, useImperativeHandle, useRef as useRef2, useState as useState3 } from "react";

// components/ui/command.tsx
import * as React6 from "react";
import { Command as CommandPrimitive } from "cmdk";

// components/ui/dialog.tsx
import * as React5 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React5.createElement(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React5.createElement(DialogPortal, null, /* @__PURE__ */ React5.createElement(DialogOverlay, null), /* @__PURE__ */ React5.createElement(
    DialogPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React5.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground" }, /* @__PURE__ */ React5.createElement(Cross2Icon, { className: "h-4 w-4" }), /* @__PURE__ */ React5.createElement("span", { className: "sr-only" }, "Close"))
  ));
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React5.createElement(
    "div",
    __spreadValues({
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React5.createElement(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React5.createElement(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// components/ui/command.tsx
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
var Command = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React6.createElement(
    CommandPrimitive,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = CommandPrimitive.displayName;
var CommandInput = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React6.createElement("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "" }, /* @__PURE__ */ React6.createElement(MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ React6.createElement(
    CommandPrimitive.Input,
    __spreadValues({
      ref,
      className: cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  ));
});
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React6.createElement(
    CommandPrimitive.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
    }, props)
  );
});
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = React6.forwardRef((props, ref) => /* @__PURE__ */ React6.createElement(
  CommandPrimitive.Empty,
  __spreadValues({
    ref,
    className: "py-6 text-center text-sm"
  }, props)
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React6.createElement(
    CommandPrimitive.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React6.createElement(
    CommandPrimitive.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = React6.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React6.createElement(
    CommandPrimitive.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )
    }, props)
  );
});
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React6.createElement(
    "span",
    __spreadValues({
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )
    }, props)
  );
};
CommandShortcut.displayName = "CommandShortcut";

// components/rich-text-rtl/SlashCommandList.tsx
var SlashCommandList = forwardRef4(
  ({
    items,
    command,
    className,
    inputPlaceholder = "\u0627\u0628\u062D\u062B \u0639\u0646 \u0623\u0645\u0631...",
    emptyMessage = "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C"
  }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState3(0);
    const listRef = useRef2(null);
    const selectItem = (index) => {
      const item = items[index];
      if (item) {
        command(item);
      }
    };
    const upHandler = () => {
      setSelectedIndex((prev) => (prev + items.length - 1) % items.length);
    };
    const downHandler = () => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    };
    const enterHandler = () => {
      selectItem(selectedIndex);
    };
    useEffect(() => {
      if (listRef.current) {
        const selectedElement = listRef.current.querySelector(
          `[data-index="${selectedIndex}"]`
        );
        if (selectedElement) {
          selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    }, [selectedIndex]);
    useEffect(() => {
      setSelectedIndex(0);
    }, [items]);
    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === "ArrowUp") {
          upHandler();
          return true;
        }
        if (event.key === "ArrowDown") {
          downHandler();
          return true;
        }
        if (event.key === "Enter") {
          enterHandler();
          return true;
        }
        return false;
      }
    }));
    return /* @__PURE__ */ React7.createElement(
      Command,
      {
        className: cn(
          "w-64  bg-white border border-gray-200",
          className
        )
      },
      /* @__PURE__ */ React7.createElement(CommandList, { ref: listRef, className: "max-h-60 overflow-y-auto" }, /* @__PURE__ */ React7.createElement(CommandEmpty, { className: "p-2 text-sm text-gray-500" }, emptyMessage), /* @__PURE__ */ React7.createElement(CommandGroup, null, items.map((item, index) => /* @__PURE__ */ React7.createElement(
        CommandItem,
        {
          key: index,
          value: item.title,
          onSelect: () => selectItem(index),
          "data-index": index,
          className: cn(
            "flex items-center gap-2 p-2 text-sm text-foreground cursor-pointer hover:bg-gray-100",
            index === selectedIndex && "bg-gray-100 text-foreground"
          )
        },
        item.icon && /* @__PURE__ */ React7.createElement("span", null, item.icon),
        /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("div", null, item.title), item.description && /* @__PURE__ */ React7.createElement("div", { className: "text-xs text-gray-500" }, item.description))
      ))))
    );
  }
);
SlashCommandList.displayName = "SlashCommandList";
var SlashCommandList_default = SlashCommandList;

// components/rich-text-rtl/SlashCommands.ts
import Suggestion from "@tiptap/suggestion";
var SlashCommands = Extension.create({
  name: "slashCommands",
  addOptions() {
    return {
      triggerChar: "/",
      commands: [
        {
          title: "\u0639\u0646\u0648\u0627\u0646 1",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u0631\u0626\u064A\u0633\u064A",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run()
        },
        {
          title: "\u0639\u0646\u0648\u0627\u0646 2",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u0639\u064A",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run()
        },
        {
          title: "\u0639\u0646\u0648\u0627\u0646 3",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u0639\u064A \u0635\u063A\u064A\u0631",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run()
        },
        {
          title: "\u0641\u0642\u0631\u0629",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0646\u0635 \u0639\u0627\u062F\u064A",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("paragraph").run()
        },
        {
          title: "\u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064A\u0629",
          description: "\u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0628\u0646\u0642\u0627\u0637",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBulletList().run()
        },
        {
          title: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629",
          description: "\u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleOrderedList().run()
        },
        {
          title: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645",
          description: "\u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645 \u062A\u0641\u0627\u0639\u0644\u064A\u0629",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleTaskList().run()
        },
        {
          title: "\u062C\u062F\u0648\u0644",
          description: "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644 \u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0628\u064A\u0627\u0646\u0627\u062A",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).insertContent({ type: "tablePlaceholder" }).run()
        },
        {
          title: "\u0643\u0648\u062F \u0628\u0631\u0645\u062C\u064A",
          description: "\u0625\u062F\u0631\u0627\u062C \u0643\u062A\u0644\u0629 \u0643\u0648\u062F",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
        },
        {
          title: "\u0627\u0642\u062A\u0628\u0627\u0633",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0627\u0642\u062A\u0628\u0627\u0633",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBlockquote().run()
        },
        {
          title: "\u062E\u0637 \u0623\u0641\u0642\u064A",
          description: "\u0625\u062F\u0631\u0627\u062C \u0641\u0627\u0635\u0644 \u0623\u0641\u0642\u064A",
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setHorizontalRule().run()
        },
        {
          title: "\u0635\u0648\u0631\u0629",
          description: "\u0623\u0636\u0641 \u0635\u0648\u0631\u0629 \u0623\u0648 \u0627\u0631\u0641\u0639\u0647\u0627 \u0645\u0646 \u062C\u0647\u0627\u0632\u0643",
          command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).setImage({ src: "" }).run();
          }
        },
        {
          title: "\u0631\u0627\u0628\u0637",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0631\u0627\u0628\u0637 \u062A\u0634\u0639\u0628\u064A",
          command: ({ editor, range }) => {
            const url = window.prompt("\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0627\u0628\u0637");
            if (url)
              editor.chain().focus().deleteRange(range).setLink({ href: url }).run();
          }
        }
      ],
      suggestionOptions: {},
      tippyOptions: {
        duration: 200,
        placement: "bottom-start",
        interactive: true,
        theme: "none",
        // Prevents default Tippy theme
        arrow: false,
        // Removes the arrow
        offset: [0, 5],
        // Optional: adjusts popup position
        popperOptions: {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                padding: 8
              }
            }
          ]
        },
        // Inline styles to override tippy-content
        onCreate(instance) {
          const content = instance.popper.querySelector(".tippy-content");
          if (content) {
            content.setAttribute(
              "style",
              "padding: 0; background: transparent; border: none; box-shadow: none;"
            );
          }
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      Suggestion(__spreadValues({
        editor: this.editor,
        char: this.options.triggerChar,
        allow: ({ state, range }) => {
          const $from = state.doc.resolve(range.from);
          const isRootDepth = $from.depth === 1;
          const isParagraph = $from.parent.type.name === "paragraph";
          return isRootDepth && isParagraph && $from.parent.textContent.startsWith("/");
        },
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
        items: ({ query }) => {
          return (this.options.commands || []).filter(
            (item) => item.title.toLowerCase().includes(query.toLowerCase())
          ).slice(0, 10);
        },
        render: () => {
          let component;
          let popup;
          return {
            onStart: (props) => {
              component = new ReactRenderer(SlashCommandList_default, {
                props,
                editor: props.editor
              });
              if (!props.clientRect) return;
              popup = tippy("body", __spreadValues({
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual"
              }, this.options.tippyOptions));
            },
            onUpdate(props) {
              component.updateProps(props);
              if (!props.clientRect) return;
              popup[0].setProps({
                getReferenceClientRect: props.clientRect
              });
            },
            onKeyDown(props) {
              var _a;
              if (props.event.key === "Escape") {
                popup[0].hide();
                return true;
              }
              return ((_a = component.ref) == null ? void 0 : _a.onKeyDown(props)) || false;
            },
            onExit() {
              if (popup && popup[0]) popup[0].destroy();
              if (component) component.destroy();
            }
          };
        }
      }, this.options.suggestionOptions))
    ];
  }
});
var SlashCommands_default = SlashCommands;

// components/rich-text-rtl/editorConfig.ts
var FontSize = Extension2.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
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
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (fontSize) => ({ commands }) => {
        return commands.setMark("textStyle", { fontSize });
      },
      unsetFontSize: () => ({ commands }) => {
        return commands.unsetMark("textStyle", { extendEmptyMarkRange: true });
      }
    };
  }
});
var LineHeight = Extension2.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["paragraph", "heading", "taskItem", "tableCell", "tableHeader"]
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
            }
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (lineHeight) => ({ commands }) => {
        return this.options.types.every(
          (type) => commands.updateAttributes(type, { lineHeight })
        );
      },
      unsetLineHeight: () => ({ commands }) => {
        return this.options.types.every(
          (type) => commands.resetAttributes(type, "lineHeight")
        );
      }
    };
  }
});
var editorExtensions = [
  StarterKit.configure({
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false }
  }),
  Placeholder.configure({ placeholder: "\u0627\u0643\u062A\u0628 \u0647\u0646\u0627..." }),
  TextAlign.configure({
    types: ["heading", "paragraph", "taskItem", "tableCell", "tableHeader"],
    alignments: ["left", "center", "right", "justify"],
    defaultAlignment: "right"
  }),
  CustomImage.configure({ allowBase64: true }),
  TablePlaceholder,
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
    isAllowedUri: (url) => {
      try {
        const parsedUrl = new URL(url.includes(":") ? url : `https://${url}`);
        const protocol = parsedUrl.protocol.replace(":", "");
        return ["http", "https"].includes(protocol) && !["example-phishing.com", "malicious-site.net"].includes(parsedUrl.hostname);
      } catch (e) {
        return false;
      }
    }
  }),
  Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
  TaskList,
  TaskItem.configure({ nested: true }),
  CodeBlock.configure({ HTMLAttributes: { class: "code-block", dir: "ltr" } }),
  SlashCommands_default,
  FontFamily.configure({ types: ["textStyle"] }),
  FontSize.configure({ types: ["textStyle"] }),
  LineHeight.configure({
    types: ["paragraph", "heading", "taskItem", "tableCell", "tableHeader"]
  })
];

// components/rich-text-rtl/ArabicRichTextEditor.tsx
import { useEffect as useEffect2 } from "react";
import { EditorProvider } from "@tiptap/react";

// components/rich-text-rtl/Menu/AccessibleToolbars.tsx
import React12 from "react";
import { BubbleMenu as BubbleMenu2, FloatingMenu, useCurrentEditor as useCurrentEditor2 } from "@tiptap/react";

// components/ui/tooltip.tsx
import * as React8 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React8.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ React8.createElement(TooltipPrimitive.Portal, null, /* @__PURE__ */ React8.createElement(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ));
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// components/rich-text-rtl/Menu/menu-config.tsx
import {
  Bold,
  Italic,
  Underline as Underline2,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  CheckSquare,
  Code,
  Link as LinkIcon2,
  Image as ImageIcon2,
  Table as TableIcon2,
  Undo,
  Redo,
  Highlighter,
  Type,
  Eraser,
  X
} from "lucide-react";

// components/ui/input.tsx
import * as React9 from "react";
var Input = React9.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ React9.createElement(
      "input",
      __spreadValues({
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";

// components/rich-text-rtl/Menu/menu-config.tsx
var ColorPickerIcon = ({
  value,
  editor,
  setIsSaved,
  type,
  label,
  defaultValue
}) => {
  return /* @__PURE__ */ React.createElement(
    Input,
    {
      type: "color",
      className: "w-8 h-8 p-0 border-none",
      value: value || defaultValue,
      onChange: (e) => {
        if (!editor || !setIsSaved) return;
        if (type === "text") {
          editor.chain().focus().setColor(e.target.value).run();
        } else {
          editor.chain().focus().toggleHighlight({ color: e.target.value }).run();
        }
        setIsSaved(false);
      },
      "aria-label": label
    }
  );
};
var menuItemsConfig = {
  bold: {
    icon: /* @__PURE__ */ React.createElement(Bold, { className: "w-4 h-4" }),
    label: "\u0639\u0631\u064A\u0636",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleBold().run();
      setIsSaved(false);
    },
    //editor.chain().focus().toggleBold().run()}
    isActive: (editor) => editor.isActive("bold"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBold().run()
  },
  italic: {
    icon: /* @__PURE__ */ React.createElement(Italic, { className: "w-4 h-4" }),
    label: "\u0645\u0627\u0626\u0644",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleItalic().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("italic"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleItalic().run()
  },
  underline: {
    icon: /* @__PURE__ */ React.createElement(Underline2, { className: "w-4 h-4" }),
    label: "\u062A\u0633\u0637\u064A\u0631",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleUnderline().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("underline"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleUnderline().run()
  },
  strike: {
    icon: /* @__PURE__ */ React.createElement(Strikethrough, { className: "w-4 h-4" }),
    label: "\u064A\u062A\u0648\u0633\u0637 \u0627\u0644\u062E\u0637",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleStrike().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("strike"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleStrike().run()
  },
  highlight: {
    icon: /* @__PURE__ */ React.createElement(Highlighter, { className: "w-4 h-4" }),
    label: "\u062A\u0645\u064A\u064A\u0632",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHighlight().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("highlight"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHighlight().run()
  },
  heading1: {
    icon: "H1",
    label: "\u0639\u0646\u0648\u0627\u0646 1",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("heading", { level: 1 }),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHeading({ level: 1 }).run()
  },
  heading2: {
    icon: "H2",
    label: "\u0639\u0646\u0648\u0627\u0646 2",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("heading", { level: 2 }),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHeading({ level: 2 }).run()
  },
  heading3: {
    icon: "H3",
    label: "\u0639\u0646\u0648\u0627\u0646 3",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHeading({ level: 3 }).run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("heading", { level: 3 }),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHeading({ level: 3 }).run()
  },
  paragraph: {
    icon: /* @__PURE__ */ React.createElement(Type, { className: "w-4 h-4" }),
    label: "\u0641\u0642\u0631\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setParagraph().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("paragraph")
  },
  alignLeft: {
    icon: /* @__PURE__ */ React.createElement(AlignLeft, { className: "w-4 h-4" }),
    label: "\u0645\u062D\u0627\u0630\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("left").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "left" }),
    isDisabled: (editor) => !editor.can().setTextAlign("left")
  },
  alignCenter: {
    icon: /* @__PURE__ */ React.createElement(AlignCenter, { className: "w-4 h-4" }),
    label: "\u0645\u062D\u0627\u0630\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u0648\u0633\u0637",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("center").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "center" }),
    isDisabled: (editor) => !editor.can().setTextAlign("center")
  },
  alignRight: {
    icon: /* @__PURE__ */ React.createElement(AlignRight, { className: "w-4 h-4" }),
    label: "\u0645\u062D\u0627\u0630\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("right").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "right" }),
    isDisabled: (editor) => !editor.can().setTextAlign("right")
  },
  alignJustify: {
    icon: /* @__PURE__ */ React.createElement(AlignJustify, { className: "w-4 h-4" }),
    label: "\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0646\u0635",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("justify").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "justify" }),
    isDisabled: (editor) => !editor.can().setTextAlign("justify")
  },
  bulletList: {
    icon: /* @__PURE__ */ React.createElement(List, { className: "w-4 h-4" }),
    label: "\u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064A\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleBulletList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("bulletList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBulletList().run()
  },
  orderedList: {
    icon: /* @__PURE__ */ React.createElement(ListOrdered, { className: "w-4 h-4" }),
    label: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleOrderedList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("orderedList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleOrderedList().run()
  },
  taskList: {
    icon: /* @__PURE__ */ React.createElement(CheckSquare, { className: "w-4 h-4" }),
    label: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleTaskList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("taskList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleTaskList().run()
  },
  codeBlock: {
    icon: /* @__PURE__ */ React.createElement(Code, { className: "w-4 h-4" }),
    label: "\u0643\u0648\u062F \u0628\u0631\u0645\u062C\u064A",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleCodeBlock().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("codeBlock"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleCodeBlock().run()
  },
  horizontalRule: {
    icon: /* @__PURE__ */ React.createElement("hr", { className: "w-4 h-0.5 bg-gray-500" }),
    label: "\u062E\u0637 \u0623\u0641\u0642\u064A",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setHorizontalRule().run();
      setIsSaved(false);
    }
  },
  image: {
    icon: /* @__PURE__ */ React.createElement(ImageIcon2, { className: "w-4 h-4" }),
    label: "\u0625\u062F\u0631\u0627\u062C \u0635\u0648\u0631\u0629",
    action: (editor, setIsSaved) => () => {
      const url = window.prompt("\u0623\u062F\u062E\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629");
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
        setIsSaved(false);
      }
    }
  },
  table: {
    icon: /* @__PURE__ */ React.createElement(TableIcon2, { className: "w-4 h-4" }),
    label: "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644",
    action: (editor) => () => {
      editor.chain().focus().insertContent({ type: "tablePlaceholder" }).run();
    },
    isDisabled: () => false
  },
  link: {
    icon: /* @__PURE__ */ React.createElement(LinkIcon2, { className: "w-4 h-4" }),
    label: "\u0625\u062F\u0631\u0627\u062C \u0631\u0627\u0628\u0637",
    action: (editor, setIsSaved) => () => {
      const url = window.prompt("\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0627\u0628\u0637");
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
        setIsSaved(false);
      }
    },
    isActive: (editor) => editor.isActive("link")
  },
  textColor: {
    icon: /* @__PURE__ */ React.createElement(ColorPickerIcon, { type: "text", label: "\u0627\u062E\u062A\u0631 \u0644\u0648\u0646 \u0627\u0644\u0646\u0635", defaultValue: "#000000" }),
    label: "\u0644\u0648\u0646 \u0627\u0644\u0646\u0635",
    action: (editor, setIsSaved) => () => {
    }
  },
  highlightColor: {
    icon: /* @__PURE__ */ React.createElement(ColorPickerIcon, { type: "highlight", label: "\u0627\u062E\u062A\u0631 \u0644\u0648\u0646 \u0627\u0644\u062A\u0645\u064A\u064A\u0632", defaultValue: "#00000000" }),
    label: "\u0644\u0648\u0646 \u0627\u0644\u062A\u0645\u064A\u064A\u0632",
    action: (editor, setIsSaved) => () => {
    }
  },
  undo: {
    icon: /* @__PURE__ */ React.createElement(Undo, { className: "w-4 h-4" }),
    label: "\u062A\u0631\u0627\u062C\u0639",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().undo().run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().chain().focus().undo().run()
  },
  redo: {
    icon: /* @__PURE__ */ React.createElement(Redo, { className: "w-4 h-4" }),
    label: "\u0625\u0639\u0627\u062F\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().redo().run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().chain().focus().redo().run()
  },
  clearFormat: {
    icon: /* @__PURE__ */ React.createElement(Eraser, { className: "w-4 h-4" }),
    // Using Eraser icon for "clear format"
    label: "\u0645\u0633\u062D \u0627\u0644\u062A\u0646\u0633\u064A\u0642",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().unsetAllMarks().run();
      setIsSaved(false);
    }
  },
  clearNodes: {
    icon: /* @__PURE__ */ React.createElement(X, { className: "w-4 h-4" }),
    // Using X icon for "clear nodes"
    label: "\u0645\u0633\u062D \u0627\u0644\u0639\u0646\u0627\u0635\u0631",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().clearNodes().run();
      setIsSaved(false);
    }
  }
};

// components/rich-text-rtl/Menu/EditorControls.tsx
import React10 from "react";
var EditorControls = ({
  editor,
  menuItems,
  isMobileMenuOpen,
  setIsSaved
}) => {
  const getMenuItemConfig = (id) => menuItems.find((item) => item.id === id) || { id, enabled: false };
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: cn(
        "p-2 flex flex-wrap items-center gap-2 md:gap-3",
        isMobileMenuOpen ? "block" : "hidden md:flex"
      )
    },
    Object.entries(menuItemsConfig).map(([id, config]) => {
      var _a, _b, _c, _d;
      const itemConfig = getMenuItemConfig(id);
      if (!itemConfig.enabled) return null;
      const action = itemConfig.onClick || config.action(editor, setIsSaved);
      const icon = itemConfig.customIcon || config.icon;
      const label = itemConfig.customLabel || config.label;
      const isColorInput = ["textColor", "highlightColor"].includes(id);
      return /* @__PURE__ */ React10.createElement(Tooltip, { key: id }, /* @__PURE__ */ React10.createElement(TooltipTrigger, { asChild: true }, isColorInput ? React10.cloneElement(
        icon,
        {
          value: id === "textColor" ? ((_a = editor.getAttributes("textStyle")) == null ? void 0 : _a.color) || "#000000" : ((_b = editor.getAttributes("highlight")) == null ? void 0 : _b.color) || "#00000000",
          editor,
          setIsSaved
        }
      ) : /* @__PURE__ */ React10.createElement(
        Button,
        {
          variant: ((_c = config.isActive) == null ? void 0 : _c.call(config, editor)) ? "secondary" : "ghost",
          size: "sm",
          onClick: action,
          disabled: ((_d = config.isDisabled) == null ? void 0 : _d.call(config, editor)) || false,
          className: "w-9 h-9 md:w-10 md:h-10",
          "aria-label": label
        },
        /* @__PURE__ */ React10.createElement(React10.Fragment, null, icon)
      )), /* @__PURE__ */ React10.createElement(TooltipContent, null, label));
    })
  );
};

// components/rich-text-rtl/Menu/AccessibleToolbars.tsx
import { Plus } from "lucide-react";

// components/rich-text-rtl/Menu/TableBubbleMenu.tsx
import React11 from "react";
import { BubbleMenu, useCurrentEditor } from "@tiptap/react";
import {
  Trash2,
  ArrowUpToLine,
  ArrowDownToLine,
  ArrowLeftToLine,
  ArrowRightToLine,
  Trash
} from "lucide-react";
var TableBubbleMenu = () => {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }
  const tableControls = [
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0641 \u0644\u0644\u0623\u0639\u0644\u0649",
      icon: /* @__PURE__ */ React11.createElement(ArrowUpToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addRowBefore().run()
    },
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0641 \u0644\u0644\u0623\u0633\u0641\u0644",
      icon: /* @__PURE__ */ React11.createElement(ArrowDownToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addRowAfter().run()
    },
    {
      label: "\u062D\u0630\u0641 \u0635\u0641",
      icon: /* @__PURE__ */ React11.createElement(Trash2, { className: "w-4 h-4 text-red-500" }),
      action: () => editor.chain().focus().deleteRow().run()
    },
    {
      divider: true
    },
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0648\u062F \u0644\u0644\u064A\u0645\u064A\u0646",
      icon: /* @__PURE__ */ React11.createElement(ArrowRightToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addColumnBefore().run()
      // In RTL, before is right
    },
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0648\u062F \u0644\u0644\u064A\u0633\u0627\u0631",
      icon: /* @__PURE__ */ React11.createElement(ArrowLeftToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addColumnAfter().run()
      // In RTL, after is left
    },
    {
      label: "\u062D\u0630\u0641 \u0639\u0645\u0648\u062F",
      icon: /* @__PURE__ */ React11.createElement(Trash2, { className: "w-4 h-4 text-red-500" }),
      action: () => editor.chain().focus().deleteColumn().run()
    },
    {
      divider: true
    },
    {
      label: "\u062D\u0630\u0641 \u0627\u0644\u062C\u062F\u0648\u0644",
      icon: /* @__PURE__ */ React11.createElement(Trash, { className: "w-4 h-4 text-red-600" }),
      action: () => editor.chain().focus().deleteTable().run()
    }
  ];
  return /* @__PURE__ */ React11.createElement(
    BubbleMenu,
    {
      editor,
      tippyOptions: { duration: 100, placement: "bottom" },
      shouldShow: ({ editor: editor2 }) => editor2.isActive("table"),
      className: "flex bg-background border shadow-md rounded-md p-1 items-center z-50 gap-1"
    },
    tableControls.map((control, index) => {
      if (control.divider) {
        return /* @__PURE__ */ React11.createElement("div", { key: `div-${index}`, className: "w-px h-5 bg-gray-200 mx-1" });
      }
      return /* @__PURE__ */ React11.createElement(Tooltip, { key: index }, /* @__PURE__ */ React11.createElement(TooltipTrigger, { asChild: true }, /* @__PURE__ */ React11.createElement(
        Button,
        {
          variant: "ghost",
          size: "sm",
          className: "h-8 w-8 p-0",
          onClick: control.action
        },
        control.icon
      )), /* @__PURE__ */ React11.createElement(TooltipContent, null, /* @__PURE__ */ React11.createElement("p", null, control.label)));
    })
  );
};

// components/rich-text-rtl/Menu/AccessibleToolbars.tsx
var AccessibleToolbars = ({ menuItems }) => {
  const { editor } = useCurrentEditor2();
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */ React12.createElement(TooltipProvider, null, /* @__PURE__ */ React12.createElement(TableBubbleMenu, null), /* @__PURE__ */ React12.createElement(
    BubbleMenu2,
    {
      editor,
      tippyOptions: { duration: 100 },
      shouldShow: ({ editor: editor2, view, state, from, to }) => {
        if (editor2.isActive("table")) return false;
        const { doc, selection } = state;
        const { empty } = selection;
        const isEmptyTextBlock = !doc.textBetween(from, to).length;
        return !empty && !isEmptyTextBlock;
      },
      className: "flex bg-background border shadow-md rounded-md p-1 items-center z-50"
    },
    /* @__PURE__ */ React12.createElement(
      EditorControls,
      {
        editor,
        menuItems,
        isMobileMenuOpen: true,
        setIsSaved: () => {
        }
      }
    )
  ), /* @__PURE__ */ React12.createElement(FloatingMenu, { editor, tippyOptions: { duration: 100, placement: "left-start" }, className: "flex gap-1 z-50" }, /* @__PURE__ */ React12.createElement(Button, { variant: "ghost", size: "icon", onClick: () => editor.commands.insertContent("/"), className: "rounded-full w-6 h-6 bg-background border shadow-sm text-muted-foreground hover:text-foreground" }, /* @__PURE__ */ React12.createElement(Plus, { className: "w-3 h-3" }))));
};

// components/rich-text-rtl/ArabicRichTextEditor.tsx
var defaultContent = `
<h1 style="text-align: center;">\u0627\u062E\u062A\u0628\u0627\u0631 \u0645\u062D\u0631\u0631 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u063A\u0646\u064A\u0629</h1>
<p>\u0645\u0631\u062D\u0628\u064B\u0627! \u0647\u0630\u0627 \u0646\u0635 \u0627\u062E\u062A\u0628\u0627\u0631\u064A \u0644\u062A\u062C\u0631\u0628\u0629 <strong>\u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0639\u0631\u064A\u0636</strong> \u0648<em>\u0627\u0644\u0645\u0627\u0626\u0644</em> \u0648<ins>\u0627\u0644\u062A\u0633\u0637\u064A\u0631</ins> \u0648<s>\u0627\u0644\u062E\u0637 \u0627\u0644\u0645\u0634\u0637\u0648\u0628</s>. \u064A\u0645\u0643\u0646\u0646\u0627 \u0623\u064A\u0636\u064B\u0627 \u062A\u062C\u0631\u0628\u0629 <mark>\u0627\u0644\u062A\u0645\u064A\u064A\u0632</mark> \u0628\u0644\u0648\u0646 \u0645\u062E\u062A\u0644\u0641.</p>

<h2>\u0642\u0648\u0627\u0626\u0645</h2>
<ul>
  <li>\u0639\u0646\u0635\u0631 \u0623\u0648\u0644 \u0641\u064A \u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064A\u0629</li>
  <li>\u0639\u0646\u0635\u0631 \u062B\u0627\u0646\u064D \u0645\u0639 <a href="https://example.com" target="_blank" rel="noopener noreferrer">\u0631\u0627\u0628\u0637</a> \u064A\u0645\u0643\u0646 \u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u064A\u0647</li>
</ul>
<ol>
  <li>\u0639\u0646\u0635\u0631 \u0645\u0631\u0642\u0645 \u0623\u0648\u0644</li>
  <li>\u0639\u0646\u0635\u0631 \u0645\u0631\u0642\u0645 \u062B\u0627\u0646\u064D</li>
</ol>

<h3>\u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645</h3>
  <ul data-type="taskList">
        <li data-type="taskItem" data-checked="true"> \u0645\u0647\u0645\u0629 1</li>
        <li data-type="taskItem" data-checked="true"> \u0645\u0647\u0645\u0629 2</li>
        <li data-type="taskItem" data-checked="true"> \u0645\u0647\u0645\u0629 3</li>
  </ul>

<h2>\u0643\u0648\u062F \u0628\u0631\u0645\u062C\u064A</h2>
<p>\u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0643\u0648\u062F \u0645\u0636\u0645\u0646: <code>console.log("\u0645\u0631\u062D\u0628\u064B\u0627");</code></p>
<pre><code class="language-javascript">
function greet(name) {
  return "\u0645\u0631\u062D\u0628\u064B\u0627 " + name;
}
console.log(greet("\u0627\u0644\u0639\u0627\u0644\u0645"));
</code></pre>

<h2>\u062C\u062F\u0648\u0644</h2>
<table>
  <thead>
    <tr>
      <th>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 1</th>
      <th>\u0627\u0644\u0639\u0646\u0648\u0627\u0646 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\u062E\u0644\u064A\u0629 1</td>
      <td>\u062E\u0644\u064A\u0629 2</td>
    </tr>
    <tr>
      <td>\u062E\u0644\u064A\u0629 3</td>
      <td>\u062E\u0644\u064A\u0629 4</td>
    </tr>
  </tbody>
</table>

<h2>\u0627\u0642\u062A\u0628\u0627\u0633</h2>
<blockquote>
  "\u0627\u0644\u0639\u0644\u0645 \u0641\u064A \u0627\u0644\u0635\u063A\u0631 \u0643\u0627\u0644\u0646\u0642\u0634 \u0641\u064A \u0627\u0644\u062D\u062C\u0631"<br>\u2014 \u0645\u062B\u0644 \u0639\u0631\u0628\u064A
</blockquote>

<h2>\u0635\u0648\u0631\u0629</h2>
<p>\u0625\u0644\u064A\u0643 \u0635\u0648\u0631\u0629 \u0627\u062E\u062A\u0628\u0627\u0631\u064A\u0629:</p>
<img src="https://via.placeholder.com/150" alt="\u0635\u0648\u0631\u0629 \u0627\u062E\u062A\u0628\u0627\u0631\u064A\u0629" loading="lazy">

<p style="text-align: justify; direction: rtl;">\u0646\u0635 \u0645\u0648\u0632\u0639 \u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0645\u062D\u0627\u0630\u0627\u0629: Lorem ipsum dolor sit amet, consectetur adipiscing elit. \u0647\u0630\u0627 \u0646\u0635 \u0645\u062E\u062A\u0644\u0637 \u0644\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u062F\u0639\u0645 \u0627\u0644\u0644\u063A\u062A\u064A\u0646.</p>

<hr>

<p>\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631. \u062C\u0631\u0628 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 (<strong>Undo</strong>) \u0648\u0625\u0639\u0627\u062F\u0629 (<strong>Redo</strong>) \u0623\u064A\u0636\u064B\u0627!</p>
`;
var defaultMenuItems = [
  { id: "bold", enabled: true },
  { id: "italic", enabled: true },
  { id: "underline", enabled: true },
  { id: "strike", enabled: true },
  { id: "highlight", enabled: true },
  { id: "heading1", enabled: true },
  { id: "heading2", enabled: true },
  { id: "heading3", enabled: true },
  { id: "paragraph", enabled: true },
  { id: "alignLeft", enabled: true },
  { id: "alignCenter", enabled: true },
  { id: "alignRight", enabled: true },
  { id: "alignJustify", enabled: true },
  { id: "bulletList", enabled: true },
  { id: "orderedList", enabled: true },
  { id: "taskList", enabled: true },
  { id: "codeBlock", enabled: true },
  { id: "horizontalRule", enabled: true },
  { id: "image", enabled: true },
  { id: "table", enabled: true },
  { id: "link", enabled: true },
  { id: "textColor", enabled: true },
  { id: "highlightColor", enabled: true },
  { id: "undo", enabled: true },
  { id: "redo", enabled: true },
  { id: "clearFormat", enabled: true },
  { id: "clearNodes", enabled: true }
];
var defaultEditorProps = {
  attributes: {
    class: "tiptap prose focus:outline-none min-h-[400px]"
  }
};
var ArabicRichTextEditor = ({
  menuItems = defaultMenuItems,
  onSave,
  onChange,
  content = defaultContent,
  defaultFont = "Amiri",
  defaultFontSize = "18px",
  defaultLineHeight = "1.5",
  extensions = editorExtensions,
  editorProps = defaultEditorProps,
  className = "flex flex-col min-h-screen bg-background",
  injectStyles = true
}) => {
  useEffect2(() => {
    if (injectStyles) {
      injectEditorStyles();
    }
  }, [injectStyles]);
  const handleUpdate = ({ editor }) => {
    if (onChange) {
      onChange(editor.getHTML());
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement(
    EditorProvider,
    {
      slotBefore: null,
      extensions,
      content,
      editorProps,
      onUpdate: handleUpdate
    },
    /* @__PURE__ */ React.createElement(AccessibleToolbars, { menuItems })
  ));
};
var ArabicRichTextEditor_default = ArabicRichTextEditor;
export {
  ArabicRichTextEditor_default as ArabicRichTextEditor,
  editorExtensions,
  injectEditorStyles
};
//# sourceMappingURL=index.mjs.map