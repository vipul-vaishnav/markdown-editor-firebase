import React from 'react';
import EditorHeader from '../components/EditorHeader.jsx';
import EditorMain from '../components/EditorMain.jsx';

const Editor = () => {
  return (
    <div className="w-full h-full max-h-screen overflow-hidden">
      <EditorHeader />
      <EditorMain />
    </div>
  );
};

export default Editor;
