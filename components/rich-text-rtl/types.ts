import { AnyExtension, EditorProviderProps } from "@tiptap/react";
import { SuggestionOptions } from "@tiptap/suggestion";
import { ReactNode } from "react";

export type MenuItemId =
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "highlight"
  | "heading1"
  | "heading2"
  | "heading3"
  | "paragraph"
  | "alignLeft"
  | "alignCenter"
  | "alignRight"
  | "alignJustify"
  | "bulletList"
  | "orderedList"
  | "taskList"
  | "codeBlock"
  | "horizontalRule"
  | "image"
  | "table"
  | "link"
  | "textColor"
  | "highlightColor"
  | "undo"
  | "redo"
  | "clearFormat"
  | "clearNodes";

export interface MenuItemConfig {
  id: MenuItemId;
  enabled?: boolean;
  customLabel?: string;
  customIcon?: React.ReactNode;
  onClick?: (editor: any) => void;
}
 declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      setFontSize: (size: string) => ReturnType;
      unsetFontSize: () => ReturnType;

     
    };
    lineHeight : {
      setLineHeight: (size: string) => ReturnType;
      unsetLineHeight: () => ReturnType;
    }
  }
}
export interface EditorMenuBarProps {
  menuItems: MenuItemConfig[];
  onSave?: () => Promise<void>;
  defaultFont?: string;
  defaultFontSize?: string;
  defaultLineHeight?: string;
  className?: string;
  showFontControls?: boolean;
  showSwitchDirection?: boolean;
  saveAuto?: boolean;
  debounceDelay?: number;
}

export interface ArabicRichTextEditorProps {
  menuItems?: MenuItemConfig[];
  onSave?: () => Promise<void>;
  content?: string;
  extensions?: AnyExtension[];
  editorProps?: any;
  defaultFont?: string;
  defaultFontSize?: string;
  defaultLineHeight?: string;
  className?: string;
  injectStyles?: boolean;
  slotBefore?: ReactNode;
  menuBarClassName?: string;
}

export interface CommandProps {
  editor: any; // Replace with Editor from @tiptap/core if typed
  range: Range;
}

export interface CommandItem {
  title: string;
  command: (props: CommandProps) => void;
  description?: string;
  icon?: React.ReactNode;
}

export interface SlashCommandsOptions {
  triggerChar?: string;
  commands?: CommandItem[];
  suggestionOptions?: Partial<SuggestionOptions>;
  tippyOptions?: Partial<any>;
}

export interface CommandItemType {
  title: string;
  command: (props: { editor: any; range: Range }) => void;
  description?: string;
  icon?: React.ReactNode;
}

export interface SlashCommandListProps {
  items: CommandItemType[];
  command: (item: CommandItemType) => void;
  className?: string;
  inputPlaceholder?: string;
  emptyMessage?: string;
}
