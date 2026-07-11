export const googleFontsLink: string = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo&family=Noto+Naskh+Arabic&family=Scheherazade+New&family=Tajawal&family=Almarai&family=Dubai&family=Lalezar&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
`;

export const editorStyles: string = `
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
    content: "▼";
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
    content: "◀";
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

export const injectEditorStyles = (): void => {
  if (document.getElementById("editor-styles")) return;

  const head = document.head;

  // Inject Google Fonts
  const fontDiv = document.createElement("div");
  fontDiv.innerHTML = googleFontsLink;
  while (fontDiv.firstChild) head.appendChild(fontDiv.firstChild);

  // Inject Editor Styles
  const styleElement = document.createElement("style");
  styleElement.id = "editor-styles";
  styleElement.textContent = editorStyles;
  head.appendChild(styleElement);
};