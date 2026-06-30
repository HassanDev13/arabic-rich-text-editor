"use client";

import React, { useEffect, useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import { Sparkles, RefreshCw, X } from "lucide-react";
import { checkOutdatedTerms, updateOutdatedTerms, TermItem } from "../termDictionary";
import { Button } from "@/components/ui/button";

interface OutdatedTermsBannerProps {
  autocompleteTerms?: TermItem[];
}

export const OutdatedTermsBanner: React.FC<OutdatedTermsBannerProps> = ({ autocompleteTerms }) => {
  const { editor } = useCurrentEditor();
  const [outdatedCount, setOutdatedCount] = useState(0);
  const [ignored, setIgnored] = useState(false);

  useEffect(() => {
    if (!editor || !autocompleteTerms || autocompleteTerms.length === 0 || ignored) {
      return;
    }

    const handleCheck = () => {
      const count = checkOutdatedTerms(editor, autocompleteTerms);
      setOutdatedCount(count);
    };

    // Check on initial load
    handleCheck();

    // Check on content updates
    editor.on("update", handleCheck);

    return () => {
      editor.off("update", handleCheck);
    };
  }, [editor, autocompleteTerms, ignored]);

  if (outdatedCount === 0 || ignored) {
    return null;
  }

  const handleUpdate = () => {
    if (editor && autocompleteTerms) {
      const count = updateOutdatedTerms(editor, autocompleteTerms);
      console.log(`Updated ${count} outdated terms.`);
      setOutdatedCount(0);
    }
  };

  return (
    <div
      dir="rtl"
      className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[420px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-xl shadow-gray-200/50 dark:shadow-none z-50 flex flex-col gap-3 text-right direction-rtl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-2">
          <Sparkles className="w-5 h-5 text-gray-500 dark:text-gray-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
              تحديث المصطلحات المعرّبة
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              تم العثور على <strong>{outdatedCount} مصطلحات</strong> في هذا المقال تمتلك تعريبات أحدث في قاعدة البيانات الجديدة.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIgnored(true)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2 justify-end mt-1">
        <Button
          onClick={() => setIgnored(true)}
          variant="ghost"
          size="sm"
          className="text-[11px] text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          تجاهل التنبيه
        </Button>
        <Button
          onClick={handleUpdate}
          size="sm"
          variant="outline"
          className="text-[11px] bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium gap-1.5 shadow-sm dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          <RefreshCw className="w-3 h-3 text-gray-500" />
          تحديث الكل الآن
        </Button>
      </div>
    </div>
  );
};
