// src/extensions/Highlight.js
import { Mark } from '@tiptap/core';

const Highlight = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      color: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[style]',
        getAttrs: (node) => {
          const color = node.style.backgroundColor;
          return color ? { color } : false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { ...HTMLAttributes, style: `background-color: ${HTMLAttributes.color}` }, 0];
  },

  addCommands() {
    return {
      toggleHighlight:
        (color) =>
        ({ commands }) => {
          return commands.toggleMark(this.name, { color });
        },
    };
  },
});

export default Highlight;
