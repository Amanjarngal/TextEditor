// src/App.js
import React from 'react';
import Editor from './Editor.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Text Editor</h1>
      <Editor />
    </div>
  );
};

export default App;