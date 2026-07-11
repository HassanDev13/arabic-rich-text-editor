"use client";

import { injectEditorStyles } from "./editorStyles";
import { editorExtensions } from "./editorConfig";
import { ArabicRichTextEditorProps, MenuItemConfig } from "./types";
import { useEffect } from "react";
import { EditorProvider } from "@tiptap/react";
import TermAutocomplete from "./TermAutocomplete";
import { OutdatedTermsBanner } from "./Menu/OutdatedTermsBanner";



const defaultContent = `
<h1 style="text-align: center;">مرحباً بك في محرر النصوص الاحترافي 🚀</h1>
<p style="text-align: center;">هذا المحرر صُمم خصيصاً ليوفر لك تجربة كتابة غنية وداعمة للغة العربية (RTL) بشكل مثالي، مع الحفاظ على التوافق التام مع اللغة الإنجليزية.</p>
<hr>

<h2>1. تنسيق النصوص الأساسية ✍️</h2>
<p>يمكنك تمييز نصوصك بأشكال متعددة: يمكنك كتابة <strong>نص عريض (Bold)</strong>، أو <em>نص مائل (Italic)</em>، أو <del>نص مشطوب (Strike)</del>، أو حتى <u>نص تحته خط (Underline)</u>. بالإضافة إلى إمكانية <mark data-color="#ffeb3b" style="background-color: #ffeb3b; color: inherit">تمييز النصوص (Highlight)</mark> وتغيير <span style="color: #e11d48">لون الخط</span> بأي لون تختاره!</p>

<h2>2. العناوين الذكية والقابلة للطي 📂</h2>
<p>كل عنوان تكتبه يحتوي على ميزة "الطي" (Collapsible). جرب النقر على السهم الصغير بجانب أي عنوان رئيسي أو فرعي لإخفاء المحتوى الذي يليه وترتيب مستندك الطويل بكل سهولة.</p>
<h3>هذا عنوان فرعي (جرب طيّه)</h3>
<p>هذا النص سيختفي عندما تقوم بطي العنوان الفرعي أعلاه!</p>

<h2>3. القوائم المتعددة 📝</h2>
<p>ندعم جميع أنواع القوائم لتنظيم أفكارك:</p>
<ul>
  <li>عنصر في قائمة نقطية (Bullet List)</li>
  <li>عنصر آخر مع <a href="https://example.com" target="_blank">رابط تشعبي</a></li>
</ul>
<ol>
  <li>الخطوة الأولى في قائمة مرقمة (Ordered List)</li>
  <li>الخطوة الثانية</li>
</ol>
<h3>قائمة المهام (Task List)</h3>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true">تصميم واجهة المحرر</li>
  <li data-type="taskItem" data-checked="true">دعم اتجاه النصوص RTL / LTR</li>
  <li data-type="taskItem" data-checked="false">إضافة المزيد من الميزات المستقبلية</li>
</ul>

<h2>4. إدراج الأكواد البرمجية 💻</h2>
<p>مثال على كود مضمن: <code>npm run dev</code>. كما يمكنك إضافة كتل برمجية كاملة:</p>
<pre><code class="language-javascript">
function sayHello(name) {
  console.log("مرحباً " + name + " في محررنا!");
}
sayHello("يا صديقي");
</code></pre>

<h2>5. الجداول المرنة 📊</h2>
<p>يمكنك إنشاء جداول وتخصيصها بالكامل (إضافة وحذف صفوف وأعمدة عبر القائمة العائمة للجدول):</p>
<table>
  <thead>
    <tr>
      <th>الميزة</th>
      <th>الوصف</th>
      <th>الدعم</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>العناوين الذكية</td>
      <td>طي وفتح المحتوى أسفل العناوين</td>
      <td>✅ مدعوم</td>
    </tr>
    <tr>
      <td>الجداول</td>
      <td>جداول مرنة وقابلة للتعديل</td>
      <td>✅ مدعوم</td>
    </tr>
  </tbody>
</table>

<h2>6. الاقتباسات ❝</h2>
<p>أبرز النصوص الهامة والمقولات باستخدام الاقتباسات:</p>
<blockquote>
  "النجاح ليس النهاية، والفشل ليس قاتلاً: إنما الشجاعة لمواصلة الطريق هي ما يهم."<br>— ونستون تشرشل
</blockquote>

<h2>7. الصور والوسائط 🖼️</h2>
<p>أدرج الصور من جهازك أو عبر الروابط المباشرة لتعزيز محتواك البصري:</p>
<img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop" alt="صورة توضيحية لبيئة عمل" loading="lazy">

<h2>8. قاموس المصطلحات التلقائي 📚</h2>
<p>يتميز المحرر بقدرته على التعرف على المصطلحات وربطها بقاموسك، مثل مصطلح <span data-term="" data-arabic="خوارزمية" data-english="Algorithm" data-description="مجموعة من الخطوات الرياضية والمنطقية المتسلسلة لحل مشكلة ما.">خوارزمية (Algorithm)</span> الذي سيظهر بلون مختلف ويمكنك تمرير الماوس فوقه لرؤية تفاصيله.</p>

<h2>9. المحاذاة والاتجاه التلقائي 🌍</h2>
<p style="text-align: right; direction: rtl;">نص بمحاذاة لليمين واتجاه عربي أصيل.</p>
<p style="text-align: center;">نص متمركز في المنتصف.</p>
<p style="text-align: left; direction: ltr;">This is an English paragraph automatically aligned and directed Left-to-Right. The editor handles everything flawlessly!</p>
<hr>
<p>جرب كتابة نص جديد، أو استخدم علامة <code>/</code> لفتح قائمة الأوامر السريعة!</p>
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
