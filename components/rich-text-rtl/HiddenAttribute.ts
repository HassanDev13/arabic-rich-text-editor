import { Extension } from '@tiptap/core'

export const HiddenAttribute = Extension.create({
  name: 'hiddenAttribute',
  
  addGlobalAttributes() {
    return [
      {
        types: [
          'paragraph', 'heading', 'bulletList', 'orderedList', 
          'taskList', 'blockquote', 'table', 
          'horizontalRule', 'image', 'figure', 'taskItem', 'listItem'
        ],
        attributes: {
          hidden: {
            default: false,
            parseHTML: element => element.classList.contains('hidden'),
            renderHTML: attributes => {
              if (attributes.hidden) {
                return { class: 'hidden' }
              }
              return {}
            },
          },
        },
      },
    ]
  },
})
