import { AnyExtension } from '@tiptap/react';
import { SuggestionOptions } from '@tiptap/suggestion';
import { ReactNode } from 'react';
import * as _tiptap_core from '@tiptap/core';
import { Extension, Mark } from '@tiptap/core';

interface TermItem {
    arabic: string;
    english: string;
    description?: string;
    usageCount?: number;
}
declare function incrementTermUsage(arabic: string, english: string): void;
declare function getCustomTermsFromStorage(customTerms: TermItem[]): Required<TermItem>[];
declare function checkOutdatedTerms(editor: any, currentTerms: TermItem[]): number;
declare function updateOutdatedTerms(editor: any, currentTerms: TermItem[]): number;

type MenuItemId = "bold" | "italic" | "underline" | "strike" | "highlight" | "heading1" | "heading2" | "heading3" | "paragraph" | "alignLeft" | "alignCenter" | "alignRight" | "alignJustify" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "image" | "table" | "link" | "textColor" | "highlightColor" | "undo" | "redo" | "clearFormat" | "clearNodes";
interface MenuItemConfig {
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
        lineHeight: {
            setLineHeight: (size: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}
interface EditorMenuBarProps {
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
interface ArabicRichTextEditorProps {
    menuItems?: MenuItemConfig[];
    onSave?: () => Promise<void>;
    onChange?: (html: string) => void;
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
    autocompleteTerms?: TermItem[];
}
interface CommandProps {
    editor: any;
    range: Range;
}
interface CommandItem {
    title: string;
    command: (props: CommandProps) => void;
    description?: string;
    icon?: React.ReactNode;
    searchTerms?: string[];
}
interface SlashCommandsOptions {
    triggerChar?: string;
    commands?: CommandItem[];
    suggestionOptions?: Partial<SuggestionOptions>;
    tippyOptions?: Partial<any>;
}
interface CommandItemType {
    title: string;
    command: (props: {
        editor: any;
        range: Range;
    }) => void;
    description?: string;
    icon?: React.ReactNode;
    searchTerms?: string[];
}
interface SlashCommandListProps {
    items: CommandItemType[];
    command: (item: CommandItemType) => void;
    className?: string;
    inputPlaceholder?: string;
    emptyMessage?: string;
}

declare const ArabicRichTextEditor: React.FC<ArabicRichTextEditorProps>;

declare const editorExtensions: (_tiptap_core.Node<any, any> | _tiptap_core.Mark<any, any> | Extension<any, any>)[];

declare const injectEditorStyles: () => void;

declare const TermAutocomplete: Extension<any, any>;

declare const TermMark: Mark<any, any>;

export { ArabicRichTextEditor, type ArabicRichTextEditorProps, type CommandItem, type CommandItemType, type CommandProps, type EditorMenuBarProps, type MenuItemConfig, type MenuItemId, type SlashCommandListProps, type SlashCommandsOptions, TermAutocomplete, type TermItem, TermMark, checkOutdatedTerms, editorExtensions, getCustomTermsFromStorage, incrementTermUsage, injectEditorStyles, updateOutdatedTerms };
