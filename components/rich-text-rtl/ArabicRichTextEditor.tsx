"use client";

import { injectEditorStyles } from "./editorStyles";
import { editorExtensions } from "./editorConfig";
import { ArabicRichTextEditorProps, MenuItemConfig } from "./types";
import { useEffect } from "react";
import { EditorProvider } from "@tiptap/react";
import TermAutocomplete from "./TermAutocomplete";
import { OutdatedTermsBanner } from "./Menu/OutdatedTermsBanner";



const defaultContent = `
<h1 style="text-align: center;">اختبار محرر النصوص الغنية</h1>
<p>مرحبًا! هذا نص اختباري لتجربة <span data-term="" data-arabic="معطيات" data-english="data" data-description="مستودع قديم للبيانات الرقمية.">معطيات (data)</span> وتحديث المصطلحات القديمة تلقائياً.</p>

<h2>قوائم</h2>
<ul>
  <li>عنصر أول في قائمة نقطية</li>
  <li>عنصر ثانٍ مع <a href="https://example.com" target="_blank" rel="noopener noreferrer">رابط</a> يمكن النقر عليه</li>
</ul>
<ol>
  <li>عنصر مرقم أول</li>
  <li>عنصر مرقم ثانٍ</li>
</ol>

<h3>قائمة مهام</h3>
  <ul data-type="taskList">
        <li data-type="taskItem" data-checked="true"> مهمة 1</li>
        <li data-type="taskItem" data-checked="true"> مهمة 2</li>
        <li data-type="taskItem" data-checked="true"> مهمة 3</li>
  </ul>

<h2>كود برمجي</h2>
<p>مثال على كود مضمن: <code>console.log("مرحبًا");</code></p>
<pre><code class="language-javascript">
function greet(name) {
  return "مرحبًا " + name;
}
console.log(greet("العالم"));
</code></pre>

<h2>جدول</h2>
<table>
  <thead>
    <tr>
      <th>العنوان 1</th>
      <th>العنوان 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>خلية 1</td>
      <td>خلية 2</td>
    </tr>
    <tr>
      <td>خلية 3</td>
      <td>خلية 4</td>
    </tr>
  </tbody>
</table>

<h2>اقتباس</h2>
<blockquote>
  "العلم في الصغر كالنقش في الحجر"<br>— مثل عربي
</blockquote>

<h2>صورة</h2>
<p>إليك صورة اختبارية:</p>
<img src="https://via.placeholder.com/150" alt="صورة اختبارية" loading="lazy">

<p style="text-align: justify; direction: rtl;">نص موزع لاختبار المحاذاة: Lorem ipsum dolor sit amet, consectetur adipiscing elit. هذا نص مختلط للتأكد من دعم اللغتين.</p>

<hr>

<p>نهاية الاختبار. جرب التراجع (<strong>Undo</strong>) وإعادة (<strong>Redo</strong>) أيضًا!</p>
`;

// Default menu items if none are provided
const defaultMenuItems: MenuItemConfig[] = [
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
  { id: "clearNodes", enabled: true },
];

import { AccessibleToolbars } from "./Menu/AccessibleToolbars";

const defaultEditorProps: any = {
  attributes: {
    class: "tiptap prose focus:outline-none min-h-[400px]",
  },
};

const ArabicRichTextEditor: React.FC<ArabicRichTextEditorProps> = ({
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
  autocompleteTerms,
}) => {
  // Compute final extensions list based on whether autocompleteTerms prop is provided
  const finalExtensions = [
    ...extensions.filter((ext) => ext.name !== "termAutocomplete"),
    ...(autocompleteTerms && autocompleteTerms.length > 0
      ? [TermAutocomplete.configure({ terms: autocompleteTerms })]
      : []),
  ];

  useEffect(() => {
    if (injectStyles) {
      injectEditorStyles();
    }
  }, [injectStyles]);

  const handleUpdate = ({ editor }: { editor: any }) => {
    if (onChange) {
      onChange(editor.getHTML());
    }
  };

  return (
    <div className={className}>
      <EditorProvider
        slotBefore={null}
        extensions={finalExtensions}
        content={content}
        editorProps={editorProps}
        onUpdate={handleUpdate}
      >
        <AccessibleToolbars menuItems={menuItems} />
        <OutdatedTermsBanner autocompleteTerms={autocompleteTerms} />
      </EditorProvider>
    </div>
  );
};

export default ArabicRichTextEditor;
