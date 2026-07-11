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

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import testTerms from "./software-engineering-terms.json";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 py-8">
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition-transform"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="w-full md:w-[80%] mx-auto">
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
              class: "tiptap prose dark:prose-invert max-w-none min-h-[800px] w-full bg-white dark:bg-gray-800 dark:text-gray-100 focus:outline-none shadow-sm rounded-b-md p-8",
              style: "",
            },
          }}
          defaultFont="Cairo"
          defaultFontSize="18px"
          defaultLineHeight="2"
          className="flex flex-col bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden"
          injectStyles={true}
          menuBarClassName="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
          autocompleteTerms={testTerms}
        />
      </div>
    </div>
  );
};

export default App;
