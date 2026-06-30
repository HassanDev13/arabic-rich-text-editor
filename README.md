<div dir="rtl" align="center">
  <h1>Arabic Rich Text Editor</h1>
  <p>مُحرّر نصوص في خدمة اللغة العربية</p>
  
  <p>
    <a href="#english">English Documentation</a> •
    <a href="#العربية">الوثائق باللغة العربية</a>
  </p>
</div>

![image](https://github.com/user-attachments/assets/461176f9-e2df-4707-a752-0c59b4ae226b)

---

<h2 id="english">🇬🇧 English</h2>

A powerful, elegant, and highly interactive Arabic Rich Text Editor for React, built on [Tiptap](https://tiptap.dev). 
Designed to give a **WordPress Gutenberg-like experience** with native Right-to-Left (RTL) support, interactive placeholders, contextual toolbars, and beautiful typography using the Amiri font.

### ✨ Features
- **Native RTL Support:** Flawless Arabic typing experience with built-in bidirectional text isolation (keeps English code and numbers LTR even inside Arabic text).
- **Gutenberg-like Experience:** Interactive placeholder blocks for inserting Tables and Images natively within the editor.
- **Slash Commands (`/`):** Type `/` to open a beautiful dropdown menu to insert blocks (Headings, Lists, Images, Tables, Quotes, etc.).
- **Contextual Toolbars:** Smart bubble menus appear only when needed (e.g., text formatting menu when text is selected, table manipulation menu when inside a table).
- **Tailwind Ready:** Styled using Tailwind CSS for easy theme matching and customization.

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
    // Your existing paths...
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

#### 3. Basic Usage

```tsx
import React, { useState } from "react";
import { ArabicRichTextEditor } from "arabic-rich-text-editor";

export default function EditorPage() {
  const [content, setContent] = useState("<p>مرحباً بك في المحرر العربي!</p>");

  return (
    <div className="max-w-[900px] mx-auto mt-10 p-4">
      <ArabicRichTextEditor 
        initialContent={content} 
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />
    </div>
  );
}
```

---

<div dir="rtl" align="right">

<h2 id="العربية">🇸🇦 العربية</h2>

مُحرر نصوص عربي قوي، أنيق، وتفاعلي لمشاريع **React**، مبني على محرك [Tiptap](https://tiptap.dev). 
تم تصميمه ليقدم **تجربة مشابهة لمحرر ووردبريس (Gutenberg)** مع دعم أصلي وكامل للكتابة من اليمين لليسار (RTL)، بالإضافة إلى واجهات تفاعلية ذكية، وقوائم أدوات سياقية، وخطوط عربية أصيلة (Amiri).

### ✨ المميزات
- **دعم مثالي للغة العربية (RTL):** تجربة كتابة سلسة مع عزل ذكي للنصوص المزدوجة (يحافظ على الأكواد والأرقام الإنجليزية من اليسار لليمين حتى داخل الفقرات العربية).
- **تجربة مشابهة لووردبريس:** مربعات تفاعلية (Placeholders) عند إدراج الصور والجداول تتيح للمستخدم ضبط إعداداتها قبل إدراجها.
- **قائمة الأوامر السريعة (`/`):** اكتب `/` في بداية أي سطر لفتح قائمة منسدلة أنيقة تتيح لك إدراج (العناوين، القوائم، الصور، الجداول، الاقتباسات.. إلخ).
- **قوائم أدوات ذكية (Contextual):** تظهر أدوات التنسيق فقط عند الحاجة إليها (مثال: عند تحديد نص، أو عند الوقوف داخل جدول لإضافة/حذف أعمدة وصفوف).
- **متوافق مع Tailwind:** مبني ومُنسق باستخدام Tailwind CSS لتسهيل عملية التخصيص والملاءمة مع تصميم موقعك.

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
    // مسارات مشروعك الحالية...
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
        initialContent={content} 
        onChange={(newContent) => {
          setContent(newContent);
          // سيتم طباعة محتوى الـ HTML الجديد هنا
        }}
      />
    </div>
  );
}
```

### 🤝 المساهمة
نرحب بمساهمات الجميع لتحسين تجربة الاستخدام وإضافة مميزات جديدة! إذا كان لديك أي فكرة أو واجهت مشكلة، لا تتردد في فتح (Issue) أو تقديم (Pull Request).

</div>
