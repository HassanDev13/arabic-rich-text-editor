import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

function getDirection(text: string): 'rtl' | 'ltr' | null {
  // Prevent flipping direction while typing a slash command (e.g. "/h")
  // Flipping the direction appends a transaction which aborts the Tiptap Suggestion menu.
  if (text.startsWith('/')) return null

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    // Check for Arabic characters
    if (/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(char)) return 'rtl'
    // Check for English/Latin characters
    if (/[a-zA-Z]/.test(char)) return 'ltr'
  }
  return null
}

export const AutoDirection = Extension.create({
  name: 'autoDirection',

  addGlobalAttributes() {
    return [
      {
        types: [
          'paragraph', 'heading', 'bulletList', 'orderedList', 
          'taskList', 'blockquote', 'table', 'taskItem', 'listItem'
        ],
        attributes: {
          dir: {
            default: 'rtl', // default to rtl for this Arabic editor
            parseHTML: element => element.getAttribute('dir'),
            renderHTML: attributes => {
              if (attributes.dir) {
                return { dir: attributes.dir }
              }
              return { dir: 'rtl' }
            },
          },
        },
      },
    ]
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('autoDirection') as any,
        appendTransaction: (transactions, oldState, newState) => {
          const docChanges = transactions.some(transaction => transaction.docChanged)
          if (!docChanges) return

          let tr = newState.tr
          let modified = false

          const supportedTypes = ['paragraph', 'heading', 'bulletList', 'orderedList', 'taskList', 'blockquote', 'taskItem', 'listItem']

          newState.doc.descendants((node, pos) => {
            if (node.isBlock && supportedTypes.includes(node.type.name)) {
              const text = node.textContent
              let dir = getDirection(text)
              
              // If neutral or empty, fallback to rtl
              if (!dir) {
                dir = 'rtl'
              }

              if (node.attrs.dir !== dir) {
                tr.setNodeMarkup(pos, null, { ...node.attrs, dir })
                modified = true
              }
            }
            return true
          })

          if (modified) {
            return tr
          }
        },
      }) as any,
    ]
  },
})
