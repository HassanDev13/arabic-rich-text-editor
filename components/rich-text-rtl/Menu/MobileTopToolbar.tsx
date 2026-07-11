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

  React.useEffect(() => {
    if (!editor) return;

    const checkSelection = () => {
      const { empty } = editor.state.selection;
      const isTable = editor.isActive('table');
      setHasSelection(!empty && !isTable);
    };

    // Check initial state
    checkSelection();

    // Listen to selection changes
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
    <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-2 pb-safe sm:pb-2 flex md:hidden items-center justify-center overflow-x-auto">
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
