"use client";

import React from "react";
import { BubbleMenu, FloatingMenu, useCurrentEditor } from "@tiptap/react";
import { EditorControls } from "./EditorControls";
import { MenuItemConfig } from "../types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TableBubbleMenu } from "./TableBubbleMenu";

interface AccessibleToolbarsProps {
  menuItems: MenuItemConfig[];
}

export const AccessibleToolbars: React.FC<AccessibleToolbarsProps> = ({ menuItems }) => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <TooltipProvider>
      <TableBubbleMenu />
      <BubbleMenu 
        editor={editor} 
        tippyOptions={{ 
          duration: 100,
          appendTo: () => document.body,
          maxWidth: 'calc(100vw - 16px)',
          popperOptions: {
            modifiers: [
              {
                name: 'preventOverflow',
                options: { 
                  boundary: 'viewport', 
                  padding: 8,
                  tether: false, // Allows tooltip to stay in viewport even if reference is huge
                  altAxis: true  // Prevents overflow on the alternate axis
                }
              },
              {
                name: 'flip',
                options: { boundary: 'viewport', padding: 8 }
              }
            ]
          }
        }} 
        shouldShow={({ editor, view, state, from, to }) => {
          if (typeof window !== 'undefined' && window.innerWidth < 768) return false;
          if (editor.isActive('table')) return false;
          // Default Tiptap BubbleMenu logic (requires selection and not empty)
          const { doc, selection } = state;
          const { empty } = selection;
          const isEmptyTextBlock = !doc.textBetween(from, to).length;
          return !empty && !isEmptyTextBlock;
        }}
        className="flex bg-background border shadow-md rounded-md p-1 items-center z-50"
      >
        <EditorControls
          editor={editor}
          menuItems={menuItems}
          isMobileMenuOpen={true}
          setIsSaved={() => {}}
        />
      </BubbleMenu>
      
      <FloatingMenu 
        editor={editor} 
        tippyOptions={{ 
          duration: 100, 
          placement: "left-start",
          appendTo: () => document.body
        }} 
        className="flex gap-1 z-50"
      >
        <Button type="button" variant="ghost" size="icon" onClick={() => editor.commands.insertContent('/')} onMouseDown={(e) => e.preventDefault()} onPointerDown={(e) => e.preventDefault()} className="rounded-full w-6 h-6 bg-background border shadow-sm text-muted-foreground hover:text-foreground">
          <Plus className="w-3 h-3" />
        </Button>
      </FloatingMenu>
    </TooltipProvider>
  );
};
