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
import React from "react";

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
  return (
    <div
      className={cn(
        "p-2 flex flex-wrap items-center gap-2 md:gap-3",
        isMobileMenuOpen ? "block" : "hidden md:flex"
      )}
    >
      {Object.entries(menuItemsConfig).map(([id, config]) => {
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
                variant={config.isActive?.(editor) ? "secondary" : "ghost"}
                size="sm"
                onClick={action}
                disabled={config.isDisabled?.(editor) || false}
                className="w-9 h-9 md:w-10 md:h-10"
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
    </div>
  );
};
