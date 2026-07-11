import { Heading } from '@tiptap/extension-heading'
import { Plugin, PluginKey, TextSelection } from '@tiptap/pm/state'

export const CustomHeading = Heading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      collapsed: {
        default: false,
        parseHTML: element => element.getAttribute('data-collapsed') === 'true',
        renderHTML: attributes => {
          if (!attributes.collapsed) return { 'data-collapsed': 'false', class: 'collapsible-heading' }
          return { 'data-collapsed': 'true', class: 'collapsible-heading collapsed' }
        },
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      ...this.parent?.(),
      Enter: ({ editor }) => {
        const { state } = editor
        const { selection } = state
        const { $from, empty } = selection

        if (!empty || $from.parent.type.name !== this.name) {
          return false
        }

        const isAtStart = $from.parentOffset === 0

        if (isAtStart) {
          return editor.chain().command(({ tr, dispatch }) => {
            if (dispatch) {
              const node = state.schema.nodes.paragraph.create()
              tr.insert($from.before(), node)
            }
            return true
          }).scrollIntoView().run()
        }

        return editor.chain().command(({ tr, dispatch }) => {
          if (dispatch) {
            tr.split($from.pos, 1, [{ type: state.schema.nodes.paragraph }])
          }
          return true
        }).scrollIntoView().run()
      },
    }
  },

  addProseMirrorPlugins() {
    const parentPlugins = this.parent?.() || []
    
    const clickPlugin = new Plugin({
      key: new PluginKey('headingClick') as any,
      props: {
        handleDOMEvents: {
          mousedown: (view, event) => {
            const target = event.target as HTMLElement;
            if (!target) return false;

            const heading = target.closest('.collapsible-heading') as HTMLElement;
            if (!heading) return false;

            const rect = heading.getBoundingClientRect();
            const clickX = event.clientX;
            const dir = window.getComputedStyle(heading).direction;
            let isClickOnArrow = false;
            
            if (dir === 'rtl') {
               // Arrow is on the right side
               isClickOnArrow = (rect.right - clickX <= 35 && rect.right - clickX >= -10);
            } else {
               // Arrow is on the left side
               isClickOnArrow = (clickX - rect.left <= 35 && clickX - rect.left >= -10);
            }
            
            if (isClickOnArrow) {
               event.preventDefault();
              
              const pos = view.posAtDOM(heading, 0);
              if (pos < 0) return false;
              
              const $pos = view.state.doc.resolve(pos);
              if ($pos.depth === 0) return false;
              
              const nodePos = $pos.before();
              const headingNode = view.state.doc.nodeAt(nodePos);
              
              if (headingNode && headingNode.type.name === 'heading') {
                const isCollapsed = !headingNode.attrs.collapsed;
                const level = headingNode.attrs.level;
                
                const tr = view.state.tr;
                tr.setNodeMarkup(nodePos, null, {
                  ...headingNode.attrs,
                  collapsed: isCollapsed
                });
                
                // Hide/Unhide subsequent blocks natively
                let currentPos = nodePos + headingNode.nodeSize;
                let skipUntilLevel: number | null = null;
                
                while (currentPos < tr.doc.content.size) {
                  const node = tr.doc.nodeAt(currentPos);
                  if (!node) break;
                  
                  if (node.type.name === 'heading') {
                    if (node.attrs.level <= level) break; // Stop at next heading of same or higher level
                    
                    if (!isCollapsed) {
                       if (skipUntilLevel !== null && node.attrs.level <= skipUntilLevel) {
                         skipUntilLevel = null;
                       }
                       
                       if (skipUntilLevel === null) {
                         tr.setNodeMarkup(currentPos, null, { ...node.attrs, hidden: false });
                         if (node.attrs.collapsed) {
                           skipUntilLevel = node.attrs.level;
                         }
                       }
                    } else {
                       tr.setNodeMarkup(currentPos, null, { ...node.attrs, hidden: true });
                    }
                  } else {
                    if (isCollapsed) {
                      tr.setNodeMarkup(currentPos, null, { ...node.attrs, hidden: true });
                    } else {
                      if (skipUntilLevel === null) {
                        tr.setNodeMarkup(currentPos, null, { ...node.attrs, hidden: false });
                      }
                    }
                  }
                  
                  currentPos += node.nodeSize;
                }
                
                // Set cursor to the end of the clicked heading to prevent unwanted jumping/scrolling
                const endPos = nodePos + headingNode.nodeSize - 1;
                tr.setSelection(TextSelection.create(tr.doc, endPos));
                
                view.dispatch(tr);
                return true;
              }
            }
            return false;
          }
        }
      }
    });

    return [...parentPlugins, clickPlugin as any]
  }
})
