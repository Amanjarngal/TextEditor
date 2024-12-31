# Rich Text Editor with TipTap

This project implements a rich text editor using the TipTap library with various formatting options and a customizable toolbar. The editor includes features like bold, italic, underline, text alignment, highlight, undo/redo, bullet/ordered lists, paragraph formatting, and headings (H1, H2, H3).

## Features

- **Text Formatting:**
  - Bold
  - Italic
  - Underline
  - Highlight
- **Text Alignment:**
  - Align Left
  - Align Center
  - Align Right
  - Justify
- **Lists:**
  - Bullet List
  - Ordered List
- **Headings:**
  - H1
  - H2
  - H3
- **Paragraph Formatting:**
  - Paragraph style
- **Undo/Redo**

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.

## Usage

1. Open the editor in your browser.
2. Use the toolbar to format text, align content, create lists, or add headings.
3. Type directly into the editor content area.

## Code Overview

### Main Components

- **Editor.jsx:** The main editor component, which initializes the TipTap editor and defines the toolbar buttons.
- **Editor.css:** Styles for the editor and toolbar.

### Key Libraries Used

- [@tiptap/react](https://www.tiptap.dev/): Core library for the editor.
- [@tiptap/starter-kit](https://www.tiptap.dev/api/starter-kit): Provides basic editor functionality.
- [@tiptap/extension-highlight](https://www.tiptap.dev/api/extensions/highlight): Adds text highlighting functionality.
- [@tiptap/extension-text-align](https://www.tiptap.dev/api/extensions/text-align): Adds text alignment options.
- [FontAwesome](https://fontawesome.com/): Used for toolbar icons.

### Adding Toolbar Buttons

To add new buttons:

1. Import the necessary FontAwesome icon:
   ```jsx
   import { faNewIcon } from '@fortawesome/free-solid-svg-icons';
   ```

2. Add a button in the toolbar with the appropriate editor command:
   ```jsx
   <button onClick={() => editor.chain().focus().newCommand().run()}>
     <FontAwesomeIcon icon={faNewIcon} />
     New Feature
   </button>
   ```

### Styling

Modify `Editor.css` to customize the editor's appearance and toolbar layout.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [TipTap Documentation](https://www.tiptap.dev/)
- [FontAwesome Icons](https://fontawesome.com/)
