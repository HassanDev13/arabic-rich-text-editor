"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  Command as CommandComponent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { SlashCommandListProps } from "./types";



export interface SlashCommandListRef {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean;
}

const SlashCommandList = forwardRef<SlashCommandListRef, SlashCommandListProps>(
  (
    {
      items,
      command,
      className,
      inputPlaceholder = "ابحث عن أمر...",
      emptyMessage = "لا توجد نتائج",
    },
    ref
  ) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const listRef = useRef<HTMLDivElement>(null); // Ref for CommandList

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

    // Scroll the selected item into view
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
        if (event.key === "Enter") {
          enterHandler();
          return true;
        }
        return false;
      },
    }));

    return (
      <CommandComponent
        className={cn(
          "w-64  bg-white border border-gray-200",
          className
        )}
      >
        <CommandInput
          placeholder={inputPlaceholder}
          className="border-b border-gray-200 bg-gray-50 text-foreground placeholder-gray-400 text-sm p-2"
        />
        <CommandList ref={listRef} className="max-h-60 overflow-y-auto">
          <CommandEmpty className="p-2 text-sm text-gray-500">
            {emptyMessage}
          </CommandEmpty>
          <CommandGroup>
            {items.map((item, index) => (
              <CommandItem
                key={index}
                value={item.title} // Unique value for shadcn Command
                onSelect={() => selectItem(index)}
                data-index={index} // Custom attribute for scrolling
                className={cn(
                  "flex items-center gap-2 p-2 text-sm text-foreground cursor-pointer hover:bg-gray-100",
                  index === selectedIndex && "bg-gray-100 text-foreground"
                )}
              >
                {item.icon && <span>{item.icon}</span>}
                <div>
                  <div>{item.title}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500">{item.description}</div>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandComponent>
    );
  }
);

SlashCommandList.displayName = "SlashCommandList";

export default SlashCommandList;