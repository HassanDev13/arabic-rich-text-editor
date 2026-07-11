import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MenuItemId, MenuItemConfig } from "../types";
import { menuItemsConfig } from "./menu-config";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface EditorControlsProps {
  editor: Editor;
  menuItems: MenuItemConfig[];
  isMobileMenuOpen: boolean;
  setIsSaved: (value: boolean) => void;
}

export const EditorControls: React.FC<EditorControlsProps> = ({
  editor,
  menuItems,
  isMobileMenuOpen,
  setIsSaved,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMenuItemConfig = (id: MenuItemId): MenuItemConfig =>
    menuItems.find((item) => item.id === id) || { id, enabled: false };

  interface ToolbarButtonConfig {
    isActive?: (editor: Editor) => boolean;
    isDisabled?: (editor: Editor) => boolean;
  }

  interface CustomIconProps {
    value?: string;
    editor?: Editor;
    setIsSaved?: (value: boolean) => void;
  }

  const enabledItems = Object.entries(menuItemsConfig).filter(([id]) => getMenuItemConfig(id as MenuItemId).enabled);
  const VISIBLE_COUNT = 6;
  const visibleItems = isExpanded ? enabledItems : enabledItems.slice(0, VISIBLE_COUNT);
  const hasMore = enabledItems.length > VISIBLE_COUNT;

  return (
    <div
      className={cn(
        "p-1 flex items-center gap-1 md:gap-2 transition-all",
        isExpanded ? "flex-wrap max-w-xs md:max-w-sm" : "flex-nowrap",
        isMobileMenuOpen ? "flex" : "hidden md:flex"
      )}
    >
      {visibleItems.map(([id, config]) => {
        const itemConfig = getMenuItemConfig(id as MenuItemId);
        if (!itemConfig.enabled) return null;

        const action = itemConfig.onClick || config.action(editor, setIsSaved);
        const icon = itemConfig.customIcon || config.icon;
        const label = itemConfig.customLabel || config.label;

        const isColorInput = ["textColor", "highlightColor"].includes(id);

        return (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              {isColorInput ? (
                React.cloneElement(
                  icon as React.ReactElement<CustomIconProps>,
                  {
                    value:
                      id === "textColor"
                        ? editor.getAttributes("textStyle")?.color || "#000000"
                        : editor.getAttributes("highlight")?.color || "#00000000",
                    editor,
                    setIsSaved,
                  }
                )
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={action}
                  disabled={config.isDisabled?.(editor) || false}
                  className={cn(
                    "w-8 h-8 md:w-9 md:h-9 p-0 transition-colors",
                    config.isActive?.(editor)
                      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-500/30"
                      : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                  )}
                  aria-label={label}
                >
                  <>{icon}</>
                </Button>
              )}
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        );
      })}

      {hasMore && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-8 h-8 md:w-9 md:h-9 p-0 bg-secondary/50 hover:bg-secondary text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              aria-label="عرض المزيد"
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{isExpanded ? "طي" : "عرض المزيد"}</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
};
