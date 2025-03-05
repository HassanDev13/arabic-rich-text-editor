"use client";
import ArabicRichTextEditor from "@/components/rich-text-rtl/ArabicRichTextEditor";
import { editorExtensions } from "@/components/rich-text-rtl/editorConfig";
import SlashCommands from "@/components/rich-text-rtl/SlashCommands";
import React from "react";




const customSlashCommands = SlashCommands.configure({
  triggerChar: "/", // Default, can change to "#", "@", etc.
  commands: [
    {
      title: "ملاحظة",
      description: "إضافة ملاحظة خاصة",
      command: ({ editor, range }) =>
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .insertContent("ملاحظة: ")
          .run(),
      icon: <span>📝</span>,
    },
    // Include default commands or override them
    ...(SlashCommands.options?.commands || []),
  ],
  tippyOptions: {
    placement: "top-start", // Example customization
  },
});

const App: React.FC = () => {
  return (
    <ArabicRichTextEditor

      onSave={async () => {
        console.log("Saving...");
        await fetch("/api/save", { method: "POST" });
      }}
      extensions={[
        ...editorExtensions.filter((ext) => ext.name !== "slashCommands"),
        customSlashCommands,
  
      ]}

      editorProps={{
        attributes: {
          class: "tiptap min-h-screen bg-white w-2/3 focus:outline-none",
          style: "",
        },
      }}
      defaultFont="Cairo"
      defaultFontSize="18px"
      defaultLineHeight="2"
      className="flex flex-col min-h-screen bg-gray-100 "
      injectStyles={true}
      menuBarClassName="bg-gray-100"
      
    />
  );
};

export default App;
