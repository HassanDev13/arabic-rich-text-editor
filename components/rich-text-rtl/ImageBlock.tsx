import React, { useRef, useState } from "react";
import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import { Image as ImageIcon, Upload, Link as LinkIcon, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ImageBlock: React.FC<NodeViewProps> = ({ node, updateAttributes, selected, deleteNode, editor, getPos }) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target?.result as string;
        updateAttributes({ src, alt: file.name });
        setIsUploading(false);
        
        // Automatically insert a paragraph block after the image
        if (typeof getPos === 'function') {
           const pos = getPos() + node.nodeSize;
           editor.chain().insertContentAt(pos, '<p></p>').focus(pos + 1).run();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const promptForUrl = () => {
    const url = window.prompt("أدخل رابط الصورة (URL):");
    if (url) {
      updateAttributes({ src: url });
      
      // Automatically insert a paragraph block after the image
      if (typeof getPos === 'function') {
         const pos = getPos() + node.nodeSize;
         editor.chain().insertContentAt(pos, '<p></p>').focus(pos + 1).run();
      }
    }
  };

  // If there's an image src, render the image
  if (node.attrs.src) {
    return (
      <NodeViewWrapper as="figure" className="relative group my-8">
        <div className={`relative rounded-md overflow-hidden ${selected ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={node.attrs.src} alt={node.attrs.alt || "صورة"} className="w-full h-auto rounded-md object-contain max-h-[500px] mx-auto bg-muted" />
          
          {/* Actions Overlay */}
          <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="destructive" size="icon" className="h-8 w-8 shadow-md" onClick={() => deleteNode()}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </NodeViewWrapper>
    );
  }

  // Otherwise render the placeholder
  return (
    <NodeViewWrapper as="div" className="my-6">
      <div className={`border-2 border-dashed rounded-lg p-8 bg-muted/50 text-center transition-colors ${selected ? 'border-primary bg-primary/5' : 'border-muted-foreground/20'}`}>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground font-medium">
            <ImageIcon className="w-6 h-6" />
            <span>صورة</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            اختر صورة من جهازك أو أدرجها من رابط.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <Button 
              variant="default" 
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
            >
              <Upload className="w-4 h-4 ml-2" />
              {isUploading ? 'جاري الرفع...' : 'رفع صورة'}
            </Button>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleUpload} 
              accept="image/*" 
              className="hidden" 
            />
            
            <Button 
              variant="outline" 
              onClick={promptForUrl}
              className="bg-background"
            >
              <LinkIcon className="w-4 h-4 ml-2" />
              أدرج من رابط (URL)
            </Button>
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  );
};
