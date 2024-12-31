import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline, faHighlighter, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify ,faUndo,faRedo,faListUl,faListOl,faParagraph,faHeading, } from '@fortawesome/free-solid-svg-icons';

import Highlight from './component/Heighlight';
import './Editor.css';

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline,
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
    ],
    content: '<p>Hello World! Try out the new toolbar features.</p>',
  });

  if (!editor) {
    return <div>Loading Editor...</div>;
  }

  const setHighlight = (color) => {
    editor.chain().focus().toggleHighlight(color).run();
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        
        <button
         onClick={() => editor.chain().focus().toggleBold().run()}> 
       <FontAwesomeIcon icon={faBold} style={{ marginRight: '5px' }} />
         Bold
         </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        <FontAwesomeIcon icon={faItalic} style={{ marginRight: '5px' }} />
          Italic
          </button>

        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <FontAwesomeIcon icon={faUnderline} style={{ marginRight: '5px' }} />
          Underline</button>

        <button onClick={() => setHighlight('#ff0')}>
        <FontAwesomeIcon icon={faHighlighter} style={{ marginRight: '5px' }} />
          Highlight Yellow</button>

        <button onClick={() => setHighlight('#0f0')}>
        <FontAwesomeIcon icon={faHighlighter} style={{ marginRight: '5px' }} />
          Highlight Green</button>

        <button onClick={() => setHighlight('#f00')}>
        <FontAwesomeIcon icon={faHighlighter} style={{ marginRight: '5px' }} />
          Highlight Red</button>

        <button onClick={() => editor.chain().focus().setParagraph().run()}>
        <FontAwesomeIcon icon={faParagraph} style={{ marginRight: '5px' }} />
          Paragraph</button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        <FontAwesomeIcon icon={faHeading} style={{ marginRight: '5px' }} />
          1</button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <FontAwesomeIcon icon={faHeading} style={{ marginRight: '5px' }} />
          2</button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <FontAwesomeIcon icon={faHeading} style={{ marginRight: '5px' }} />
          3</button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <FontAwesomeIcon icon={faListUl} style={{ marginRight: '5px' }} />
          Bullet List</button>

        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <FontAwesomeIcon icon={faListOl} style={{ marginRight: '5px' }} />
          Ordered List</button>

        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>
        <FontAwesomeIcon icon={faAlignLeft} style={{ marginRight: '5px' }} />
          Align Left</button>

        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>
        <FontAwesomeIcon icon={faAlignCenter} style={{ marginRight: '5px' }} />
          Align Center</button>

        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>
        <FontAwesomeIcon icon={faAlignRight} style={{ marginRight: '5px' }} />
          Align Right</button>

          <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
          <FontAwesomeIcon icon={faAlignJustify} style={{ marginRight: '5px' }} />
          Align Justify
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}>
        <FontAwesomeIcon icon={faUndo} style={{ marginRight: '5px' }} />
          Undo</button>

        <button onClick={() => editor.chain().focus().redo().run()}>
        <FontAwesomeIcon icon={faRedo} style={{ marginRight: '5px' }} />
          Redo</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
