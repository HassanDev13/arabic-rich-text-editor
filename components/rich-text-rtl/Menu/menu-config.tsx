import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  CheckSquare,
  Code,
  Link as LinkIcon,
  Image as ImageIcon,
  Table as TableIcon,
  Undo,
  Redo,
  Highlighter,
  Type,
  Eraser,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Define the MenuItem interface
interface MenuItem {
  icon: React.ReactNode | ((editor: Editor) => string);
  label: string;
  action: (editor: Editor, setIsSaved: (value: boolean) => void) => () => void;
  isActive?: (editor: Editor) => boolean;
  isDisabled?: (editor: Editor) => boolean;
}

// Define the config type
export const menuItemsConfig: Record<string, MenuItem> = {
  bold: {
    icon: <Bold className="w-4 h-4" />,
    label: "عريض",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleBold().run();
      setIsSaved(false);
    },
    //editor.chain().focus().toggleBold().run()}
    isActive: (editor) => editor.isActive("bold"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBold().run(),
  },
  italic: {
    icon: <Italic className="w-4 h-4" />,
    label: "مائل",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleItalic().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("italic"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleItalic().run(),
  },
  underline: {
    icon: <Underline className="w-4 h-4" />,
    label: "تسطير",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleUnderline().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("underline"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleUnderline().run(),
  },
  strike: {
    icon: <Strikethrough className="w-4 h-4" />,
    label: "يتوسط الخط",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleStrike().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("strike"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleStrike().run(),
  },
  highlight: {
    icon: <Highlighter className="w-4 h-4" />,
    label: "تمييز",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHighlight().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("highlight"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHighlight().run(),
  },
  heading1: {
    icon: "H1",
    label: "عنوان 1",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("heading", { level: 1 }),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHeading({ level: 1 }).run(),
  },
  heading2: {
    icon: "H2",
    label: "عنوان 2",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("heading", { level: 2 }),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHeading({ level: 2 }).run(),
  },
  heading3: {
    icon: "H3",
    label: "عنوان 3",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleHeading({ level: 3 }).run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("heading", { level: 3 }),
    isDisabled: (editor) => !editor.can().chain().focus().toggleHeading({ level: 3 }).run(),
  },
  paragraph: {
    icon: <Type className="w-4 h-4" />,
    label: "فقرة",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setParagraph().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("paragraph"),
  },
  alignLeft: {
    icon: <AlignLeft className="w-4 h-4" />,
    label: "محاذاة إلى اليسار",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("left").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "left" }),
    isDisabled: (editor) => !editor.can().setTextAlign("left"),
  },
  alignCenter: {
    icon: <AlignCenter className="w-4 h-4" />,
    label: "محاذاة إلى الوسط",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("center").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "center" }),
    isDisabled: (editor) => !editor.can().setTextAlign("center"),
  },
  alignRight: {
    icon: <AlignRight className="w-4 h-4" />,
    label: "محاذاة إلى اليمين",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("right").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "right" }),
    isDisabled: (editor) => !editor.can().setTextAlign("right"),
  },
  alignJustify: {
    icon: <AlignJustify className="w-4 h-4" />,
    label: "توزيع النص",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setTextAlign("justify").run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive({ textAlign: "justify" }),
    isDisabled: (editor) => !editor.can().setTextAlign("justify"),
  },
  bulletList: {
    icon: <List className="w-4 h-4" />,
    label: "قائمة نقطية",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleBulletList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("bulletList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBulletList().run(),
  },
  orderedList: {
    icon: <ListOrdered className="w-4 h-4" />,
    label: "قائمة مرقمة",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleOrderedList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("orderedList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleOrderedList().run(),
  },
  taskList: {
    icon: <CheckSquare className="w-4 h-4" />,
    label: "قائمة مهام",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleTaskList().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("taskList"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleTaskList().run(),
  },
  codeBlock: {
    icon: <Code className="w-4 h-4" />,
    label: "كود برمجي",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().toggleCodeBlock().run();
      setIsSaved(false);
    },
    isActive: (editor) => editor.isActive("codeBlock"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleCodeBlock().run(),
  },
  horizontalRule: {
    icon: <hr className="w-4 h-0.5 bg-gray-500" />,
    label: "خط أفقي",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().setHorizontalRule().run();
      setIsSaved(false);
    },
  },
  image: {
    icon: <ImageIcon className="w-4 h-4" />,
    label: "إدراج صورة",
    action: (editor, setIsSaved) => () => {
      const url = window.prompt("أدخل رابط الصورة");
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
        setIsSaved(false);
      }
    },
  },
  table: {
    icon: <TableIcon className="w-4 h-4" />,
    label: "إدراج جدول",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().insertTable(),
  },
  link: {
    icon: <LinkIcon className="w-4 h-4" />,
    label: "إدراج رابط",
    action: (editor, setIsSaved) => () => {
      const url = window.prompt("أدخل الرابط");
      if (url) {
        editor.chain().focus().setLink({ href: url }).run();
        setIsSaved(false);
      }
    },
    isActive: (editor) => editor.isActive("link"),
  },
  textColor: {
    icon: (
      <Input
        type="color"
        className="w-8 h-8 p-0 border-none"
        defaultValue="#000000"
        onChange={(e) => {
          const editorInstance = (e.target as any).editor as Editor;
          editorInstance.chain().focus().setColor(e.target.value).run();
          (e.target as any).setIsSaved(false);
        }}
        aria-label="اختر لون النص"
      />
    ),
    label: "لون النص",
    action: (editor, setIsSaved) => () => {
      // No action needed as it's handled by the input's onChange
    },
  },
  highlightColor: {
    icon: (
      <Input
        type="color"
        className="w-8 h-8 p-0 border-none"
        defaultValue="#00000000"
        onChange={(e) => {
          const editorInstance = (e.target as any).editor as Editor;
          editorInstance.chain().focus().toggleHighlight({ color: e.target.value }).run();
          (e.target as any).setIsSaved(false);
        }}
        aria-label="اختر لون التمييز"
      />
    ),
    label: "لون التمييز",
    action: (editor, setIsSaved) => () => {
      // No action needed as it's handled by the input's onChange
    },
  },
  undo: {
    icon: <Undo className="w-4 h-4" />,
    label: "تراجع",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().undo().run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().chain().focus().undo().run(),
  },
  redo: {
    icon: <Redo className="w-4 h-4" />,
    label: "إعادة",
    action: (editor, setIsSaved) => () => {
      editor.chain().focus().redo().run();
      setIsSaved(false);
    },
    isDisabled: (editor) => !editor.can().chain().focus().redo().run(),
  },
  clearFormat: {
    icon: <Eraser className="w-4 h-4" />, // Using Eraser icon for "clear format"
    label: "مسح التنسيق",
    action: (editor: Editor, setIsSaved: (value: boolean) => void) => () => {
      editor.chain().focus().unsetAllMarks().run();
      setIsSaved(false);
    },
  },
  clearNodes: {
    icon: <X className="w-4 h-4" />, // Using X icon for "clear nodes"
    label: "مسح العناصر",
    action: (editor: Editor, setIsSaved: (value: boolean) => void) => () => {
      editor.chain().focus().clearNodes().run();
      setIsSaved(false);
    },
  },
};