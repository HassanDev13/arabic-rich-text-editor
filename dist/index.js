"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// components/rich-text-rtl/index.ts
var index_exports = {};
__export(index_exports, {
  ArabicRichTextEditor: () => ArabicRichTextEditor_default,
  TermAutocomplete: () => TermAutocomplete_default,
  TermMark: () => TermMark,
  checkOutdatedTerms: () => checkOutdatedTerms,
  editorExtensions: () => editorExtensions,
  getCustomTermsFromStorage: () => getCustomTermsFromStorage,
  incrementTermUsage: () => incrementTermUsage,
  injectEditorStyles: () => injectEditorStyles,
  updateOutdatedTerms: () => updateOutdatedTerms
});
module.exports = __toCommonJS(index_exports);

// components/rich-text-rtl/editorStyles.ts
var googleFontsLink = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo&family=Noto+Naskh+Arabic&family=Scheherazade+New&family=Tajawal&family=Almarai&family=Dubai&family=Lalezar&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
`;
var editorStyles = `
  @font-face {
    font-family: 'Amiri';
    src: url('/Amiri/Amiri-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Amiri';
    src: url('/Amiri/Amiri-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Amiri';
    src: url('/Amiri/Amiri-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Amiri';
    src: url('/Amiri/Amiri-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  :root {
    --tiptap-font-family: 'Amiri', serif;
    --tiptap-font-size: 18px;
    --tiptap-line-height: 1.6;
    --tiptap-code-font: 'JetBrains Mono', monospace;

    /* Light Theme Colors */
    --tiptap-text: #2c3e50;
    --tiptap-heading: #2c3e50;
    --tiptap-primary: #020617; /* Super Dark */
    --tiptap-primary-hover: #000000;
    --tiptap-border: #e2e8f0;
    --tiptap-muted: #6b7280;
    --tiptap-icon: #64748b;
    
    --tiptap-bg-code: #f3e8ff;
    --tiptap-text-code: #5a189a;
    
    --tiptap-bg-pre: #ffffff;
    --tiptap-text-pre: #1e293b;
    --tiptap-border-pre: #e2e8f0;
    
    --tiptap-bg-quote: #ffffff;
    --tiptap-text-quote: #1e293b;
    --tiptap-border-quote: #e2e8f0;
    
    --tiptap-bg-table-header: #f8fafc;
    --tiptap-text-table-header: #2c3e50;
    --tiptap-border-table: #e2e8f0;
    
    --tiptap-bg-mark: rgba(253, 224, 71, 0.4);
    --tiptap-text-mark: inherit;

    --tiptap-bg-suggestion: #f8fafc;
  }

  .dark {
    /* Dark Theme Colors */
    --tiptap-text: #f3f4f6;
    --tiptap-heading: #f3f4f6;
    --tiptap-primary: #f8fafc; /* Super Light for contrast in dark mode */
    --tiptap-primary-hover: #ffffff;
    --tiptap-border: #374151;
    --tiptap-muted: #9ca3af;
    --tiptap-icon: #cbd5e1;
    
    --tiptap-bg-code: #374151;
    --tiptap-text-code: #e5e7eb;
    
    --tiptap-bg-pre: #000000;
    --tiptap-text-pre: #f3f4f6;
    --tiptap-border-pre: #374151;
    
    --tiptap-bg-quote: #000000;
    --tiptap-text-quote: #f3f4f6;
    --tiptap-border-quote: #374151;
    
    --tiptap-bg-table-header: #1f2937;
    --tiptap-text-table-header: #f3f4f6;
    --tiptap-border-table: #4b5563;
    
    --tiptap-bg-mark: rgba(253, 224, 71, 0.2);
    --tiptap-text-mark: #fde047;

    --tiptap-bg-suggestion: #1f2937;
  }

  /* Base Tiptap Editor Styles */
  .tiptap {
    padding: 1.5rem 2rem;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    text-align: right;
   
    font-size: var(--tiptap-font-size);
    line-height: var(--tiptap-line-height);
    font-family: var(--tiptap-font-family);
    color: var(--tiptap-text) !important;
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
    padding: 0;
    padding-inline-start: 1.5rem;
    margin: 1.5rem 0;
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
    margin: 1.5rem 0;
  }

  .tiptap ul[data-type="taskList"] li {
    display: flex;
    align-items: flex-start;
    padding: 0.25rem 0;
    gap: 0.5rem;
  }

  .tiptap ul[data-type="taskList"] li > label {
    flex: 0 0 auto;
    user-select: none;
    margin-top: 0.35rem;
  }

  .tiptap ul[data-type="taskList"] li > div {
    flex: 1 1 auto;
  }

  .tiptap ul[data-type="taskList"] input[type="checkbox"] {
    cursor: pointer;
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
    accent-color: var(--tiptap-primary); 
    transition: transform 0.2s ease;
  }

  .tiptap ul[data-type="taskList"] input[type="checkbox"]:hover {
    transform: scale(1.1); 
  }

  .tiptap ul[data-type="taskList"] input[type="checkbox"]:checked + div {
    text-decoration: line-through;
    color: var(--tiptap-muted) !important; 
  }

  /* Headings */
  .tiptap h1, .tiptap h2, .tiptap h3, .tiptap h4, .tiptap h5, .tiptap h6 {
    line-height: 1.2;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    text-wrap: pretty;
    color: var(--tiptap-heading) !important;
  }

  .tiptap h1, .tiptap h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  .tiptap h1 { font-size: 1.8rem; font-weight: 700; }
  .tiptap h2 { font-size: 1.5rem; font-weight: 600; }
  .tiptap h3 { font-size: 1.3rem; font-weight: 500; }
  .tiptap h4, .tiptap h5, .tiptap h6 { font-size: 1.1rem; font-weight: 500; }

  /* Collapsible Headings */
  .collapsible-heading {
    position: relative;
    padding-inline-start: 1.5rem;
  }
  
  .collapsible-heading::before {
    content: "\u25BC";
    position: absolute;
    inset-inline-start: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8rem;
    color: var(--tiptap-icon) !important;
    opacity: 0.3;
    cursor: pointer;
    transition: opacity 0.2s;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .collapsible-heading:hover::before {
    opacity: 1;
  }
  
  .collapsible-heading.collapsed::before {
    content: "\u25C0";
    opacity: 1;
  }
  
  .hidden {
    display: none !important;
  }

  /* Code Styles */
  .tiptap code {
    background-color: var(--tiptap-bg-code) !important;
    border-radius: 0.4rem;
    color: var(--tiptap-text-code) !important;
    font-size: 0.85rem;
    padding: 0.25em 0.4em;
    font-family: var(--tiptap-code-font);
    direction: ltr;
    unicode-bidi: embed;
    display: inline-block;
  }

  .tiptap pre {
    background: var(--tiptap-bg-pre) !important;
    border: 1px solid var(--tiptap-border-pre) !important;
    border-radius: 0.5rem;
    color: var(--tiptap-text-pre) !important;
    font-family: var(--tiptap-code-font);
    margin: 1.5rem 0;
    padding: 1rem;
    direction: ltr;
    text-align: left;
    overflow-x: auto;
  }

  .tiptap pre code {
    background: none !important;
    background-color: transparent !important;
    color: inherit !important;
    font-size: 0.8rem;
    padding: 0;
  }

  /* Blockquote Styles */
  .tiptap blockquote {
    background: var(--tiptap-bg-quote) !important;
    border: 1px solid var(--tiptap-border-quote) !important;
    border-inline-start: 4px solid var(--tiptap-primary) !important;
    border-radius: 0.25rem;
    margin: 1.5rem 0;
    padding: 0.75rem 1.5rem;
    font-style: italic;
    color: var(--tiptap-text-quote) !important;
  }

  /* Horizontal Rule */
  .tiptap hr {
    border: none;
    border-top: 2px solid var(--tiptap-border) !important;
    margin: 2rem 0;
  }

  /* Images */
  .tiptap img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem auto;
    display: block;
  }

  /* Table Styles */
  .tiptap .tableWrapper {
    overflow-x: auto;
    overflow-y: hidden;
    margin: 1.5rem 0;
    max-width: 100%;
    -webkit-overflow-scrolling: touch;
  }

  .tiptap table {
    border-collapse: collapse;
    width: 100%;
    margin: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  .tiptap table td, .tiptap table th {
    border: 1px solid var(--tiptap-border-table) !important;
    padding: 0.75rem;
    min-width: 50px;
    position: relative;
  }

  .tiptap table th {
    background-color: var(--tiptap-bg-table-header) !important;
    font-weight: bold;
    color: var(--tiptap-text-table-header) !important;
  }

  /* Table Column Resizing */
  .tiptap .column-resize-handle {
    background-color: var(--tiptap-primary);
    bottom: -2px;
    position: absolute;
    right: auto;
    inset-inline-end: -2px;
    pointer-events: none;
    top: -2px;
    width: 4px;
  }

  .tiptap.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }

  /* Links */
  .tiptap a {
    color: var(--tiptap-primary) !important;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .tiptap a:hover {
    color: var(--tiptap-primary-hover) !important;
    text-decoration: underline;
  }

  /* Mark / Highlight */
  .tiptap mark {
    background-color: var(--tiptap-bg-mark) !important;
    color: var(--tiptap-text-mark) !important;
    border-radius: 0.2rem;
    padding: 0.1em 0.2em;
  }

  /* General RTL Support */
  .tiptap:dir(rtl) {
    text-align: right;
  }

  /* Prosemirror and Editor Content */
  .ProseMirror, .editor-content {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding: 1.5rem;
    text-align: start;
  }

  .ProseMirror-focused {
    outline: none;
  }

  /* Term Autocomplete Styles */
  span[data-term] {
    border-bottom: 2px dashed var(--tiptap-primary);
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;
  }
  
  span[data-term]:hover {
    background-color: var(--tiptap-bg-suggestion);
  }

  .suggestion-list {
    background: var(--tiptap-bg-pre); /* or white */
    border: 1px solid var(--tiptap-border);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .suggestion-item {
    transition: all 0.2s ease;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--tiptap-text);
  }

  .suggestion-item:hover,
  .suggestion-item.selected {
    background-color: var(--tiptap-bg-suggestion);
    color: var(--tiptap-primary);
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
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));

// components/rich-text-rtl/CustomImage.ts
var import_extension_image = __toESM(require("@tiptap/extension-image"));
var import_react3 = require("@tiptap/react");

// components/rich-text-rtl/ImageBlock.tsx
var import_react = require("react");
var import_react2 = require("@tiptap/react");
var import_lucide_react = require("lucide-react");

// components/ui/button.tsx
var React = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// components/ui/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
var Button = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var ImageBlock = ({ node, updateAttributes, selected, deleteNode, editor, getPos }) => {
  const [isUploading, setIsUploading] = (0, import_react.useState)(false);
  const fileInputRef = (0, import_react.useRef)(null);
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
        if (typeof getPos === "function") {
          const pos = getPos() + node.nodeSize;
          editor.chain().insertContentAt(pos, "<p></p>").focus(pos + 1).run();
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const promptForUrl = () => {
    const url = window.prompt("\u0623\u062F\u062E\u0644 \u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0629 (URL):");
    if (url) {
      updateAttributes({ src: url });
      if (typeof getPos === "function") {
        const pos = getPos() + node.nodeSize;
        editor.chain().insertContentAt(pos, "<p></p>").focus(pos + 1).run();
      }
    }
  };
  if (node.attrs.src) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NodeViewWrapper, { as: "figure", className: "relative group my-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `relative rounded-md overflow-hidden ${selected ? "ring-2 ring-primary ring-offset-2" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: node.attrs.src, alt: node.attrs.alt || "\u0635\u0648\u0631\u0629", className: "w-full h-auto rounded-md object-contain max-h-[500px] mx-auto bg-muted" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "destructive", size: "icon", className: "h-8 w-8 shadow-md", onClick: () => deleteNode(), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Trash2, { className: "h-4 w-4" }) }) })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NodeViewWrapper, { as: "div", className: "my-6", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `border-2 border-dashed rounded-lg p-8 bg-muted/50 text-center transition-colors ${selected ? "border-primary bg-primary/5" : "border-muted-foreground/20"}`, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-2 text-muted-foreground font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Image, { className: "w-6 h-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u0635\u0648\u0631\u0629" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-sm text-muted-foreground", children: "\u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0645\u0646 \u062C\u0647\u0627\u0632\u0643 \u0623\u0648 \u0623\u062F\u0631\u062C\u0647\u0627 \u0645\u0646 \u0631\u0627\u0628\u0637." }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-3 mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        Button,
        {
          variant: "default",
          onClick: () => {
            var _a;
            return (_a = fileInputRef.current) == null ? void 0 : _a.click();
          },
          disabled: isUploading,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Upload, { className: "w-4 h-4 ml-2" }),
            isUploading ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639..." : "\u0631\u0641\u0639 \u0635\u0648\u0631\u0629"
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "input",
        {
          type: "file",
          ref: fileInputRef,
          onChange: handleUpload,
          accept: "image/*",
          className: "hidden"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        Button,
        {
          variant: "outline",
          onClick: promptForUrl,
          className: "bg-background",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Link, { className: "w-4 h-4 ml-2" }),
            "\u0623\u062F\u0631\u062C \u0645\u0646 \u0631\u0627\u0628\u0637 (URL)"
          ]
        }
      )
    ] })
  ] }) }) });
};

// components/rich-text-rtl/CustomImage.ts
var CustomImage = import_extension_image.default.extend({
  addNodeView() {
    return (0, import_react3.ReactNodeViewRenderer)(ImageBlock);
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
var import_extension_table = __toESM(require("@tiptap/extension-table"));

// components/rich-text-rtl/TablePlaceholderExtension.ts
var import_core = require("@tiptap/core");
var import_react6 = require("@tiptap/react");

// components/rich-text-rtl/TablePlaceholderBlock.tsx
var import_react4 = require("react");
var import_react5 = require("@tiptap/react");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var TablePlaceholderBlock = ({ editor, getPos, deleteNode, selected }) => {
  const [rows, setRows] = (0, import_react4.useState)(2);
  const [cols, setCols] = (0, import_react4.useState)(2);
  const createTable = (e) => {
    e.preventDefault();
    const pos = getPos();
    deleteNode();
    setTimeout(() => {
      editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
    }, 10);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react5.NodeViewWrapper, { as: "div", className: "my-6", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `border-2 border-dashed rounded-lg p-8 bg-gray-50/50 text-center transition-colors ${selected ? "border-primary bg-primary/5" : "border-gray-200"}`, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2 text-gray-500 font-medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.Table, { className: "w-6 h-6" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: "\u062C\u062F\u0648\u0644" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "text-sm text-gray-500", children: "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644 \u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0628\u064A\u0627\u0646\u0627\u062A." }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { onSubmit: createTable, className: "flex flex-col items-center gap-4 mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "text-sm text-gray-600", htmlFor: "cols-input", children: "\u0639\u062F\u062F \u0627\u0644\u0623\u0639\u0645\u062F\u0629" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              id: "cols-input",
              type: "number",
              min: "1",
              value: cols,
              onChange: (e) => setCols(parseInt(e.target.value) || 1),
              className: "border border-gray-300 rounded-md px-3 py-2 w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-col items-start gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { className: "text-sm text-gray-600", htmlFor: "rows-input", children: "\u0639\u062F\u062F \u0627\u0644\u0635\u0641\u0648\u0641" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "input",
            {
              id: "rows-input",
              type: "number",
              min: "1",
              value: rows,
              onChange: (e) => setRows(parseInt(e.target.value) || 1),
              className: "border border-gray-300 rounded-md px-3 py-2 w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { type: "submit", variant: "default", className: "w-full max-w-[270px]", children: "\u0625\u0646\u0634\u0627\u0621 \u062C\u062F\u0648\u0644" })
    ] })
  ] }) }) });
};

// components/rich-text-rtl/TablePlaceholderExtension.ts
var TablePlaceholder = import_core.Node.create({
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
    return ["div", (0, import_core.mergeAttributes)(HTMLAttributes, { "data-type": "table-placeholder" })];
  },
  addNodeView() {
    return (0, import_react6.ReactNodeViewRenderer)(TablePlaceholderBlock);
  }
});

// components/rich-text-rtl/editorConfig.ts
var import_extension_table_row = __toESM(require("@tiptap/extension-table-row"));
var import_extension_table_cell = __toESM(require("@tiptap/extension-table-cell"));
var import_extension_table_header = __toESM(require("@tiptap/extension-table-header"));
var import_extension_color = __toESM(require("@tiptap/extension-color"));
var import_extension_text_style = __toESM(require("@tiptap/extension-text-style"));
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_underline = __toESM(require("@tiptap/extension-underline"));
var import_extension_link = __toESM(require("@tiptap/extension-link"));

// components/rich-text-rtl/CustomHeading.ts
var import_extension_heading = require("@tiptap/extension-heading");
var import_state = require("@tiptap/pm/state");
var CustomHeading = import_extension_heading.Heading.extend({
  addAttributes() {
    var _a;
    return __spreadProps(__spreadValues({}, (_a = this.parent) == null ? void 0 : _a.call(this)), {
      collapsed: {
        default: false,
        parseHTML: (element) => element.getAttribute("data-collapsed") === "true",
        renderHTML: (attributes) => {
          if (!attributes.collapsed) return { "data-collapsed": "false", class: "collapsible-heading" };
          return { "data-collapsed": "true", class: "collapsible-heading collapsed" };
        }
      }
    });
  },
  addKeyboardShortcuts() {
    var _a;
    return __spreadProps(__spreadValues({}, (_a = this.parent) == null ? void 0 : _a.call(this)), {
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;
        if (!empty || $from.parent.type.name !== this.name) {
          return false;
        }
        const isAtStart = $from.parentOffset === 0;
        if (isAtStart) {
          return editor.chain().command(({ tr, dispatch }) => {
            if (dispatch) {
              const node = state.schema.nodes.paragraph.create();
              tr.insert($from.before(), node);
            }
            return true;
          }).scrollIntoView().run();
        }
        return editor.chain().command(({ tr, dispatch }) => {
          if (dispatch) {
            tr.split($from.pos, 1, [{ type: state.schema.nodes.paragraph }]);
          }
          return true;
        }).scrollIntoView().run();
      }
    });
  },
  addProseMirrorPlugins() {
    var _a;
    const parentPlugins = ((_a = this.parent) == null ? void 0 : _a.call(this)) || [];
    const clickPlugin = new import_state.Plugin({
      key: new import_state.PluginKey("headingClick"),
      props: {
        handleDOMEvents: {
          mousedown: (view, event) => {
            const target = event.target;
            if (!target) return false;
            const heading = target.closest(".collapsible-heading");
            if (!heading) return false;
            const rect = heading.getBoundingClientRect();
            const clickX = event.clientX;
            const dir = window.getComputedStyle(heading).direction;
            let isClickOnArrow = false;
            if (dir === "rtl") {
              isClickOnArrow = rect.right - clickX <= 35 && rect.right - clickX >= -10;
            } else {
              isClickOnArrow = clickX - rect.left <= 35 && clickX - rect.left >= -10;
            }
            if (isClickOnArrow) {
              event.preventDefault();
              const pos = view.posAtDOM(heading, 0);
              if (pos < 0) return false;
              const $pos = view.state.doc.resolve(pos);
              if ($pos.depth === 0) return false;
              const nodePos = $pos.before();
              const headingNode = view.state.doc.nodeAt(nodePos);
              if (headingNode && headingNode.type.name === "heading") {
                const isCollapsed = !headingNode.attrs.collapsed;
                const level = headingNode.attrs.level;
                const tr = view.state.tr;
                tr.setNodeMarkup(nodePos, null, __spreadProps(__spreadValues({}, headingNode.attrs), {
                  collapsed: isCollapsed
                }));
                let currentPos = nodePos + headingNode.nodeSize;
                let skipUntilLevel = null;
                while (currentPos < tr.doc.content.size) {
                  const node = tr.doc.nodeAt(currentPos);
                  if (!node) break;
                  if (node.type.name === "heading") {
                    if (node.attrs.level <= level) break;
                    if (!isCollapsed) {
                      if (skipUntilLevel !== null && node.attrs.level <= skipUntilLevel) {
                        skipUntilLevel = null;
                      }
                      if (skipUntilLevel === null) {
                        tr.setNodeMarkup(currentPos, null, __spreadProps(__spreadValues({}, node.attrs), { hidden: false }));
                        if (node.attrs.collapsed) {
                          skipUntilLevel = node.attrs.level;
                        }
                      }
                    } else {
                      tr.setNodeMarkup(currentPos, null, __spreadProps(__spreadValues({}, node.attrs), { hidden: true }));
                    }
                  } else {
                    if (isCollapsed) {
                      tr.setNodeMarkup(currentPos, null, __spreadProps(__spreadValues({}, node.attrs), { hidden: true }));
                    } else {
                      if (skipUntilLevel === null) {
                        tr.setNodeMarkup(currentPos, null, __spreadProps(__spreadValues({}, node.attrs), { hidden: false }));
                      }
                    }
                  }
                  currentPos += node.nodeSize;
                }
                const endPos = nodePos + headingNode.nodeSize - 1;
                tr.setSelection(import_state.TextSelection.create(tr.doc, endPos));
                view.dispatch(tr);
                return true;
              }
            }
            return false;
          }
        }
      }
    });
    return [...parentPlugins, clickPlugin];
  }
});

// components/rich-text-rtl/HiddenAttribute.ts
var import_core2 = require("@tiptap/core");
var HiddenAttribute = import_core2.Extension.create({
  name: "hiddenAttribute",
  addGlobalAttributes() {
    return [
      {
        types: [
          "paragraph",
          "heading",
          "bulletList",
          "orderedList",
          "taskList",
          "blockquote",
          "table",
          "horizontalRule",
          "image",
          "figure",
          "taskItem",
          "listItem"
        ],
        attributes: {
          hidden: {
            default: false,
            parseHTML: (element) => element.classList.contains("hidden"),
            renderHTML: (attributes) => {
              if (attributes.hidden) {
                return { class: "hidden" };
              }
              return {};
            }
          }
        }
      }
    ];
  }
});

// components/rich-text-rtl/editorConfig.ts
var import_extension_task_list = __toESM(require("@tiptap/extension-task-list"));
var import_extension_task_item = __toESM(require("@tiptap/extension-task-item"));
var import_extension_code_block = __toESM(require("@tiptap/extension-code-block"));
var import_extension_font_family = require("@tiptap/extension-font-family");
var import_core6 = require("@tiptap/core");
var import_state4 = require("@tiptap/pm/state");

// components/rich-text-rtl/SlashCommands.ts
var import_core3 = require("@tiptap/core");
var import_tippy = __toESM(require("tippy.js"));
var import_react8 = require("@tiptap/react");

// components/rich-text-rtl/SlashCommandList.tsx
var import_react7 = require("react");

// components/ui/command.tsx
var React5 = __toESM(require("react"));
var import_cmdk = require("cmdk");

// components/ui/dialog.tsx
var React4 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_react_icons = require("@radix-ui/react-icons");
var import_jsx_runtime4 = require("react/jsx-runtime");
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var DialogContent = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      DialogPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_icons.Cross2Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var DialogTitle = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var DialogDescription = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// components/ui/command.tsx
var import_react_icons2 = require("@radix-ui/react-icons");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Command = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_cmdk.Command,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_icons2.MagnifyingGlassIcon, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_cmdk.Command.Input,
      __spreadValues({
        ref,
        className: cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }, props)
    )
  ] });
});
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_cmdk.Command.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
    }, props)
  );
});
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React5.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  import_cmdk.Command.Empty,
  __spreadValues({
    ref,
    className: "py-6 text-center text-sm"
  }, props)
));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_cmdk.Command.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_cmdk.Command.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_cmdk.Command.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )
    }, props)
  );
});
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_jsx_runtime6 = require("react/jsx-runtime");
var SlashCommandList = (0, import_react7.forwardRef)(
  ({
    items,
    command,
    className,
    inputPlaceholder = "\u0627\u0628\u062D\u062B \u0639\u0646 \u0623\u0645\u0631...",
    emptyMessage = "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C"
  }, ref) => {
    const [selectedIndex, setSelectedIndex] = (0, import_react7.useState)(0);
    const listRef = (0, import_react7.useRef)(null);
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
    (0, import_react7.useEffect)(() => {
      if (listRef.current) {
        const selectedElement = listRef.current.querySelector(
          `[data-index="${selectedIndex}"]`
        );
        if (selectedElement) {
          selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    }, [selectedIndex]);
    (0, import_react7.useEffect)(() => {
      setSelectedIndex(0);
    }, [items]);
    (0, import_react7.useImperativeHandle)(ref, () => ({
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
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Command,
      {
        className: cn(
          "w-64  bg-white border border-gray-200",
          className
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CommandList, { ref: listRef, className: "max-h-60 overflow-y-auto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CommandEmpty, { className: "p-2 text-sm text-gray-500", children: emptyMessage }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CommandGroup, { children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
            CommandItem,
            {
              value: item.title,
              onSelect: () => selectItem(index),
              "data-index": index,
              className: cn(
                "flex items-center gap-2 p-2 text-sm text-foreground cursor-pointer hover:bg-gray-100",
                index === selectedIndex && "bg-gray-100 text-foreground"
              ),
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: item.title }),
                  item.description && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs text-gray-500", children: item.description })
                ] })
              ]
            },
            index
          )) })
        ] })
      }
    );
  }
);
SlashCommandList.displayName = "SlashCommandList";
var SlashCommandList_default = SlashCommandList;

// components/rich-text-rtl/SlashCommands.ts
var import_suggestion = __toESM(require("@tiptap/suggestion"));
var SlashCommands = import_core3.Extension.create({
  name: "slashCommands",
  addOptions() {
    return {
      triggerChar: "/",
      commands: [
        {
          title: "\u0639\u0646\u0648\u0627\u0646 1",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u0631\u0626\u064A\u0633\u064A",
          searchTerms: ["h1", "heading 1", "title"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run()
        },
        {
          title: "\u0639\u0646\u0648\u0627\u0646 2",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u0639\u064A",
          searchTerms: ["h2", "heading 2", "subtitle"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run()
        },
        {
          title: "\u0639\u0646\u0648\u0627\u0646 3",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u0639\u064A \u0635\u063A\u064A\u0631",
          searchTerms: ["h3", "heading 3", "subheading"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run()
        },
        {
          title: "\u0641\u0642\u0631\u0629",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0646\u0635 \u0639\u0627\u062F\u064A",
          searchTerms: ["p", "paragraph", "text"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setNode("paragraph").run()
        },
        {
          title: "\u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064A\u0629",
          description: "\u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0628\u0646\u0642\u0627\u0637",
          searchTerms: ["ul", "bullet", "list", "unordered"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBulletList().run()
        },
        {
          title: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629",
          description: "\u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629",
          searchTerms: ["ol", "ordered", "list", "number"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleOrderedList().run()
        },
        {
          title: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645",
          description: "\u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645 \u062A\u0641\u0627\u0639\u0644\u064A\u0629",
          searchTerms: ["task", "todo", "checklist", "check"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleTaskList().run()
        },
        {
          title: "\u062C\u062F\u0648\u0644",
          description: "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644 \u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0628\u064A\u0627\u0646\u0627\u062A",
          searchTerms: ["table", "grid"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).insertContent({ type: "tablePlaceholder" }).run()
        },
        {
          title: "\u0643\u0648\u062F \u0628\u0631\u0645\u062C\u064A",
          description: "\u0625\u062F\u0631\u0627\u062C \u0643\u062A\u0644\u0629 \u0643\u0648\u062F",
          searchTerms: ["code", "block", "pre"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
        },
        {
          title: "\u0627\u0642\u062A\u0628\u0627\u0633",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0627\u0642\u062A\u0628\u0627\u0633",
          searchTerms: ["quote", "blockquote"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).toggleBlockquote().run()
        },
        {
          title: "\u062E\u0637 \u0623\u0641\u0642\u064A",
          description: "\u0625\u062F\u0631\u0627\u062C \u0641\u0627\u0635\u0644 \u0623\u0641\u0642\u064A",
          searchTerms: ["hr", "horizontal", "rule", "line", "divider"],
          command: ({ editor, range }) => editor.chain().focus().deleteRange(range).setHorizontalRule().run()
        },
        {
          title: "\u0635\u0648\u0631\u0629",
          description: "\u0623\u0636\u0641 \u0635\u0648\u0631\u0629 \u0623\u0648 \u0627\u0631\u0641\u0639\u0647\u0627 \u0645\u0646 \u062C\u0647\u0627\u0632\u0643",
          searchTerms: ["image", "picture", "img", "photo"],
          command: ({ editor, range }) => {
            editor.chain().focus().deleteRange(range).setImage({ src: "" }).run();
          }
        },
        {
          title: "\u0631\u0627\u0628\u0637",
          description: "\u0625\u0636\u0627\u0641\u0629 \u0631\u0627\u0628\u0637 \u062A\u0634\u0639\u0628\u064A",
          searchTerms: ["link", "url", "a", "href"],
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
      (0, import_suggestion.default)(__spreadValues({
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
          return (this.options.commands || []).filter((item) => {
            const q = query.toLowerCase();
            return item.title.toLowerCase().includes(q) || item.searchTerms && item.searchTerms.some((term) => term.toLowerCase().includes(q));
          }).slice(0, 10);
        },
        render: () => {
          let component;
          let popup;
          return {
            onStart: (props) => {
              component = new import_react8.ReactRenderer(SlashCommandList_default, {
                props,
                editor: props.editor
              });
              if (!props.clientRect) return;
              popup = (0, import_tippy.default)("body", __spreadValues({
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

// components/rich-text-rtl/TermMark.ts
var import_core4 = require("@tiptap/core");
var import_state2 = require("@tiptap/pm/state");
var import_tippy2 = __toESM(require("tippy.js"));
var TermMark = import_core4.Mark.create({
  name: "term",
  addAttributes() {
    return {
      arabic: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-arabic"),
        renderHTML: (attributes) => ({
          "data-arabic": attributes.arabic
        })
      },
      english: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-english"),
        renderHTML: (attributes) => ({
          "data-english": attributes.english
        })
      },
      description: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-description"),
        renderHTML: (attributes) => ({
          "data-description": attributes.description
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "span[data-term]"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      (0, import_core4.mergeAttributes)(
        { "data-term": "" },
        HTMLAttributes,
        {
          class: "technical-term text-current border-b border-dotted border-gray-400 dark:border-gray-600 cursor-pointer transition-all duration-150 hover:bg-gray-50/60 dark:hover:bg-gray-800/40"
        }
      ),
      0
    ];
  },
  addProseMirrorPlugins() {
    return [
      new import_state2.Plugin({
        key: new import_state2.PluginKey("termTooltip"),
        props: {
          handleDOMEvents: {
            mouseover(view, event) {
              var _a;
              const target = event.target;
              const termEl = target.closest("span[data-term]");
              if (termEl && termEl instanceof HTMLElement) {
                if (termEl._tippy) {
                  termEl._tippy.show();
                  return false;
                }
                const arabic = termEl.getAttribute("data-arabic") || "";
                const english = termEl.getAttribute("data-english") || "";
                const description = termEl.getAttribute("data-description") || "\u0645\u0635\u0637\u0644\u062D \u0645\u0639\u062A\u0645\u062F \u0641\u064A \u0627\u0644\u0645\u0639\u0627\u062C\u0645 \u0627\u0644\u062A\u0642\u0646\u064A\u0629.";
                const url = `https://taarib.thearabic.org/search?q=${encodeURIComponent(english)}`;
                let formattedDescription = "";
                if (description.includes("\n")) {
                  const lines = description.split("\n");
                  const processed = [];
                  for (let i = 0; i < lines.length; i++) {
                    const line = lines[i].trim();
                    if (!line) continue;
                    if ((line.startsWith("\u0635.") || line.startsWith("\u0635 ")) && processed.length > 0) {
                      processed[processed.length - 1] += ` (${line})`;
                    } else {
                      processed.push(line);
                    }
                  }
                  formattedDescription = processed.map((line, idx) => {
                    if (idx === 0) {
                      return `<div class="font-semibold text-gray-800 text-[10px] mb-0.5">${line}</div>`;
                    }
                    if (line.startsWith("(")) {
                      return `<div class="text-gray-400 text-[8.5px] mb-0.5">${line}</div>`;
                    }
                    return `<div class="text-gray-500 text-[8.5px] leading-normal pr-2">\u2022 ${line}</div>`;
                  }).join("");
                } else {
                  formattedDescription = `<div class="text-gray-600 text-[10px]">${description}</div>`;
                }
                (0, import_tippy2.default)(termEl, {
                  content: `
                    <div class="p-2.5 text-right text-[10px] bg-white text-gray-800 rounded-lg shadow-md border border-gray-200 max-w-xs direction-rtl" dir="rtl">
                      <div class="font-bold text-[11px] mb-1 text-gray-900">${arabic} (${english})</div>
                      <div class="mb-2 flex flex-col gap-0.5">${formattedDescription}</div>
                      <a href="${url}" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 underline font-medium flex items-center justify-end gap-0.5">
                        \u0628\u062D\u062B \u0641\u064A \u0645\u0639\u062C\u0645 \u062A\u0639\u0631\u064A\u0628 \u2197
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
                  }
                });
                (_a = termEl._tippy) == null ? void 0 : _a.show();
              }
              return false;
            }
          }
        }
      })
    ];
  }
});

// components/rich-text-rtl/AutoDirection.ts
var import_core5 = require("@tiptap/core");
var import_state3 = require("@tiptap/pm/state");
function getDirection(text) {
  if (text.startsWith("/")) return null;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(char)) return "rtl";
    if (/[a-zA-Z]/.test(char)) return "ltr";
  }
  return null;
}
var AutoDirection = import_core5.Extension.create({
  name: "autoDirection",
  addGlobalAttributes() {
    return [
      {
        types: [
          "paragraph",
          "heading",
          "bulletList",
          "orderedList",
          "taskList",
          "blockquote",
          "table",
          "taskItem",
          "listItem"
        ],
        attributes: {
          dir: {
            default: "rtl",
            // default to rtl for this Arabic editor
            parseHTML: (element) => element.getAttribute("dir"),
            renderHTML: (attributes) => {
              if (attributes.dir) {
                return { dir: attributes.dir };
              }
              return { dir: "rtl" };
            }
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new import_state3.Plugin({
        key: new import_state3.PluginKey("autoDirection"),
        appendTransaction: (transactions, oldState, newState) => {
          const docChanges = transactions.some((transaction) => transaction.docChanged);
          if (!docChanges) return;
          let tr = newState.tr;
          let modified = false;
          const supportedTypes = ["paragraph", "heading", "bulletList", "orderedList", "taskList", "blockquote", "taskItem", "listItem"];
          newState.doc.descendants((node, pos) => {
            if (node.isBlock && supportedTypes.includes(node.type.name)) {
              const text = node.textContent;
              let dir = getDirection(text);
              if (!dir) {
                dir = "rtl";
              }
              if (node.attrs.dir !== dir) {
                tr.setNodeMarkup(pos, null, __spreadProps(__spreadValues({}, node.attrs), { dir }));
                modified = true;
              }
            }
            return true;
          });
          if (modified) {
            return tr;
          }
        }
      })
    ];
  }
});

// components/rich-text-rtl/editorConfig.ts
var TaskItemCursorFix = import_core6.Extension.create({
  name: "taskItemCursorFix",
  addProseMirrorPlugins() {
    return [
      new import_state4.Plugin({
        key: new import_state4.PluginKey("taskItemCursorFix"),
        props: {
          handleDOMEvents: {
            mousedown: (view, event) => {
              const target = event.target;
              if (target && target.tagName === "INPUT" && target.getAttribute("type") === "checkbox") {
                const taskItem = target.closest('li[data-type="taskItem"]');
                if (taskItem) {
                  const pos = view.posAtDOM(taskItem, 0);
                  if (pos >= 0) {
                    const $pos = view.state.doc.resolve(pos);
                    const nodePos = $pos.before();
                    const node = view.state.doc.nodeAt(nodePos);
                    if (node && node.type.name === "taskItem") {
                      const endPos = nodePos + node.nodeSize - 1;
                      const tr = view.state.tr;
                      tr.setSelection(import_state4.TextSelection.create(tr.doc, endPos));
                      view.dispatch(tr);
                    }
                  }
                }
              }
              return false;
            }
          }
        }
      })
    ];
  }
});
var FontSize = import_core6.Extension.create({
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
var LineHeight = import_core6.Extension.create({
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
  import_starter_kit.default.configure({
    heading: false,
    bulletList: { keepMarks: true, keepAttributes: false },
    orderedList: { keepMarks: true, keepAttributes: false }
  }),
  import_extension_placeholder.default.configure({ placeholder: "\u0627\u0643\u062A\u0628 \u0647\u0646\u0627..." }),
  import_extension_text_align.default.configure({
    types: ["heading", "paragraph", "taskItem", "tableCell", "tableHeader"],
    alignments: ["left", "center", "right", "justify"]
  }),
  CustomImage.configure({ allowBase64: true }),
  TablePlaceholder,
  import_extension_table.default.configure({ resizable: true }),
  import_extension_table_row.default,
  import_extension_table_cell.default,
  import_extension_table_header.default,
  import_extension_color.default.configure({ types: [import_extension_text_style.default.name] }),
  import_extension_text_style.default,
  import_extension_highlight.default.configure({ multicolor: true }),
  import_extension_underline.default,
  import_extension_link.default.configure({
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
  CustomHeading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
  HiddenAttribute,
  import_extension_task_list.default,
  import_extension_task_item.default.configure({ nested: true }),
  TaskItemCursorFix,
  import_extension_code_block.default.configure({ HTMLAttributes: { class: "code-block", dir: "ltr" } }),
  SlashCommands_default,
  TermMark,
  import_extension_font_family.FontFamily.configure({ types: ["textStyle"] }),
  FontSize.configure({ types: ["textStyle"] }),
  LineHeight.configure({
    types: ["paragraph", "heading", "taskItem", "tableCell", "tableHeader"]
  }),
  AutoDirection
];

// components/rich-text-rtl/ArabicRichTextEditor.tsx
var import_react18 = require("react");
var import_react19 = require("@tiptap/react");

// components/rich-text-rtl/TermAutocomplete.ts
var import_core7 = require("@tiptap/core");
var import_tippy3 = __toESM(require("tippy.js"));
var import_react10 = require("@tiptap/react");
var import_suggestion2 = __toESM(require("@tiptap/suggestion"));
var import_state5 = require("@tiptap/pm/state");
var import_model = require("@tiptap/pm/model");

// components/rich-text-rtl/TermAutocompleteList.tsx
var import_react9 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var TermAutocompleteList = (0, import_react9.forwardRef)(
  ({ items, command, className }, ref) => {
    const [selectedIndex, setSelectedIndex] = (0, import_react9.useState)(0);
    const listRef = (0, import_react9.useRef)(null);
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
    (0, import_react9.useEffect)(() => {
      if (listRef.current) {
        const selectedElement = listRef.current.querySelector(
          `[data-index="${selectedIndex}"]`
        );
        if (selectedElement) {
          selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    }, [selectedIndex]);
    (0, import_react9.useEffect)(() => {
      setSelectedIndex(0);
    }, [items]);
    (0, import_react9.useImperativeHandle)(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === "ArrowUp") {
          upHandler();
          return true;
        }
        if (event.key === "ArrowDown") {
          downHandler();
          return true;
        }
        if (event.key === "Enter" || event.key === "Tab") {
          enterHandler();
          return true;
        }
        return false;
      }
    }));
    if (items.length === 0) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Command,
      {
        className: cn(
          "w-64 bg-white border border-gray-200 shadow-md rounded-md z-50 text-right direction-rtl",
          className
        ),
        dir: "rtl",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(CommandList, { ref: listRef, className: "max-h-60 overflow-y-auto p-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "px-2 py-1.5 text-[11px] font-semibold text-gray-400 border-b border-gray-100 mb-1", children: "\u0627\u0642\u062A\u0631\u0627\u062D\u0627\u062A \u0627\u0644\u0645\u0635\u0637\u0644\u062D\u0627\u062A (\u0627\u0636\u063A\u0637 Enter)" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CommandGroup, { children: items.map((item, index) => {
            var _a;
            const isSelected = index === selectedIndex;
            const isTopUsed = index === 0 && ((_a = item.usageCount) != null ? _a : 0) > 10;
            return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
              CommandItem,
              {
                value: `${item.arabic} ${item.english}`,
                onSelect: () => selectItem(index),
                "data-index": index,
                className: cn(
                  "flex items-center justify-between p-2 text-sm text-foreground cursor-pointer rounded hover:bg-gray-100",
                  isSelected && "bg-gray-100 text-foreground"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center gap-1.5 min-w-0", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "font-medium text-gray-900", children: item.arabic }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "text-xs text-gray-400 font-mono", children: [
                      "(",
                      item.english,
                      ")"
                    ] })
                  ] }),
                  isTopUsed && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-medium flex-shrink-0 mr-2", children: "\u0634\u0627\u0626\u0639" })
                ]
              },
              `${item.arabic}-${item.english}`
            );
          }) })
        ] })
      }
    );
  }
);
TermAutocompleteList.displayName = "TermAutocompleteList";
var TermAutocompleteList_default = TermAutocompleteList;

// components/rich-text-rtl/termDictionary.ts
var LOCAL_STORAGE_KEY = "arabic-rich-text-editor-term-usage";
function incrementTermUsage(arabic, english) {
  var _a;
  if (typeof window === "undefined") return;
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    const key = `${arabic}:${english}`;
    parsed[key] = ((_a = parsed[key]) != null ? _a : 0) + 1;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
  } catch (e) {
    console.error("Failed to save term usage to localStorage", e);
  }
}
function getCustomTermsFromStorage(customTerms) {
  const mapTerm = (term, count) => {
    var _a;
    return {
      arabic: term.arabic,
      english: term.english,
      description: (_a = term.description) != null ? _a : "",
      usageCount: count
    };
  };
  if (typeof window === "undefined") {
    return customTerms.map((t) => {
      var _a;
      return mapTerm(t, (_a = t.usageCount) != null ? _a : 0);
    });
  }
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return customTerms.map((term) => {
        var _a, _b;
        const key = `${term.arabic}:${term.english}`;
        return mapTerm(term, (_b = (_a = parsed[key]) != null ? _a : term.usageCount) != null ? _b : 0);
      });
    }
  } catch (e) {
    console.error("Failed to read custom term usage from localStorage", e);
  }
  return customTerms.map((t) => {
    var _a;
    return mapTerm(t, (_a = t.usageCount) != null ? _a : 0);
  });
}
function checkOutdatedTerms(editor, currentTerms) {
  if (!editor || !currentTerms || currentTerms.length === 0) return 0;
  let count = 0;
  const termsMap = new Map(currentTerms.map((t) => [t.english.toLowerCase(), t]));
  editor.state.doc.descendants((node) => {
    const termMark = node.marks.find((mark) => mark.type.name === "term");
    if (termMark) {
      const { arabic, english } = termMark.attrs;
      if (english) {
        const currentTerm = termsMap.get(english.toLowerCase());
        if (currentTerm && currentTerm.arabic !== arabic) {
          count++;
        }
      }
    }
    return true;
  });
  return count;
}
function updateOutdatedTerms(editor, currentTerms) {
  if (!editor || !currentTerms || currentTerms.length === 0) return 0;
  const { state, view } = editor;
  const { doc } = state;
  const tr = state.tr;
  const termsMap = new Map(currentTerms.map((t) => [t.english.toLowerCase(), t]));
  const updates = [];
  doc.descendants((node, pos) => {
    const termMark = node.marks.find((mark) => mark.type.name === "term");
    if (termMark) {
      const { arabic, english } = termMark.attrs;
      if (english) {
        const currentTerm = termsMap.get(english.toLowerCase());
        if (currentTerm && currentTerm.arabic !== arabic) {
          const from = pos;
          const to = pos + node.nodeSize;
          const newText = `${currentTerm.arabic} (${currentTerm.english})`;
          updates.push({ from, to, newText, term: currentTerm });
        }
      }
    }
    return true;
  });
  updates.sort((a, b) => b.from - a.from);
  updates.forEach((update) => {
    tr.insertText(update.newText, update.from, update.to);
    const newTo = update.from + update.newText.length;
    tr.removeMark(update.from, newTo, state.schema.marks.term);
    const newMark = state.schema.marks.term.create({
      arabic: update.term.arabic,
      english: update.term.english,
      description: update.term.description || ""
    });
    tr.addMark(update.from, newTo, newMark);
  });
  if (updates.length > 0) {
    view.dispatch(tr);
  }
  return updates.length;
}

// components/rich-text-rtl/TermAutocomplete.ts
function getOverlapLength(textBefore, termArabic) {
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
function enrichText(text, terms, schema, originalMarks = []) {
  if (!text) return [];
  const sortedTerms = [...terms].sort(
    (a, b) => b.english.length - a.english.length || b.arabic.length - a.arabic.length
  );
  let earliestMatch = null;
  for (const term2 of sortedTerms) {
    const escEnglish = term2.english.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const escArabic = term2.arabic.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const engRegex = new RegExp(`\\b${escEnglish}\\b`, "gi");
    const araRegex = new RegExp(`(?<![\\s\\u200b\\ufeff])${escArabic}(?![\\s\\u200b\\ufeff])`, "g");
    let match;
    engRegex.lastIndex = 0;
    while ((match = engRegex.exec(text)) !== null) {
      if (earliestMatch === null || match.index < earliestMatch.index) {
        earliestMatch = {
          index: match.index,
          length: match[0].length,
          term: term2,
          matchedText: match[0]
        };
      }
    }
    araRegex.lastIndex = 0;
    while ((match = araRegex.exec(text)) !== null) {
      if (earliestMatch === null || match.index < earliestMatch.index) {
        earliestMatch = {
          index: match.index,
          length: match[0].length,
          term: term2,
          matchedText: match[0]
        };
      }
    }
  }
  if (!earliestMatch) {
    return [schema.text(text, originalMarks)];
  }
  const afterMatchOffset = earliestMatch.index + earliestMatch.length;
  const trailingText = text.slice(afterMatchOffset);
  const escEng = earliestMatch.term.english.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const escAra = earliestMatch.term.arabic.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  let lookaheadRegex;
  if (earliestMatch.matchedText.toLowerCase() === earliestMatch.term.arabic.toLowerCase()) {
    lookaheadRegex = new RegExp(`^[\\s\\u200b\\ufeff]*\\(?[\\s\\u200b\\ufeff]*${escEng}\\b[\\s\\u200b\\ufeff]*\\)?`, "i");
  } else {
    lookaheadRegex = new RegExp(`^[\\s\\u200b\\ufeff]*\\(?[\\s\\u200b\\ufeff]*${escAra}(?![\\s\\u200b\\ufeff])[\\s\\u200b\\ufeff]*\\)?`, "i");
  }
  const lookaheadMatch = trailingText.match(lookaheadRegex);
  let totalLength = earliestMatch.length;
  if (lookaheadMatch) {
    totalLength += lookaheadMatch[0].length;
  }
  const nodes = [];
  const beforeText = text.slice(0, earliestMatch.index);
  const afterText = text.slice(earliestMatch.index + totalLength);
  if (beforeText) {
    nodes.push(...enrichText(beforeText, terms, schema, originalMarks));
  }
  const term = earliestMatch.term;
  const description = term.description || "\u0645\u0635\u0637\u0644\u062D \u062A\u0642\u0646\u064A \u0645\u0639\u062A\u0645\u062F.";
  const termText = `${term.arabic} (${term.english})`;
  const termMark = schema.marks.term.create({
    arabic: term.arabic,
    english: term.english,
    description
  });
  const newMarks = [...originalMarks.filter((m) => m.type.name !== "term"), termMark];
  nodes.push(schema.text(termText, newMarks));
  if (afterText) {
    nodes.push(...enrichText(afterText, terms, schema, originalMarks));
  }
  return nodes;
}
var TermAutocomplete = import_core7.Extension.create({
  name: "termAutocomplete",
  addOptions() {
    return {
      terms: []
    };
  },
  addProseMirrorPlugins() {
    const terms = this.options.terms || [];
    const plugins = [
      (0, import_suggestion2.default)({
        pluginKey: new import_state5.PluginKey("termAutocomplete"),
        editor: this.editor,
        char: "",
        // No trigger character, we use findSuggestionMatch for custom matching
        findSuggestionMatch: ({ $position }) => {
          var _a;
          const text = $position.parent.textBetween(0, $position.parentOffset, null, "\0");
          const match = text.match(/(\S+)$/);
          if (!match) {
            return null;
          }
          const query = match[0];
          if (query.length < 2) {
            return null;
          }
          const matchStart = (_a = match.index) != null ? _a : 0;
          const matchEnd = matchStart + query.length;
          const currentTerms = getCustomTermsFromStorage(terms);
          const queryLower = query.toLowerCase();
          const hasMatch = currentTerms.some(
            (term) => term.arabic.toLowerCase().includes(queryLower) || term.english.toLowerCase().includes(queryLower)
          );
          if (!hasMatch) {
            return null;
          }
          return {
            range: {
              from: $position.start() + matchStart,
              to: $position.start() + matchEnd
            },
            query,
            text: query
          };
        },
        command: ({ editor, range, props }) => {
          const term = props;
          const { state } = editor;
          const $from = state.doc.resolve(range.from);
          const textBefore = $from.parent.textBetween(0, $from.parentOffset, null, "\0");
          const overlapLen = getOverlapLength(textBefore, term.arabic);
          const replaceFrom = overlapLen > 0 ? range.to - overlapLen : range.from;
          const replaceTo = range.to;
          incrementTermUsage(term.arabic, term.english);
          const description = term.description || "\u0645\u0635\u0637\u0644\u062D \u062A\u0642\u0646\u064A \u0645\u0639\u062A\u0645\u062F.";
          const insertHTML = `<span data-term="" data-arabic="${term.arabic}" data-english="${term.english}" data-description="${description}">${term.arabic} (${term.english})</span> `;
          editor.chain().focus().insertContentAt({ from: replaceFrom, to: replaceTo }, insertHTML).run();
        },
        items: ({ query }) => {
          const currentTerms = getCustomTermsFromStorage(terms);
          const queryLower = query.toLowerCase();
          return currentTerms.filter(
            (term) => term.arabic.toLowerCase().includes(queryLower) || term.english.toLowerCase().includes(queryLower)
          ).sort((a, b) => b.usageCount - a.usageCount).slice(0, 5);
        },
        render: () => {
          let component;
          let popup;
          return {
            onStart: (props) => {
              component = new import_react10.ReactRenderer(TermAutocompleteList_default, {
                props,
                editor: props.editor
              });
              if (!props.clientRect) return;
              popup = (0, import_tippy3.default)("body", {
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
                }
              });
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
      })
    ];
    if (terms.length > 0) {
      plugins.push(
        new import_state5.Plugin({
          key: new import_state5.PluginKey("termPasteEnricher"),
          props: {
            transformPasted: (slice) => {
              const schema = this.editor.schema;
              const enrichFragment = (fragment) => {
                const newNodes = [];
                fragment.forEach((node) => {
                  if (node.isText && node.text) {
                    const hasTermMark = node.marks.some((m) => m.type.name === "term");
                    if (hasTermMark) {
                      newNodes.push(node);
                    } else {
                      newNodes.push(...enrichText(node.text || "", terms, schema, node.marks));
                    }
                  } else {
                    newNodes.push(node.copy(enrichFragment(node.content)));
                  }
                });
                return import_model.Fragment.fromArray(newNodes);
              };
              const result = new import_model.Slice(enrichFragment(slice.content), slice.openStart, slice.openEnd);
              console.log("[Paste Diagnostics] Input plain text:", slice.content.textBetween(0, slice.content.size));
              console.log("[Paste Diagnostics] Output plain text:", result.content.textBetween(0, result.content.size));
              return result;
            }
          }
        })
      );
    }
    return plugins.map((p) => p);
  }
});
var TermAutocomplete_default = TermAutocomplete;

// components/rich-text-rtl/Menu/OutdatedTermsBanner.tsx
var import_react11 = require("react");
var import_react12 = require("@tiptap/react");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var OutdatedTermsBanner = ({ autocompleteTerms }) => {
  const { editor } = (0, import_react12.useCurrentEditor)();
  const [outdatedCount, setOutdatedCount] = (0, import_react11.useState)(0);
  const [ignored, setIgnored] = (0, import_react11.useState)(false);
  (0, import_react11.useEffect)(() => {
    if (!editor || !autocompleteTerms || autocompleteTerms.length === 0 || ignored) {
      return;
    }
    const handleCheck = () => {
      const count = checkOutdatedTerms(editor, autocompleteTerms);
      setOutdatedCount(count);
    };
    handleCheck();
    editor.on("update", handleCheck);
    return () => {
      editor.off("update", handleCheck);
    };
  }, [editor, autocompleteTerms, ignored]);
  if (outdatedCount === 0 || ignored) {
    return null;
  }
  const handleUpdate = () => {
    if (editor && autocompleteTerms) {
      const count = updateOutdatedTerms(editor, autocompleteTerms);
      console.log(`Updated ${count} outdated terms.`);
      setOutdatedCount(0);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      dir: "rtl",
      className: "fixed bottom-6 right-6 left-6 md:left-auto md:w-[420px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-xl shadow-gray-200/50 dark:shadow-none z-50 flex flex-col gap-3 text-right direction-rtl animate-in fade-in slide-in-from-bottom-5 duration-300",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.Sparkles, { className: "w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0 mt-0.5" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h4", { className: "font-semibold text-sm text-gray-900 dark:text-gray-100", children: "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0635\u0637\u0644\u062D\u0627\u062A \u0627\u0644\u0645\u0639\u0631\u0651\u0628\u0629" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", { className: "text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed", children: [
                "\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ",
                /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("strong", { children: [
                  outdatedCount,
                  " \u0645\u0635\u0637\u0644\u062D\u0627\u062A"
                ] }),
                " \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0627\u0644 \u062A\u0645\u062A\u0644\u0643 \u062A\u0639\u0631\u064A\u0628\u0627\u062A \u0623\u062D\u062F\u062B \u0641\u064A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "button",
            {
              onClick: () => setIgnored(true),
              className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1",
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.X, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-2 justify-end mt-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Button,
            {
              onClick: () => setIgnored(true),
              variant: "ghost",
              size: "sm",
              className: "text-[11px] text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800",
              children: "\u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u062A\u0646\u0628\u064A\u0647"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            Button,
            {
              onClick: handleUpdate,
              size: "sm",
              variant: "outline",
              className: "text-[11px] bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium gap-1.5 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_lucide_react3.RefreshCw, { className: "w-3 h-3 text-gray-500" }),
                "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0643\u0644 \u0627\u0644\u0622\u0646"
              ]
            }
          )
        ] })
      ]
    }
  );
};

// components/rich-text-rtl/Menu/AccessibleToolbars.tsx
var import_react15 = require("@tiptap/react");

// components/ui/tooltip.tsx
var React9 = __toESM(require("react"));
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React9.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = __objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    TooltipPrimitive.Content,
    __spreadValues({
      ref,
      sideOffset,
      className: cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// components/rich-text-rtl/Menu/menu-config.tsx
var import_lucide_react4 = require("lucide-react");

// components/ui/input.tsx
var React10 = __toESM(require("react"));
var import_jsx_runtime10 = require("react/jsx-runtime");
var Input = React10.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_jsx_runtime11 = require("react/jsx-runtime");
var ColorPickerIcon = ({
  value,
  editor,
  setIsSaved,
  type,
  label,
  defaultValue
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Bold, { className: "w-4 h-4" }),
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Italic, { className: "w-4 h-4" }),
    label: "\u0645\u0627\u0626\u0644",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleItalic().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("italic"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleItalic().run()
  },
  underline: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Underline, { className: "w-4 h-4" }),
    label: "\u062A\u0633\u0637\u064A\u0631",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleUnderline().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("underline"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleUnderline().run()
  },
  strike: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Strikethrough, { className: "w-4 h-4" }),
    label: "\u064A\u062A\u0648\u0633\u0637 \u0627\u0644\u062E\u0637",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleStrike().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("strike"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleStrike().run()
  },
  highlight: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Highlighter, { className: "w-4 h-4" }),
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Type, { className: "w-4 h-4" }),
    label: "\u0641\u0642\u0631\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setParagraph().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("paragraph")
  },
  alignLeft: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.AlignLeft, { className: "w-4 h-4" }),
    label: "\u0645\u062D\u0627\u0630\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("left").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "left" }),
    isDisabled: (editor) => !editor.can().setTextAlign("left")
  },
  alignCenter: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.AlignCenter, { className: "w-4 h-4" }),
    label: "\u0645\u062D\u0627\u0630\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u0648\u0633\u0637",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("center").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "center" }),
    isDisabled: (editor) => !editor.can().setTextAlign("center")
  },
  alignRight: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.AlignRight, { className: "w-4 h-4" }),
    label: "\u0645\u062D\u0627\u0630\u0627\u0629 \u0625\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("right").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "right" }),
    isDisabled: (editor) => !editor.can().setTextAlign("right")
  },
  alignJustify: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.AlignJustify, { className: "w-4 h-4" }),
    label: "\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0646\u0635",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("justify").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "justify" }),
    isDisabled: (editor) => !editor.can().setTextAlign("justify")
  },
  bulletList: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.List, { className: "w-4 h-4" }),
    label: "\u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064A\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleBulletList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("bulletList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBulletList().run()
  },
  orderedList: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.ListOrdered, { className: "w-4 h-4" }),
    label: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleOrderedList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("orderedList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleOrderedList().run()
  },
  taskList: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.CheckSquare, { className: "w-4 h-4" }),
    label: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0647\u0627\u0645",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleTaskList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("taskList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleTaskList().run()
  },
  codeBlock: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Code, { className: "w-4 h-4" }),
    label: "\u0643\u0648\u062F \u0628\u0631\u0645\u062C\u064A",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleCodeBlock().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("codeBlock"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleCodeBlock().run()
  },
  horizontalRule: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("hr", { className: "w-4 h-0.5 bg-gray-500" }),
    label: "\u062E\u0637 \u0623\u0641\u0642\u064A",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setHorizontalRule().run();
      setIsSaved(false);
    }
  },
  image: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Image, { className: "w-4 h-4" }),
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Table, { className: "w-4 h-4" }),
    label: "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644",
    action: (editor) => () => {
      editor.chain().focus().insertContent({ type: "tablePlaceholder" }).run();
    },
    isDisabled: () => false
  },
  link: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Link, { className: "w-4 h-4" }),
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ColorPickerIcon, { type: "text", label: "\u0627\u062E\u062A\u0631 \u0644\u0648\u0646 \u0627\u0644\u0646\u0635", defaultValue: "#000000" }),
    label: "\u0644\u0648\u0646 \u0627\u0644\u0646\u0635",
    action: (editor, setIsSaved) => () => {
    }
  },
  highlightColor: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ColorPickerIcon, { type: "highlight", label: "\u0627\u062E\u062A\u0631 \u0644\u0648\u0646 \u0627\u0644\u062A\u0645\u064A\u064A\u0632", defaultValue: "#00000000" }),
    label: "\u0644\u0648\u0646 \u0627\u0644\u062A\u0645\u064A\u064A\u0632",
    action: (editor, setIsSaved) => () => {
    }
  },
  undo: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Undo, { className: "w-4 h-4" }),
    label: "\u062A\u0631\u0627\u062C\u0639",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().undo().run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().chain().focus().undo().run()
  },
  redo: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Redo, { className: "w-4 h-4" }),
    label: "\u0625\u0639\u0627\u062F\u0629",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().redo().run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().chain().focus().redo().run()
  },
  clearFormat: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.Eraser, { className: "w-4 h-4" }),
    // Using Eraser icon for "clear format"
    label: "\u0645\u0633\u062D \u0627\u0644\u062A\u0646\u0633\u064A\u0642",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().unsetAllMarks().run();
      setIsSaved(false);
    }
  },
  clearNodes: {
    icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react4.X, { className: "w-4 h-4" }),
    // Using X icon for "clear nodes"
    label: "\u0645\u0633\u062D \u0627\u0644\u0639\u0646\u0627\u0635\u0631",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().clearNodes().run();
      setIsSaved(false);
    }
  }
};

// components/rich-text-rtl/Menu/EditorControls.tsx
var import_react13 = __toESM(require("react"));
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var EditorControls = ({
  editor,
  menuItems,
  isMobileMenuOpen,
  setIsSaved
}) => {
  const [isExpanded, setIsExpanded] = (0, import_react13.useState)(false);
  const getMenuItemConfig = (id) => menuItems.find((item) => item.id === id) || { id, enabled: false };
  const enabledItems = Object.entries(menuItemsConfig).filter(([id]) => getMenuItemConfig(id).enabled);
  const VISIBLE_COUNT = 6;
  const visibleItems = isExpanded ? enabledItems : enabledItems.slice(0, VISIBLE_COUNT);
  const hasMore = enabledItems.length > VISIBLE_COUNT;
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: cn(
        "p-1 flex items-center gap-1 md:gap-2 transition-all",
        isExpanded ? "flex-wrap max-w-xs md:max-w-sm" : "flex-nowrap",
        isMobileMenuOpen ? "flex" : "hidden md:flex"
      ),
      children: [
        visibleItems.map(([id, config]) => {
          var _a, _b, _c, _d;
          const itemConfig = getMenuItemConfig(id);
          if (!itemConfig.enabled) return null;
          const action = itemConfig.onClick || config.action(editor, setIsSaved);
          const icon = itemConfig.customIcon || config.icon;
          const label = itemConfig.customLabel || config.label;
          const isColorInput = ["textColor", "highlightColor"].includes(id);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Tooltip, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipTrigger, { asChild: true, children: isColorInput ? import_react13.default.cloneElement(
              icon,
              {
                value: id === "textColor" ? ((_a = editor.getAttributes("textStyle")) == null ? void 0 : _a.color) || "#000000" : ((_b = editor.getAttributes("highlight")) == null ? void 0 : _b.color) || "#00000000",
                editor,
                setIsSaved
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: action,
                disabled: ((_c = config.isDisabled) == null ? void 0 : _c.call(config, editor)) || false,
                className: cn(
                  "w-8 h-8 md:w-9 md:h-9 p-0 transition-colors",
                  ((_d = config.isActive) == null ? void 0 : _d.call(config, editor)) ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-500/30" : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                ),
                "aria-label": label,
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, { children: icon })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContent, { children: label })
          ] }, id);
        }),
        hasMore && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => setIsExpanded(!isExpanded),
              className: "w-8 h-8 md:w-9 md:h-9 p-0 bg-secondary/50 hover:bg-secondary text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white",
              "aria-label": "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F",
              children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react5.ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react5.ChevronDown, { className: "w-4 h-4" })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TooltipContent, { children: isExpanded ? "\u0637\u064A" : "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F" })
        ] })
      ]
    }
  );
};

// components/rich-text-rtl/Menu/AccessibleToolbars.tsx
var import_lucide_react7 = require("lucide-react");

// components/rich-text-rtl/Menu/TableBubbleMenu.tsx
var import_react14 = require("@tiptap/react");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var TableBubbleMenu = () => {
  const { editor } = (0, import_react14.useCurrentEditor)();
  if (!editor) {
    return null;
  }
  const tableControls = [
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0641 \u0644\u0644\u0623\u0639\u0644\u0649",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.ArrowUpToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addRowBefore().run()
    },
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0635\u0641 \u0644\u0644\u0623\u0633\u0641\u0644",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.ArrowDownToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addRowAfter().run()
    },
    {
      label: "\u062D\u0630\u0641 \u0635\u0641",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.Trash2, { className: "w-4 h-4 text-red-500" }),
      action: () => editor.chain().focus().deleteRow().run()
    },
    {
      divider: true
    },
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0648\u062F \u0644\u0644\u064A\u0645\u064A\u0646",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.ArrowRightToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addColumnBefore().run()
      // In RTL, before is right
    },
    {
      label: "\u0625\u0636\u0627\u0641\u0629 \u0639\u0645\u0648\u062F \u0644\u0644\u064A\u0633\u0627\u0631",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.ArrowLeftToLine, { className: "w-4 h-4" }),
      action: () => editor.chain().focus().addColumnAfter().run()
      // In RTL, after is left
    },
    {
      label: "\u062D\u0630\u0641 \u0639\u0645\u0648\u062F",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.Trash2, { className: "w-4 h-4 text-red-500" }),
      action: () => editor.chain().focus().deleteColumn().run()
    },
    {
      divider: true
    },
    {
      label: "\u062D\u0630\u0641 \u0627\u0644\u062C\u062F\u0648\u0644",
      icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react6.Trash, { className: "w-4 h-4 text-red-600" }),
      action: () => editor.chain().focus().deleteTable().run()
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react14.BubbleMenu,
    {
      editor,
      tippyOptions: {
        duration: 100,
        placement: "bottom",
        appendTo: () => document.body,
        maxWidth: "calc(100vw - 16px)",
        popperOptions: {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                boundary: "viewport",
                padding: 8,
                tether: false,
                altAxis: true
              }
            },
            {
              name: "flip",
              options: { boundary: "viewport", padding: 8 }
            }
          ]
        }
      },
      shouldShow: ({ editor: editor2 }) => editor2.isActive("table"),
      className: "flex bg-background border shadow-md rounded-md p-1 items-center z-50 gap-1",
      children: tableControls.map((control, index) => {
        if (control.divider) {
          return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-px h-5 bg-gray-200 mx-1" }, `div-${index}`);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              className: "h-8 w-8 p-0",
              onClick: control.action,
              children: control.icon
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { children: control.label }) })
        ] }, index);
      })
    }
  );
};

// components/rich-text-rtl/Menu/AccessibleToolbars.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var AccessibleToolbars = ({ menuItems }) => {
  const { editor } = (0, import_react15.useCurrentEditor)();
  if (!editor) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(TooltipProvider, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TableBubbleMenu, {}),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_react15.BubbleMenu,
      {
        editor,
        tippyOptions: {
          duration: 100,
          appendTo: () => document.body,
          maxWidth: "calc(100vw - 16px)",
          popperOptions: {
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  boundary: "viewport",
                  padding: 8,
                  tether: false,
                  // Allows tooltip to stay in viewport even if reference is huge
                  altAxis: true
                  // Prevents overflow on the alternate axis
                }
              },
              {
                name: "flip",
                options: { boundary: "viewport", padding: 8 }
              }
            ]
          }
        },
        shouldShow: ({ editor: editor2, view, state, from, to }) => {
          if (typeof window !== "undefined" && window.innerWidth < 768) return false;
          if (editor2.isActive("table")) return false;
          const { doc, selection } = state;
          const { empty } = selection;
          const isEmptyTextBlock = !doc.textBetween(from, to).length;
          return !empty && !isEmptyTextBlock;
        },
        className: "flex bg-background border shadow-md rounded-md p-1 items-center z-50",
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          EditorControls,
          {
            editor,
            menuItems,
            isMobileMenuOpen: true,
            setIsSaved: () => {
            }
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      import_react15.FloatingMenu,
      {
        editor,
        tippyOptions: {
          duration: 100,
          placement: "left-start",
          appendTo: () => document.body
        },
        className: "flex gap-1 z-50",
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "ghost", size: "icon", onClick: () => editor.commands.insertContent("/"), className: "rounded-full w-6 h-6 bg-background border shadow-sm text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react7.Plus, { className: "w-3 h-3" }) })
      }
    )
  ] });
};

// components/rich-text-rtl/Menu/MobileTopToolbar.tsx
var import_react16 = __toESM(require("react"));
var import_react17 = require("@tiptap/react");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var MobileTopToolbar = ({ menuItems }) => {
  const { editor } = (0, import_react17.useCurrentEditor)();
  const [hasSelection, setHasSelection] = import_react16.default.useState(false);
  const [position, setPosition] = import_react16.default.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = import_react16.default.useState(false);
  const [topOffset, setTopOffset] = import_react16.default.useState(8);
  const dragStartRef = import_react16.default.useRef({ x: 0, y: 0 });
  import_react16.default.useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;
    const viewport = window.visualViewport;
    const updatePosition = () => {
      setTopOffset(viewport.offsetTop + 8);
    };
    viewport.addEventListener("resize", updatePosition);
    viewport.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => {
      viewport.removeEventListener("resize", updatePosition);
      viewport.removeEventListener("scroll", updatePosition);
    };
  }, []);
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    e.target.setPointerCapture(e.pointerId);
  };
  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };
  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.target.releasePointerCapture(e.pointerId);
  };
  import_react16.default.useEffect(() => {
    if (!editor) return;
    const checkSelection = () => {
      const { empty } = editor.state.selection;
      const isTable = editor.isActive("table");
      const newHasSelection = !empty && !isTable;
      setHasSelection((prev) => {
        if (!prev && newHasSelection) {
          setPosition({ x: 0, y: 0 });
        }
        return newHasSelection;
      });
    };
    checkSelection();
    editor.on("selectionUpdate", checkSelection);
    editor.on("transaction", checkSelection);
    return () => {
      editor.off("selectionUpdate", checkSelection);
      editor.off("transaction", checkSelection);
    };
  }, [editor]);
  if (!editor || !hasSelection) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      style: {
        top: `${topOffset}px`,
        transform: `translate(calc(-50% + ${position.x}px), ${position.y}px)`
      },
      className: "fixed left-1/2 z-50 w-max max-w-[95vw] bg-gray-100/95 dark:bg-gray-950/95 backdrop-blur-xl border border-gray-300 dark:border-gray-700 shadow-xl shadow-black/20 rounded-3xl p-1 flex md:hidden items-center justify-center overflow-x-auto animate-in fade-in duration-300 ease-out scale-90 sm:scale-100 origin-top touch-none",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "div",
          {
            className: "px-1 py-2 cursor-grab active:cursor-grabbing text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex-shrink-0",
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: handlePointerUp,
            onPointerCancel: handlePointerUp,
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react8.GripVertical, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          EditorControls,
          {
            editor,
            menuItems,
            isMobileMenuOpen: true,
            setIsSaved: () => {
            }
          }
        ) })
      ]
    }
  );
};

// components/rich-text-rtl/ArabicRichTextEditor.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var defaultContent = `
<h1 style="text-align: center;">\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0641\u064A \u0645\u062D\u0631\u0631 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0627\u062D\u062A\u0631\u0627\u0641\u064A \u{1F680}</h1>
<p style="text-align: center;">\u0647\u0630\u0627 \u0627\u0644\u0645\u062D\u0631\u0631 \u0635\u064F\u0645\u0645 \u062E\u0635\u064A\u0635\u0627\u064B \u0644\u064A\u0648\u0641\u0631 \u0644\u0643 \u062A\u062C\u0631\u0628\u0629 \u0643\u062A\u0627\u0628\u0629 \u063A\u0646\u064A\u0629 \u0648\u062F\u0627\u0639\u0645\u0629 \u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 (RTL) \u0628\u0634\u0643\u0644 \u0645\u062B\u0627\u0644\u064A\u060C \u0645\u0639 \u0627\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u0627\u0641\u0642 \u0627\u0644\u062A\u0627\u0645 \u0645\u0639 \u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629.</p>
<hr>

<h2>1. \u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u270D\uFE0F</h2>
<p>\u064A\u0645\u0643\u0646\u0643 \u062A\u0645\u064A\u064A\u0632 \u0646\u0635\u0648\u0635\u0643 \u0628\u0623\u0634\u0643\u0627\u0644 \u0645\u062A\u0639\u062F\u062F\u0629: \u064A\u0645\u0643\u0646\u0643 \u0643\u062A\u0627\u0628\u0629 <strong>\u0646\u0635 \u0639\u0631\u064A\u0636 (Bold)</strong>\u060C \u0623\u0648 <em>\u0646\u0635 \u0645\u0627\u0626\u0644 (Italic)</em>\u060C \u0623\u0648 <del>\u0646\u0635 \u0645\u0634\u0637\u0648\u0628 (Strike)</del>\u060C \u0623\u0648 \u062D\u062A\u0649 <u>\u0646\u0635 \u062A\u062D\u062A\u0647 \u062E\u0637 (Underline)</u>. \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 <mark data-color="#ffeb3b" style="background-color: #ffeb3b; color: inherit">\u062A\u0645\u064A\u064A\u0632 \u0627\u0644\u0646\u0635\u0648\u0635 (Highlight)</mark> \u0648\u062A\u063A\u064A\u064A\u0631 <span style="color: #e11d48">\u0644\u0648\u0646 \u0627\u0644\u062E\u0637</span> \u0628\u0623\u064A \u0644\u0648\u0646 \u062A\u062E\u062A\u0627\u0631\u0647!</p>

<h2>2. \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0630\u0643\u064A\u0629 \u0648\u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0637\u064A \u{1F4C2}</h2>
<p>\u0643\u0644 \u0639\u0646\u0648\u0627\u0646 \u062A\u0643\u062A\u0628\u0647 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u064A\u0632\u0629 "\u0627\u0644\u0637\u064A" (Collapsible). \u062C\u0631\u0628 \u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0627\u0644\u0633\u0647\u0645 \u0627\u0644\u0635\u063A\u064A\u0631 \u0628\u062C\u0627\u0646\u0628 \u0623\u064A \u0639\u0646\u0648\u0627\u0646 \u0631\u0626\u064A\u0633\u064A \u0623\u0648 \u0641\u0631\u0639\u064A \u0644\u0625\u062E\u0641\u0627\u0621 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0630\u064A \u064A\u0644\u064A\u0647 \u0648\u062A\u0631\u062A\u064A\u0628 \u0645\u0633\u062A\u0646\u062F\u0643 \u0627\u0644\u0637\u0648\u064A\u0644 \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629.</p>
<h3>\u0647\u0630\u0627 \u0639\u0646\u0648\u0627\u0646 \u0641\u0631\u0639\u064A (\u062C\u0631\u0628 \u0637\u064A\u0651\u0647)</h3>
<p>\u0647\u0630\u0627 \u0627\u0644\u0646\u0635 \u0633\u064A\u062E\u062A\u0641\u064A \u0639\u0646\u062F\u0645\u0627 \u062A\u0642\u0648\u0645 \u0628\u0637\u064A \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0631\u0639\u064A \u0623\u0639\u0644\u0627\u0647!</p>

<h2>3. \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0629 \u{1F4DD}</h2>
<p>\u0646\u062F\u0639\u0645 \u062C\u0645\u064A\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0644\u062A\u0646\u0638\u064A\u0645 \u0623\u0641\u0643\u0627\u0631\u0643:</p>
<ul>
  <li>\u0639\u0646\u0635\u0631 \u0641\u064A \u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0637\u064A\u0629 (Bullet List)</li>
  <li>\u0639\u0646\u0635\u0631 \u0622\u062E\u0631 \u0645\u0639 <a href="https://example.com" target="_blank">\u0631\u0627\u0628\u0637 \u062A\u0634\u0639\u0628\u064A</a></li>
</ul>
<ol>
  <li>\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 \u0641\u064A \u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629 (Ordered List)</li>
  <li>\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u062B\u0627\u0646\u064A\u0629</li>
</ol>
<h3>\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0647\u0627\u0645 (Task List)</h3>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true">\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u062D\u0631\u0631</li>
  <li data-type="taskItem" data-checked="true">\u062F\u0639\u0645 \u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0646\u0635\u0648\u0635 RTL / LTR</li>
  <li data-type="taskItem" data-checked="false">\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644\u064A\u0629</li>
</ul>

<h2>4. \u0625\u062F\u0631\u0627\u062C \u0627\u0644\u0623\u0643\u0648\u0627\u062F \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0629 \u{1F4BB}</h2>
<p>\u0645\u062B\u0627\u0644 \u0639\u0644\u0649 \u0643\u0648\u062F \u0645\u0636\u0645\u0646: <code>npm run dev</code>. \u0643\u0645\u0627 \u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0643\u062A\u0644 \u0628\u0631\u0645\u062C\u064A\u0629 \u0643\u0627\u0645\u0644\u0629:</p>
<pre><code class="language-javascript">
function sayHello(name) {
  console.log("\u0645\u0631\u062D\u0628\u0627\u064B " + name + " \u0641\u064A \u0645\u062D\u0631\u0631\u0646\u0627!");
}
sayHello("\u064A\u0627 \u0635\u062F\u064A\u0642\u064A");
</code></pre>

<h2>5. \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u0631\u0646\u0629 \u{1F4CA}</h2>
<p>\u064A\u0645\u0643\u0646\u0643 \u0625\u0646\u0634\u0627\u0621 \u062C\u062F\u0627\u0648\u0644 \u0648\u062A\u062E\u0635\u064A\u0635\u0647\u0627 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 (\u0625\u0636\u0627\u0641\u0629 \u0648\u062D\u0630\u0641 \u0635\u0641\u0648\u0641 \u0648\u0623\u0639\u0645\u062F\u0629 \u0639\u0628\u0631 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0639\u0627\u0626\u0645\u0629 \u0644\u0644\u062C\u062F\u0648\u0644):</p>
<table>
  <thead>
    <tr>
      <th>\u0627\u0644\u0645\u064A\u0632\u0629</th>
      <th>\u0627\u0644\u0648\u0635\u0641</th>
      <th>\u0627\u0644\u062F\u0639\u0645</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>\u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646 \u0627\u0644\u0630\u0643\u064A\u0629</td>
      <td>\u0637\u064A \u0648\u0641\u062A\u062D \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0623\u0633\u0641\u0644 \u0627\u0644\u0639\u0646\u0627\u0648\u064A\u0646</td>
      <td>\u2705 \u0645\u062F\u0639\u0648\u0645</td>
    </tr>
    <tr>
      <td>\u0627\u0644\u062C\u062F\u0627\u0648\u0644</td>
      <td>\u062C\u062F\u0627\u0648\u0644 \u0645\u0631\u0646\u0629 \u0648\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0639\u062F\u064A\u0644</td>
      <td>\u2705 \u0645\u062F\u0639\u0648\u0645</td>
    </tr>
  </tbody>
</table>

<h2>6. \u0627\u0644\u0627\u0642\u062A\u0628\u0627\u0633\u0627\u062A \u275D</h2>
<p>\u0623\u0628\u0631\u0632 \u0627\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0647\u0627\u0645\u0629 \u0648\u0627\u0644\u0645\u0642\u0648\u0644\u0627\u062A \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0627\u0642\u062A\u0628\u0627\u0633\u0627\u062A:</p>
<blockquote>
  "\u0627\u0644\u0646\u062C\u0627\u062D \u0644\u064A\u0633 \u0627\u0644\u0646\u0647\u0627\u064A\u0629\u060C \u0648\u0627\u0644\u0641\u0634\u0644 \u0644\u064A\u0633 \u0642\u0627\u062A\u0644\u0627\u064B: \u0625\u0646\u0645\u0627 \u0627\u0644\u0634\u062C\u0627\u0639\u0629 \u0644\u0645\u0648\u0627\u0635\u0644\u0629 \u0627\u0644\u0637\u0631\u064A\u0642 \u0647\u064A \u0645\u0627 \u064A\u0647\u0645."<br>\u2014 \u0648\u0646\u0633\u062A\u0648\u0646 \u062A\u0634\u0631\u0634\u0644
</blockquote>

<h2>7. \u0627\u0644\u0635\u0648\u0631 \u0648\u0627\u0644\u0648\u0633\u0627\u0626\u0637 \u{1F5BC}\uFE0F</h2>
<p>\u0623\u062F\u0631\u062C \u0627\u0644\u0635\u0648\u0631 \u0645\u0646 \u062C\u0647\u0627\u0632\u0643 \u0623\u0648 \u0639\u0628\u0631 \u0627\u0644\u0631\u0648\u0627\u0628\u0637 \u0627\u0644\u0645\u0628\u0627\u0634\u0631\u0629 \u0644\u062A\u0639\u0632\u064A\u0632 \u0645\u062D\u062A\u0648\u0627\u0643 \u0627\u0644\u0628\u0635\u0631\u064A:</p>
<img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop" alt="\u0635\u0648\u0631\u0629 \u062A\u0648\u0636\u064A\u062D\u064A\u0629 \u0644\u0628\u064A\u0626\u0629 \u0639\u0645\u0644" loading="lazy">

<h2>8. \u0642\u0627\u0645\u0648\u0633 \u0627\u0644\u0645\u0635\u0637\u0644\u062D\u0627\u062A \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u{1F4DA}</h2>
<p>\u064A\u062A\u0645\u064A\u0632 \u0627\u0644\u0645\u062D\u0631\u0631 \u0628\u0642\u062F\u0631\u062A\u0647 \u0639\u0644\u0649 \u0627\u0644\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0645\u0635\u0637\u0644\u062D\u0627\u062A \u0648\u0631\u0628\u0637\u0647\u0627 \u0628\u0642\u0627\u0645\u0648\u0633\u0643\u060C \u0645\u062B\u0644 \u0645\u0635\u0637\u0644\u062D <span data-term="" data-arabic="\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629" data-english="Algorithm" data-description="\u0645\u062C\u0645\u0648\u0639\u0629 \u0645\u0646 \u0627\u0644\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0631\u064A\u0627\u0636\u064A\u0629 \u0648\u0627\u0644\u0645\u0646\u0637\u0642\u064A\u0629 \u0627\u0644\u0645\u062A\u0633\u0644\u0633\u0644\u0629 \u0644\u062D\u0644 \u0645\u0634\u0643\u0644\u0629 \u0645\u0627.">\u062E\u0648\u0627\u0631\u0632\u0645\u064A\u0629 (Algorithm)</span> \u0627\u0644\u0630\u064A \u0633\u064A\u0638\u0647\u0631 \u0628\u0644\u0648\u0646 \u0645\u062E\u062A\u0644\u0641 \u0648\u064A\u0645\u0643\u0646\u0643 \u062A\u0645\u0631\u064A\u0631 \u0627\u0644\u0645\u0627\u0648\u0633 \u0641\u0648\u0642\u0647 \u0644\u0631\u0624\u064A\u0629 \u062A\u0641\u0627\u0635\u064A\u0644\u0647.</p>

<h2>9. \u0627\u0644\u0645\u062D\u0627\u0630\u0627\u0629 \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u062A\u0644\u0642\u0627\u0626\u064A \u{1F30D}</h2>
<p style="text-align: right; direction: rtl;">\u0646\u0635 \u0628\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u064A\u0645\u064A\u0646 \u0648\u0627\u062A\u062C\u0627\u0647 \u0639\u0631\u0628\u064A \u0623\u0635\u064A\u0644.</p>
<p style="text-align: center;">\u0646\u0635 \u0645\u062A\u0645\u0631\u0643\u0632 \u0641\u064A \u0627\u0644\u0645\u0646\u062A\u0635\u0641.</p>
<p style="text-align: left; direction: ltr;">This is an English paragraph automatically aligned and directed Left-to-Right. The editor handles everything flawlessly!</p>
<hr>
<p>\u062C\u0631\u0628 \u0643\u062A\u0627\u0628\u0629 \u0646\u0635 \u062C\u062F\u064A\u062F\u060C \u0623\u0648 \u0627\u0633\u062A\u062E\u062F\u0645 \u0639\u0644\u0627\u0645\u0629 <code>/</code> \u0644\u0641\u062A\u062D \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0633\u0631\u064A\u0639\u0629!</p>
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
  injectStyles = true,
  autocompleteTerms
}) => {
  const finalExtensions = [
    ...extensions.filter((ext) => ext.name !== "termAutocomplete"),
    ...autocompleteTerms && autocompleteTerms.length > 0 ? [TermAutocomplete_default.configure({ terms: autocompleteTerms })] : []
  ];
  (0, import_react18.useEffect)(() => {
    if (injectStyles) {
      injectEditorStyles();
    }
  }, [injectStyles]);
  const handleUpdate = ({ editor }) => {
    if (onChange) {
      onChange(editor.getHTML());
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    import_react19.EditorProvider,
    {
      slotBefore: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(MobileTopToolbar, { menuItems }),
      extensions: finalExtensions,
      content,
      editorProps,
      onUpdate: handleUpdate,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AccessibleToolbars, { menuItems }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(OutdatedTermsBanner, { autocompleteTerms })
      ]
    }
  ) });
};
var ArabicRichTextEditor_default = ArabicRichTextEditor;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArabicRichTextEditor,
  TermAutocomplete,
  TermMark,
  checkOutdatedTerms,
  editorExtensions,
  getCustomTermsFromStorage,
  incrementTermUsage,
  injectEditorStyles,
  updateOutdatedTerms
});
//# sourceMappingURL=index.js.map