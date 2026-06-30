import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { TablePlaceholderBlock } from './TablePlaceholderBlock';

export const TablePlaceholder = Node.create({
  name: 'tablePlaceholder',
  group: 'block',
  atom: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="table-placeholder"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'table-placeholder' })];
  },

  addNodeView() {
    return ReactNodeViewRenderer(TablePlaceholderBlock);
  },
  
});
