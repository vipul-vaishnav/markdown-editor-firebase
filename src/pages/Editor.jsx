import React, { useState } from 'react';
import EditorHeader from '../components/EditorHeader.jsx';
import EditorMain from '../components/EditorMain.jsx';
import EditorSidebar from '../components/EditorSidebar.jsx';

const Editor = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  return (
    <div className="w-full h-full max-h-screen overflow-hidden relative">
      <EditorHeader setShowSidebar={setShowSidebar} />
      <EditorMain lightMode={lightMode} />
      <EditorSidebar
        setShowSidebar={setShowSidebar}
        setLightMode={setLightMode}
        showSidebar={showSidebar}
        lightMode={lightMode}
      />
    </div>
  );
};

export default Editor;
