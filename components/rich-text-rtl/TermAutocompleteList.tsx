"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  Command as CommandComponent,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { TermItem } from "./termDictionary";

export interface TermAutocompleteListProps {
  items: TermItem[];
  command: (item: TermItem) => void;
  className?: string;
}

export interface TermAutocompleteListRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean;
}

const TermAutocompleteList = forwardRef<TermAutocompleteListRef, TermAutocompleteListProps>(
  ({ items, command, className }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const listRef = useRef<HTMLDivElement>(null);

    const selectItem = (index: number) => {
      const item = items[index];
      if (item) {
        command(item);
      }
    };

    const upHandler = () => {
      setSelectedIndex((prev) => (prev + items.length - 1) % items.length);
    };

    const downHandler = () => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    };

    const enterHandler = () => {
      selectItem(selectedIndex);
    };

    // Scroll selected item into view
    useEffect(() => {
      if (listRef.current) {
        const selectedElement = listRef.current.querySelector(
          `[data-index="${selectedIndex}"]`
        ) as HTMLElement;
        if (selectedElement) {
          selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    }, [selectedIndex]);

    // Reset index when items change
    useEffect(() => {
      setSelectedIndex(0);
    }, [items]);

    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }: { event: KeyboardEvent }) => {
        if (event.key === "ArrowUp") {
          upHandler();
          return true;
        }
        if (event.key === "ArrowDown") {
          downHandler();
          return true;
        }
        if (event.key === "Enter" || event.key === "Tab") {
          enterHandler();
          return true;
        }
        return false;
      },
    }));

    if (items.length === 0) {
      return null;
    }

    return (
      <CommandComponent
        className={cn(
          "w-64 bg-white border border-gray-200 shadow-md rounded-md z-50 text-right direction-rtl",
          className
        )}
        dir="rtl"
      >
        <CommandList ref={listRef} className="max-h-60 overflow-y-auto p-1">
          <div className="px-2 py-1.5 text-[11px] font-semibold text-gray-400 border-b border-gray-100 mb-1">
            اقتراحات المصطلحات (اضغط Enter)
          </div>
          <CommandGroup>
            {items.map((item, index) => {
              const isSelected = index === selectedIndex;
              const isTopUsed = index === 0 && (item.usageCount ?? 0) > 10;

              return (
                <CommandItem
                  key={`${item.arabic}-${item.english}`}
                  value={`${item.arabic} ${item.english}`}
                  onSelect={() => selectItem(index)}
                  data-index={index}
                  className={cn(
                    "flex items-center justify-between p-2 text-sm text-foreground cursor-pointer rounded hover:bg-gray-100",
                    isSelected && "bg-gray-100 text-foreground"
                  )}
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="font-medium text-gray-900">{item.arabic}</span>
                    <span className="text-xs text-gray-400 font-mono">
                      ({item.english})
                    </span>
                  </div>
                  {isTopUsed && (
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-medium flex-shrink-0 mr-2">
                      شائع
                    </span>
                  )}
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandComponent>
    );
  }
);

TermAutocompleteList.displayName = "TermAutocompleteList";

export default TermAutocompleteList;
