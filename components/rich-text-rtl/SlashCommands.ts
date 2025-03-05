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
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleBulletList().run(),
        },
        {
          title: "قائمة مرقمة",
          description: "إنشاء قائمة مرقمة",
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleOrderedList().run(),
        },
        {
          title: "قائمة مهام",
          description: "إنشاء قائمة مهام تفاعلية",
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleTaskList().run(),
        },
        {
          title: "جدول",
          description: "إدراج جدول 3x3",
          command: ({ editor, range }) =>
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run(),
        },
        {
          title: "كود برمجي",
          description: "إدراج كتلة كود",
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleCodeBlock().run(),
        },
        {
          title: "اقتباس",
          description: "إضافة اقتباس",
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleBlockquote().run(),
        },
        {
          title: "خط أفقي",
          description: "إدراج فاصل أفقي",
          command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).setHorizontalRule().run(),
        },
        {
          title: "صورة",
          description: "إدراج صورة برابط",
          command: ({ editor, range }) => {
            const url = window.prompt("أدخل رابط الصورة");
            if (url)
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setImage({ src: url })
                .run();
          },
        },
        {
          title: "رابط",
          description: "إضافة رابط تشعبي",
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
        command: ({ editor, range, props }) => {
          props.command({ editor, range });
        },
        items: ({ query }: { query: string }) => {
          return (this.options.commands || [])
            .filter((item) =>
              item.title.toLowerCase().includes(query.toLowerCase())
            )
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
      }),
    ];
  },
});

export default SlashCommands;
