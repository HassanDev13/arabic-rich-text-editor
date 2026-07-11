<div dir="rtl" align="center">
  <h1>Arabic Rich Text Editor</h1>
  <p>مُحرّر نصوص في خدمة اللغة العربية - الإصدار الحديث 2.0</p>
  
  <p>
    <a href="#العربية">الوثائق باللغة العربية</a> •
    <a href="#english">English Documentation</a>
  </p>
</div>

![image](https://github.com/user-attachments/assets/461176f9-e2df-4707-a752-0c59b4ae226b)

---

<div dir="rtl" align="right">

<h2 id="العربية">العربية</h2>

مُحرر نصوص عربي قوي، أنيق، وتفاعلي لمشاريع **React**، مبني على محرك [Tiptap](https://tiptap.dev). 
تم تصميمه ليقدم **تجربة مشابهة لمحرر ووردبريس (Gutenberg) و Notion** مع دعم أصلي وكامل للكتابة من اليمين لليسار (RTL)، بالإضافة إلى واجهات تفاعلية ذكية، وقوائم أدوات سياقية تتكيف مع حجم الشاشة، وخطوط عربية أصيلة.

### ✨ المميزات الجديدة (تحديثات 2.0)
- **قوائم أدوات ذكية متكيفة (Responsive Toolbars):**
  - **في الموبايل:** شريط علوي عائم (Floating Pill) ذكي يمكن سحبه وإفلاته، يظهر في أعلى الشاشة لتوفير المساحة ويتجنب التداخل مع لوحة المفاتيح.
  - **في الكمبيوتر:** قائمة منبثقة سياقية (Bubble Menu) تظهر مباشرة فوق النص المحدد لتسريع عملية التنسيق.
- **التوجيه التلقائي الذكي (Auto-Direction):** يكتشف المحرر تلقائياً لغة الكتابة (عربي/إنجليزي) ويقوم بتغيير اتجاه النص (RTL/LTR) لكل فقرة أو عنصر بشكل فوري!
- **العناوين القابلة للطي (Collapsible Headings):** أضف عناوين بأسهم تفاعلية لإخفاء وإظهار المحتوى أسفلها لتنظيم المقالات الطويلة، مع تجربة مؤشر (Cursor) سلسة ومثالية.
- **قوائم مهام تفاعلية (Task Lists):** مربعات اختيار (Checkboxes) لا تسبب قفز المؤشر، لتجربة إدارة مهام لا تشوبها شائبة.
- **نظام الإكمال التلقائي للمصطلحات (Term Autocomplete):** نظام ذكي للتعرف على المصطلحات القديمة أو المخصصة واستبدالها (مثل استبدال الكلمات الشائعة أو التنبيه عند استخدام مصطلح غير محدث).
- **الوضع الليلي (Dark Mode):** واجهة متوافقة بالكامل مع الألوان الداكنة والفاتحة بسلاسة تامة.

### 🚀 دليل الاستخدام

#### 1. التثبيت

قم بتثبيت الحزمة باستخدام مدير الحزم المفضل لديك:

```bash
npm install arabic-rich-text-editor
# أو
yarn add arabic-rich-text-editor
# أو
pnpm add arabic-rich-text-editor
```

#### 2. إعدادات Tailwind CSS (خطوة إجبارية)

بما أن المحرر يستخدم كلاسات Tailwind للتنسيق، **يجب** عليك إخبار مترجم Tailwind في مشروعك بضرورة قراءة ملفات الحزمة.

افتح ملف `tailwind.config.ts` (أو `tailwind.config.js`) الخاص بمشروعك، وأضف مسار الحزمة داخل مصفوفة `content`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // أضف هذا السطر لقراءة تنسيقات المحرر!
    "./node_modules/arabic-rich-text-editor/dist/**/*.{js,mjs}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
```

#### 3. الاستخدام الأساسي

كل ما عليك فعله هو استدعاء المكون `ArabicRichTextEditor` في صفحتك:

```tsx
import React, { useState } from "react";
import { ArabicRichTextEditor } from "arabic-rich-text-editor";

export default function EditorPage() {
  const [content, setContent] = useState("<p>مرحباً بك في المحرر العربي!</p>");

  return (
    // يُنصح بوضع المحرر داخل حاوية (Container) بحد أقصى للعرض للحصول على أفضل تجربة قراءة للمقالات
    <div className="max-w-[900px] mx-auto mt-10 p-4">
      <ArabicRichTextEditor 
        content={content} 
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </div>
  );
}
```

#### 4. الاستخدام المتقدم (التخصيص)

يوفر المحرر العديد من الخصائص (Props) التي تسمح لك بتخصيص سلوكه بشكل دقيق، مثل إضافة مصطلحات للإكمال التلقائي، أو التعديل على Tiptap.

```tsx
import { ArabicRichTextEditor } from "arabic-rich-text-editor";
import CharacterCount from '@tiptap/extension-character-count';

const myTerms = [
  { id: "1", label: "مستشفى", description: "استخدم 'مجمع طبي' بدلاً منها", outdated: true },
  { id: "2", label: "الذكاء الاصطناعي", description: "تقنية العصر" }
];

export default function AdvancedEditor() {
  return (
    <ArabicRichTextEditor
      content="<p>محتوى مخصص</p>"
      
      // 1. تغيير الخطوط والأحجام الافتراضية
      defaultFont="Cairo"
      defaultFontSize="20px"
      defaultLineHeight="2.0"
      
      // 2. تمرير مصطلحات للإكمال التلقائي (Term Autocomplete)
      autocompleteTerms={myTerms}
      
      // 3. إضافة إضافات (Extensions) مخصصة لـ Tiptap!
      extensions={[
        CharacterCount.configure({ limit: 10000 })
      ]}
      
      // 4. تخصيص ProseMirror / editorProps (مثل التقاط الأحداث وتغيير الكلاسات)
      editorProps={{
        attributes: {
          class: "prose prose-lg focus:outline-none min-h-[500px]",
        }
      }}
      
      // 5. الاستماع للتغييرات
      onChange={(html) => console.log("المحتوى الجديد:", html)}
    />
  );
}
```

### مرجع الخصائص الكامل (Props API)

| الخاصية (Prop) | النوع (Type) | القيمة الافتراضية | الوصف |
| :--- | :--- | :--- | :--- |
| `content` | `string` | `<p>...</p>` | محتوى HTML المبدئي الذي سيتم تحميله في المحرر. |
| `onChange` | `(html: string) => void` | `undefined` | دالة يتم استدعاؤها في كل مرة يتغير فيها المحتوى (تعيد نص HTML). |
| `autocompleteTerms` | `TermItem[]` | `undefined` | مصفوفة من المصطلحات لتفعيل نظام الإكمال التلقائي والتنبيه للمصطلحات القديمة. |
| `defaultFont` | `string` | `"Amiri"` | الخط الافتراضي المطبق على المحرر. |
| `defaultFontSize` | `string` | `"18px"` | حجم الخط الافتراضي للفقرات. |
| `defaultLineHeight` | `string` | `"1.5"` | ارتفاع السطر (Line-height) الافتراضي. |
| `extensions` | `AnyExtension[]` | الإضافات الأساسية | مصفوفة لتمرير إضافات (Extensions) مخصصة لمحرك Tiptap أو التعديل على الحالية. |
| `editorProps` | `EditorProps` | `{ attributes: {...} }` | خصائص ProseMirror القياسية (تسمح بالتحكم في النسخ/اللصق والأحداث المتقدمة). |
| `injectStyles` | `boolean` | `true` | يقوم تلقائياً بحقن أكواد الـ CSS الأساسية للمحرر في الـ `<head>`. |

</div>

---

<h2 id="english">English</h2>

A powerful, elegant, and highly interactive Arabic Rich Text Editor for React, built on [Tiptap](https://tiptap.dev). 
Designed to give a **WordPress Gutenberg & Notion-like experience** with native Right-to-Left (RTL) support, interactive placeholders, smart contextual toolbars that adapt to screen size, and beautiful typography.

### ✨ What's New in 2.0
- **Smart Responsive Toolbars:** 
  - **Mobile:** A draggable, floating pill toolbar appears at the top of the viewport, cleverly avoiding keyboard overlaps.
  - **Desktop:** A contextual Bubble Menu hovers precisely over selected text for fast formatting.
- **Auto-Direction Detection:** Automatically detects whether you are typing in Arabic or English and adjusts the text direction (RTL/LTR) per block in real-time!
- **Collapsible Headings:** Headings now feature interactive arrows to fold/unfold underlying content, with a flawless cursor navigation fix.
- **Enhanced Task Lists:** Interactive checkboxes that won't cause annoying editor jumps or viewport scrolls when clicked.
- **Term Autocomplete System:** Mention/autocomplete system for terminology, allowing you to highlight outdated terms and suggest modern replacements.
- **Dark Mode Ready:** Fully compatible with both dark and light UI themes seamlessly.

### 🚀 Getting Started

#### 1. Installation

Install the package via your favorite package manager:

```bash
npm install arabic-rich-text-editor
# or
yarn add arabic-rich-text-editor
# or
pnpm add arabic-rich-text-editor
```

#### 2. Tailwind CSS Configuration (Required)

Since the editor uses Tailwind CSS classes for styling, you **must** tell your project's Tailwind compiler to scan the package files.

Open your `tailwind.config.ts` (or `tailwind.config.js`) and add the package path to the `content` array:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
    // Add this line to load the editor's styles!
    "./node_modules/arabic-rich-text-editor/dist/**/*.{js,mjs}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
```

### 3. Basic Usage

```tsx
import React, { useState } from "react";
import { ArabicRichTextEditor } from "arabic-rich-text-editor";

export default function EditorPage() {
  const [content, setContent] = useState("<p>مرحباً بك في المحرر العربي!</p>");

  return (
    <div className="max-w-[900px] mx-auto mt-10 p-4">
      <ArabicRichTextEditor 
        content={content} 
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </div>
  );
}
```

### 4. Advanced Usage (Customization)

The editor exposes several props that allow you to deeply customize its behavior, extending its internal Tiptap configuration.

```tsx
import { ArabicRichTextEditor } from "arabic-rich-text-editor";
import CharacterCount from '@tiptap/extension-character-count';

const myTerms = [
  { id: "1", label: "مستشفى", description: "Use 'مجمع طبي' instead", outdated: true },
];

export default function AdvancedEditor() {
  return (
    <ArabicRichTextEditor
      content="<p>محتوى مخصص</p>"
      // 1. Override default typography
      defaultFont="Cairo"
      defaultFontSize="20px"
      defaultLineHeight="2.0"
      
      // 2. Pass terminology for the autocomplete system
      autocompleteTerms={myTerms}
      
      // 3. Add your own Tiptap extensions!
      extensions={[
        CharacterCount.configure({ limit: 10000 })
      ]}
      
      // 4. Customize ProseMirror / editorProps (e.g., event handlers)
      editorProps={{
        attributes: {
          class: "prose prose-lg focus:outline-none min-h-[500px]",
        }
      }}
      
      // 5. Listen to changes
      onChange={(html) => console.log("New HTML:", html)}
    />
  );
}
```

### Full API Reference (Props)

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `content` | `string` | `<p>...</p>` (demo) | The initial HTML content to load into the editor. |
| `onChange` | `(html: string) => void` | `undefined` | Callback fired whenever the editor's content changes. Returns the HTML string. |
| `autocompleteTerms` | `TermItem[]` | `undefined` | Array of terms to enable the autocomplete and outdated term suggestion system. |
| `defaultFont` | `string` | `"Amiri"` | The default font applied to the editor body. |
| `defaultFontSize` | `string` | `"18px"` | The default font size for standard paragraphs. |
| `defaultLineHeight` | `string` | `"1.5"` | The default CSS line-height. |
| `extensions` | `AnyExtension[]` | `[...defaults]` | An array of custom Tiptap extensions to add/override the defaults. |
| `editorProps` | `EditorProps` | `{ attributes: {...} }` | Standard ProseMirror editorProps (allows overriding copy/paste handlers, global classes, etc.). |
| `injectStyles` | `boolean` | `true` | Automatically injects the editor's base CSS into the document `<head>`. Set to `false` if you want to import your own CSS manually. |
