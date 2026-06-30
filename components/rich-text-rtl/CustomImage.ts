import Image from '@tiptap/extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { ImageBlock } from './ImageBlock';

export const CustomImage = Image.extend({
  addNodeView() {
    return ReactNodeViewRenderer(ImageBlock);
  },
  
  // Make sure to disable inline so it behaves like a block element (like WordPress)
  inline() {
    return false;
  },
  group() {
    return 'block';
  }
});
