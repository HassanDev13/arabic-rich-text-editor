# Arabic Rich Text Editor

A modern, highly customizable, and fully accessible rich text editor built specifically for Arabic content (RTL). Inspired by the WordPress Gutenberg block editor and Notion, this editor features a beautiful, clean interface relying on contextual toolbars instead of cluttered static navbars.

## Features

- **RTL First:** Native support for Arabic typography with pre-configured Google Fonts (like Amiri, Cairo, Noto Naskh Arabic).
- **Block-Based UX:** Press `Enter` to create a new block, or `Shift+Enter` for a line break within the same block.
- **Slash Commands (`/`):** Type `/` at the beginning of a paragraph to instantly summon a popup menu to insert headings, lists, tables, images, code blocks, and quotes. Filters instantly as you type!
- **Accessible Toolbars (Bubble Menu):** Select any text to reveal a floating toolbar for formatting (bold, italic, colors, alignment, links) exactly when you need it.
- **Floating Block Menu:** A subtle `+` indicator appears on empty blocks to quickly add new content.
- **Lightweight & Fast:** Built on top of [Tiptap](https://tiptap.dev/) and React, styled with Tailwind CSS.
- **Developer Friendly:** Fully customizable props, extendable menus, and easy integration into Next.js/React applications.

## Installation

This editor relies on Tiptap, Lucide Icons, and Tailwind CSS. Ensure you have the following dependencies installed in your project:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/extension-text-align @tiptap/extension-image @tiptap/extension-table @tiptap/extension-table-row @tiptap/extension-table-cell @tiptap/extension-table-header @tiptap/extension-color @tiptap/extension-text-style @tiptap/extension-highlight @tiptap/extension-underline @tiptap/extension-link @tiptap/extension-heading @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-code-block @tiptap/extension-font-family lucide-react tippy.js
```

*(Note: Shadcn UI components `Button`, `Input`, `Tooltip`, and `Command` are also used for the UI).*

## Usage

Simply import the editor and drop it into your React application:

```tsx
import { useState } from 'react';
import { ArabicRichTextEditor } from './components/rich-text-rtl';

export default function MyBlogPage() {
  const [content, setContent] = useState('<p>ابدأ الكتابة هنا...</p>');

  return (
    <div className="max-w-4xl mx-auto py-10">
      <ArabicRichTextEditor 
        content={content} 
        onChange={(html) => setContent(html)} 
      />
    </div>
  );
}
```

## Customization (Full Custom)

The `ArabicRichTextEditor` component accepts several props for full customization:

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `string` | *(Demo Content)* | The initial HTML content of the editor. |
| `onChange` | `(html: string) => void` | `undefined` | Callback fired whenever the content changes. |
| `onSave` | `() => Promise<void>` | `undefined` | Callback for manual or auto-save triggers. |
| `menuItems` | `MenuItemConfig[]` | `defaultMenuItems` | Customize which buttons appear in the Bubble Menu. |
| `extensions` | `AnyExtension[]` | `editorExtensions` | Provide custom Tiptap extensions. |
| `className` | `string` | `"flex flex-col..."` | Wrapper class for the editor container. |
| `editorProps` | `any` | `{ class: "tiptap prose..." }` | Properties passed directly to the Tiptap editor instance. |
| `injectStyles` | `boolean` | `true` | Automatically injects the required Google Fonts and base CSS for the editor. |

## Keyboard Shortcuts

- `Enter`: New block / paragraph
- `Shift + Enter`: Soft line break
- `/` (at start of line): Open block insertion menu
- `Ctrl/Cmd + B`: **Bold**
- `Ctrl/Cmd + I`: *Italic*
- `Ctrl/Cmd + U`: Underline
- `Ctrl/Cmd + Z`: Undo
- `Ctrl/Cmd + Shift + Z`: Redo

## Architecture

This package is designed to be easily portable. All components are self-contained inside the `rich-text-rtl` directory. 
To move this into a monorepo or another project (like *Qiyas*), simply copy the `rich-text-rtl` folder and ensure the dependencies are installed. The `index.ts` file acts as the public API surface for the package.
