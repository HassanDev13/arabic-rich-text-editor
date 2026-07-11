import { Extension } from "@tiptap/core";
import tippy, { Instance as TippyInstance } from "tippy.js";

import { ReactRenderer } from "@tiptap/react";
import SlashCommandList from "@/components/rich-text-rtl/SlashCommandList";
import { SlashCommandsOptions } from "./types";
import Suggestion from "@tiptap/suggestion";


const SlashCommands = Extension.create<SlashCommandsOptions>({
  name: "slashCommands",

  addOptions() {
    return {
      triggerChar: "/",
      commands: [
        {
          title: "عنوان 1",
          description: "إضافة عنوان رئيسي",
          searchTerms: ["h1", "heading 1", "title"],
          command: ({ editor, range }) =>
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .setNode("heading", { level: 1 })
              .run(),
        },
        {
          title: "عنوان 2",
          description: "إضافة عنوان فرعي",
          searchTerms: ["h2", "heading 2", "subtitle"],
          command: ({ editor, range }) =>
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .setNode("heading", { level: 2 })
              .run(),
        },
        {
          title: "عنوان 3",
          description: "إضافة عنوان فرعي صغير",
          searchTerms: ["h3", "heading 3", "subheading"],
          command: ({ editor, range }) =>
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .setNode("heading", { level: 3 })
              .run(),
        },
        {
          title: "فقرة",
          description: "إضافة نص عادي",
          searchTerms: ["p", "paragraph", "text"],
          command: ({ editor, range }) =>
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .setNode("paragraph")
              .run(),
        },
        {
          title: "قائمة نقطية",
          description: "إنشاء قائمة بنقاط",
          searchTerms: ["ul", "bullet", "list", "unordered"],
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleBulletList().run(),
        },
        {
          title: "قائمة مرقمة",
          description: "إنشاء قائمة مرقمة",
          searchTerms: ["ol", "ordered", "list", "number"],
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
        },
        {
          title: "قائمة مهام",
          description: "إنشاء قائمة مهام تفاعلية",
          searchTerms: ["task", "todo", "checklist", "check"],
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleTaskList().run(),
        },
        {
          title: "جدول",
          description: "إدراج جدول لمشاركة بيانات",
          searchTerms: ["table", "grid"],
          command: ({ editor, range }) =>
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .insertContent({ type: 'tablePlaceholder' })
              .run(),
        },
        {
          title: "كود برمجي",
          description: "إدراج كتلة كود",
          searchTerms: ["code", "block", "pre"],
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
        },
        {
          title: "اقتباس",
          description: "إضافة اقتباس",
          searchTerms: ["quote", "blockquote"],
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
        },
        {
          title: "خط أفقي",
          description: "إدراج فاصل أفقي",
          searchTerms: ["hr", "horizontal", "rule", "line", "divider"],
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
        },
        {
          title: "صورة",
          description: "أضف صورة أو ارفعها من جهازك",
          searchTerms: ["image", "picture", "img", "photo"],
          command: ({ editor, range }) => {
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .setImage({ src: '' })
              .run();
          },
        },
        {
          title: "رابط",
          description: "إضافة رابط تشعبي",
          searchTerms: ["link", "url", "a", "href"],
          command: ({ editor, range }) => {
            const url = window.prompt("أدخل الرابط");
            if (url)
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setLink({ href: url })
                .run();
          },
        },
      ],
      suggestionOptions: {},
      tippyOptions: {
        duration: 200,
        placement: "bottom-start",
        interactive: true,
        theme: "none", // Prevents default Tippy theme
        arrow: false, // Removes the arrow
        offset: [0, 5], // Optional: adjusts popup position

        popperOptions: {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                padding: 8,
              },
            },
          ],
        },
        // Inline styles to override tippy-content
        onCreate(instance: TippyInstance) {
          const content = instance.popper.querySelector(".tippy-content");
          if (content) {
            content.setAttribute(
              "style",
              "padding: 0; background: transparent; border: none; box-shadow: none;"
            ); 
          }
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        char: this.options.triggerChar,
        allow: ({ state, range }) => {
          const $from = state.doc.resolve(range.from);
          const isRootDepth = $from.depth === 1;
          const isParagraph = $from.parent.type.name === 'paragraph';
          return isRootDepth && isParagraph && $from.parent.textContent.startsWith('/');
        },
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
        items: ({ query }: { query: string }) => {
          return (this.options.commands || [])
            .filter((item) => {
              const q = query.toLowerCase();
              return item.title.toLowerCase().includes(q) || 
                     (item.searchTerms && item.searchTerms.some((term: string) => term.toLowerCase().includes(q)));
            })
            .slice(0, 10); // Limit to 10 suggestions
        },
        render: () => {
          let component: any;
          let popup: TippyInstance[];

          return {
            onStart: (props: any) => {
              component = new ReactRenderer(SlashCommandList, {
                props,
                editor: props.editor,
              });

              if (!props.clientRect) return;

              popup = tippy("body", {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: "manual",
                ...this.options.tippyOptions,
              }) as TippyInstance[];
            },

            onUpdate(props: any) {
              component.updateProps(props);
              if (!props.clientRect) return;
              popup[0].setProps({
                getReferenceClientRect: props.clientRect,
              });
            },

            onKeyDown(props: any) {
              if (props.event.key === "Escape") {
                popup[0].hide();
                return true;
              }
              return component.ref?.onKeyDown(props) || false;
            },

            onExit() {
              if (popup && popup[0]) popup[0].destroy();
              if (component) component.destroy();
            },
          };
        },
        ...this.options.suggestionOptions,
      }) as any,
    ];
  },
});

export default SlashCommands;
