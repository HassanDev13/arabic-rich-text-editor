const googleFontsLink: string = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amiri&family=Cairo&family=Noto+Naskh+Arabic&family=Scheherazade+New&family=Tajawal&family=Almarai&family=Dubai&family=Lalezar&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
`;

const editorStyles: string = `
  /* Base Tiptap Editor Styles */
  .tiptap {
    padding: 1.5rem;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
   
    line-height: 1.6;
    color: #333;
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
  align-items: center;
  padding: 0.75rem 0;
  gap: 0.5rem; /* Slightly smaller gap for compactness */
}

.tiptap ul[data-type="taskList"] li > label {
  flex: 0 0 auto;
  user-select: none;
}

.tiptap ul[data-type="taskList"] li > div {
  flex: 1 1 auto;
  text-align: left; /* Default left alignment */
}

.tiptap ul[data-type="taskList"] input[type="checkbox"] {
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  accent-color: #8b5cf6; /* Keep the colorful checkbox */
  transition: transform 0.2s ease; /* Add a subtle animation */
}

.tiptap ul[data-type="taskList"] input[type="checkbox"]:hover {
  transform: scale(1.1); /* Slight grow effect on hover */
}

/* Optional: Strike through completed tasks */
.tiptap ul[data-type="taskList"] input[type="checkbox"]:checked + div {
  text-decoration: line-through;
  color: #6b7280; /* Muted gray for completed items */
}

  /* RTL Overrides for Task List */
  [dir="rtl"] .tiptap ul[data-type="taskList"] {
    direction: rtl !important;
    margin: 1.5rem 0.5rem 1.5rem 1rem;
  }

  [dir="rtl"] .tiptap ul[data-type="taskList"] li {
    direction: rtl !important;
    flex-direction: row;
    justify-content: flex-start;
  }

  [dir="rtl"] .tiptap ul[data-type="taskList"] li > label {
    margin-right: 0.75rem;
    margin-left: 0 !important;
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