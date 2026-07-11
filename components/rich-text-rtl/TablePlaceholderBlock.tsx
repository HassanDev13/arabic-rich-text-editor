import React, { useState } from "react";
import { NodeViewWrapper, NodeViewProps } from "@tiptap/react";
import { Table as TableIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TablePlaceholderBlock: React.FC<NodeViewProps> = ({ editor, getPos, deleteNode, selected }) => {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const createTable = () => {
    
    // We need to know where we are to replace this placeholder
    const pos = getPos();
    
    // First delete the placeholder
    deleteNode();
    
    // Then insert the actual table at that position
    // We use setTimeout to ensure the deletion completes before insertion, 
    // avoiding transaction conflicts.
    setTimeout(() => {
      editor
        .chain()
        .focus()
        .insertTable({ rows: rows, cols: cols, withHeaderRow: true })
        .run();
    }, 10);
  };

  return (
    <NodeViewWrapper as="div" className="my-6">
      <div className={`border-2 border-dashed rounded-lg p-8 bg-gray-50/50 text-center transition-colors ${selected ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <TableIcon className="w-6 h-6" />
            <span>جدول</span>
          </div>
          
          <p className="text-sm text-gray-500">
            إدراج جدول لمشاركة بيانات.
          </p>
          
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex gap-4">
              <div className="flex flex-col items-start gap-1">
                <label className="text-sm text-gray-600" htmlFor="cols-input">عدد الأعمدة</label>
                <input 
                  id="cols-input"
                  type="number" 
                  min="1" 
                  value={cols} 
                  onChange={(e) => setCols(parseInt(e.target.value) || 1)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <label className="text-sm text-gray-600" htmlFor="rows-input">عدد الصفوف</label>
                <input 
                  id="rows-input"
                  type="number" 
                  min="1" 
                  value={rows} 
                  onChange={(e) => setRows(parseInt(e.target.value) || 1)}
                  className="border border-gray-300 rounded-md px-3 py-2 w-32 text-center focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <Button type="button" onClick={createTable} variant="default" className="w-full max-w-[270px]">
              إنشاء جدول
            </Button>
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  );
};
