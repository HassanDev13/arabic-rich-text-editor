import React from "react";
import { BubbleMenu, useCurrentEditor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import { 
  Trash2, 
  ArrowUpToLine, 
  ArrowDownToLine, 
  ArrowLeftToLine, 
  ArrowRightToLine,
  Trash
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const TableBubbleMenu = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const tableControls = [
    {
      label: "إضافة صف للأعلى",
      icon: <ArrowUpToLine className="w-4 h-4" />,
      action: () => editor.chain().focus().addRowBefore().run(),
    },
    {
      label: "إضافة صف للأسفل",
      icon: <ArrowDownToLine className="w-4 h-4" />,
      action: () => editor.chain().focus().addRowAfter().run(),
    },
    {
      label: "حذف صف",
      icon: <Trash2 className="w-4 h-4 text-red-500" />,
      action: () => editor.chain().focus().deleteRow().run(),
    },
    {
      divider: true
    },
    {
      label: "إضافة عمود لليمين",
      icon: <ArrowRightToLine className="w-4 h-4" />,
      action: () => editor.chain().focus().addColumnBefore().run(), // In RTL, before is right
    },
    {
      label: "إضافة عمود لليسار",
      icon: <ArrowLeftToLine className="w-4 h-4" />,
      action: () => editor.chain().focus().addColumnAfter().run(), // In RTL, after is left
    },
    {
      label: "حذف عمود",
      icon: <Trash2 className="w-4 h-4 text-red-500" />,
      action: () => editor.chain().focus().deleteColumn().run(),
    },
    {
      divider: true
    },
    {
      label: "حذف الجدول",
      icon: <Trash className="w-4 h-4 text-red-600" />,
      action: () => editor.chain().focus().deleteTable().run(),
    },
  ];

  return (
    <BubbleMenu 
      editor={editor} 
      tippyOptions={{ 
        duration: 100, 
        placement: "bottom",
        appendTo: () => document.body,
        maxWidth: 'calc(100vw - 16px)',
        popperOptions: {
          modifiers: [
            {
              name: 'preventOverflow',
              options: { 
                boundary: 'viewport', 
                padding: 8,
                tether: false,
                altAxis: true
              }
            },
            {
              name: 'flip',
              options: { boundary: 'viewport', padding: 8 }
            }
          ]
        }
      }}
      shouldShow={({ editor }) => editor.isActive('table')}
      className="flex bg-background border shadow-md rounded-md p-1 items-center z-50 gap-1"
    >
      {tableControls.map((control, index) => {
        if (control.divider) {
          return <div key={`div-${index}`} className="w-px h-5 bg-gray-200 mx-1" />;
        }

        return (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={control.action}
                onMouseDown={(e) => e.preventDefault()}
              >
                {control.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{control.label}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </BubbleMenu>
  );
};
