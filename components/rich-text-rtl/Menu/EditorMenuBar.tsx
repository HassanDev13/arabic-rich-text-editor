"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { EditorMenuBarProps } from "../types";
import { useDebounce } from "./useDebounce";
import { FontControls } from "./FontControls";
import { EditorControls } from "./EditorControls";
import { MobileMenu } from "./MobileMenu";
import { MenuIcon } from "lucide-react";

export const EditorMenuBar: React.FC<EditorMenuBarProps> = ({
  menuItems,
  onSave,
  defaultFont = "Noto Naskh Arabic",
  defaultFontSize = "16px",
  defaultLineHeight = "1.5",
  className = "",
  showFontControls = false,
  showSwitchDirection = false,
  saveAuto = true,
  debounceDelay = 1000,
}) => {
  const { editor } = useCurrentEditor();
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [isRTL, setIsRTL] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const [fontSettings, setFontSettings] = useState({
    fontFamily: defaultFont,
    fontSize: defaultFontSize,
    lineHeight: defaultLineHeight,
  });

  const handleFontChange = useCallback(
    (type: keyof typeof fontSettings, value: string) => {
      if (!editor) return;
      setFontSettings((prev) => ({ ...prev, [type]: value }));
      const actions = {
        fontFamily: () => editor.chain().focus().setFontFamily(value).run(),
        fontSize: () => editor.chain().focus().setFontSize(value).run(),
        lineHeight: () => editor.chain().focus().setLineHeight(value).run(),
      };
      actions[type]();
      setIsSaved(false);
    },
    [editor]
  );

  const toggleRTL = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().setTextAlign(isRTL ? "left" : "right").run();
    setIsRTL((prev) => !prev);
    setIsSaved(false);
  }, [editor, isRTL]);

  const handleSave = useCallback(async () => {
    if (!onSave) return;
    setIsSaving(true);
    try {
      await onSave();
      setIsSaved(true);
    } finally {
      setIsSaving(false);
    }
  }, [onSave]);

  const debouncedSave = useDebounce(handleSave, debounceDelay);

  useEffect(() => {
    if (!editor || !onSave || !saveAuto) return;

    const handleUpdate = () => {
      setIsSaved(false);
      debouncedSave();
    };

    editor.on("update", handleUpdate);

    // Cleanup function explicitly returns void
    return () => {
      editor.off("update", handleUpdate);
    };
  }, [editor, debouncedSave, onSave, saveAuto]);

  if (!editor) return null;

  return (
    <TooltipProvider>
      <div className={cn("sticky top-0 z-10 bg-muted/40 border-b", className)}>
        <div className="flex items-center justify-between p-2 flex-wrap gap-2 md:gap-4">
          {showFontControls && (
            <FontControls
              fontSettings={fontSettings}
              onFontChange={handleFontChange}
              className="hidden md:flex"
            />
          )}

          <div className="flex items-center gap-2">
            {onSave && !saveAuto && (
              <Button onClick={handleSave} disabled={isSaving} className="min-w-[80px]">
                {isSaving ? "جارٍ الحفظ..." : "حفظ"}
              </Button>
            )}
            {onSave && saveAuto && (
              <span
                className={cn(
                  "text-sm px-3 py-1 rounded-md",
                  isSaving ? "text-gray-600" : isSaved ? "text-green-600" : "text-gray-400"
                )}
              >
                {isSaving ? "جارٍ الحفظ..." : isSaved ? "تم الحفظ" : "غير محفوظ"}
              </span>
            )}
            {showSwitchDirection && (
              <Button variant="outline" onClick={toggleRTL}>
                {isRTL ? "LTR" : "RTL"}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="فتح قائمة التحرير"
            >
              <MenuIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <EditorControls
          editor={editor}
          menuItems={menuItems}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsSaved={setIsSaved}
        />

        {isMobileMenuOpen && showFontControls && (
          <MobileMenu fontSettings={fontSettings} onFontChange={handleFontChange} />
        )}
      </div>
    </TooltipProvider>
  );
};

export default EditorMenuBar;