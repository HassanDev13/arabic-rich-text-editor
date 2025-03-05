"use client";

import EditorMenuBar from "./Menu/EditorMenuBar";
import { injectEditorStyles } from "./editorStyles";
import { editorExtensions } from "./editorConfig";
import { ArabicRichTextEditorProps, MenuItemConfig } from "./types";
import { useEffect } from "react";
import { EditorProvider } from "@tiptap/react";

const defaultContent = `
<h1 style="text-align: center;">اختبار محرر النصوص الغنية</h1>
<p>مرحبًا! هذا نص اختباري لتجربة <strong>التنسيق العريض</strong> و<em>المائل</em> و<ins>التسطير</ins> و<s>الخط المشطوب</s>. يمكننا أيضًا تجربة <mark>التمييز</mark> بلون مختلف.</p>

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

// Default editor props if none are provided
const defaultEditorProps: any = {
  attributes: {
    class: "tiptap prose prose-sm max-w-none focus:outline-none min-h-[400px]",
  },
};

const ArabicRichTextEditor: React.FC<ArabicRichTextEditorProps> = ({
  menuItems = defaultMenuItems,
  onSave,
  content = defaultContent,
  extensions = editorExtensions,
  editorProps = defaultEditorProps,
  defaultFont = "Noto Naskh Arabic",
  defaultFontSize = "16px",
  defaultLineHeight = "1",
  className = "flex flex-col min-h-screen bg-background",
  injectStyles = true,
  slotBefore,
  menuBarClassName = "",
}) => {
  useEffect(() => {
    if (injectStyles) {
      injectEditorStyles();
    }
  }, [injectStyles]);

  const renderSlotBefore = slotBefore || (
    <EditorMenuBar
      menuItems={menuItems}
      onSave={onSave}
      defaultFont={defaultFont}
      defaultFontSize={defaultFontSize}
      defaultLineHeight={defaultLineHeight}
      className={menuBarClassName}
      showFontControls={true}
      showSwitchDirection={true}
      saveAuto={true}
    />
  );

  return (
    <div className={className}>
      <EditorProvider
        slotBefore={renderSlotBefore}
        extensions={extensions}
        content={content}
        editorProps={editorProps}
      />
    </div>
  );
};

export default ArabicRichTextEditor;
