"use client";

import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { EditorControls } from "./EditorControls";
import { MenuItemConfig } from "../types";
import { TooltipProvider } from "@/components/ui/tooltip";

interface MobileTopToolbarProps {
  menuItems: MenuItemConfig[];
}

export const MobileTopToolbar: React.FC<MobileTopToolbarProps> = ({ menuItems }) => {
  const { editor } = useCurrentEditor();
  const [hasSelection, setHasSelection] = React.useState(false);
  const [keyboardOffset, setKeyboardOffset] = React.useState(24);

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const viewport = window.visualViewport;
    
    const updateKeyboard = () => {
      // If the visual viewport shrinks, it means the keyboard is open.
      const offset = window.innerHeight - viewport.height;
      setKeyboardOffset(offset > 0 ? offset + 10 : 24);
    };

    viewport.addEventListener('resize', updateKeyboard);
    viewport.addEventListener('scroll', updateKeyboard);
    updateKeyboard();

    return () => {
      viewport.removeEventListener('resize', updateKeyboard);
      viewport.removeEventListener('scroll', updateKeyboard);
    };
  }, []);

  React.useEffect(() => {
    if (!editor) return;

    const checkSelection = () => {
      const { empty } = editor.state.selection;
      const isTable = editor.isActive('table');
      setHasSelection(!empty && !isTable);
    };

    checkSelection();

    editor.on('selectionUpdate', checkSelection);
    editor.on('transaction', checkSelection);

    return () => {
      editor.off('selectionUpdate', checkSelection);
      editor.off('transaction', checkSelection);
    };
  }, [editor]);

  if (!editor || !hasSelection) {
    return null;
  }

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw] bg-gray-100/95 dark:bg-gray-950/95 backdrop-blur-xl border border-gray-300 dark:border-gray-700 shadow-xl shadow-black/20 rounded-3xl p-1 flex md:hidden items-center justify-center overflow-x-auto animate-in slide-in-from-top-4 fade-in duration-300 ease-out scale-90 sm:scale-100 origin-top">
      <TooltipProvider>
        <EditorControls
          editor={editor}
          menuItems={menuItems}
          isMobileMenuOpen={true}
          setIsSaved={() => {}}
        />
      </TooltipProvider>
    </div>
  );
};
