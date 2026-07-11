"use client";

import React from "react";
import { useCurrentEditor } from "@tiptap/react";
import { EditorControls } from "./EditorControls";
import { MenuItemConfig } from "../types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GripVertical } from "lucide-react";

interface MobileTopToolbarProps {
  menuItems: MenuItemConfig[];
}

export const MobileTopToolbar: React.FC<MobileTopToolbarProps> = ({ menuItems }) => {
  const { editor } = useCurrentEditor();
  const [hasSelection, setHasSelection] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [topOffset, setTopOffset] = React.useState(8); // 8px = top-2
  const dragStartRef = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;

    const viewport = window.visualViewport;
    const updatePosition = () => {
      // viewport.offsetTop tracks how far the visual viewport is offset 
      // from the layout viewport (e.g. when keyboard opens on iOS).
      setTopOffset(viewport.offsetTop + 8);
    };

    viewport.addEventListener('resize', updatePosition);
    viewport.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => {
      viewport.removeEventListener('resize', updatePosition);
      viewport.removeEventListener('scroll', updatePosition);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  React.useEffect(() => {
    if (!editor) return;

    const checkSelection = () => {
      const { empty } = editor.state.selection;
      const isTable = editor.isActive('table');
      const newHasSelection = !empty && !isTable;
      
      setHasSelection((prev) => {
        // Reset position to default top-center when it reappears
        if (!prev && newHasSelection) {
          setPosition({ x: 0, y: 0 });
        }
        return newHasSelection;
      });
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
    <div 
      style={{ 
        top: `${topOffset}px`,
        transform: `translate(calc(-50% + ${position.x}px), ${position.y}px)` 
      }}
      className="fixed left-1/2 z-50 w-max max-w-[95vw] bg-gray-100/95 dark:bg-gray-950/95 backdrop-blur-xl border border-gray-300 dark:border-gray-700 shadow-xl shadow-black/20 rounded-3xl p-1 flex md:hidden items-center justify-center overflow-x-auto animate-in fade-in duration-300 ease-out scale-90 sm:scale-100 origin-top touch-none"
    >
      <div 
        className="px-1 py-2 cursor-grab active:cursor-grabbing text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex-shrink-0"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <GripVertical className="w-5 h-5" />
      </div>
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
