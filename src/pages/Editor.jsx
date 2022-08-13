import React, { useState } from 'react';
import EditorHeader from '../components/EditorHeader.jsx';
import EditorMain from '../components/EditorMain.jsx';
import EditorSidebar from '../components/EditorSidebar.jsx';
import EditorWindow from './../components/EditorWindow';
import Overlay from './../components/Overlay';
import EditorDeleteConf from './../components/EditorDeleteConf';

const Editor = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [window, setWindow] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  return (
    <div className="relative w-full h-full max-h-screen overflow-hidden">
      <EditorHeader setShowSidebar={setShowSidebar} setDeleteConfirm={setDeleteConfirm} />
      <EditorMain lightMode={lightMode} />
      <EditorSidebar
        setShowSidebar={setShowSidebar}
        setLightMode={setLightMode}
        showSidebar={showSidebar}
        lightMode={lightMode}
        setWindow={setWindow}
      />
      {window && <EditorWindow setWindow={setWindow} lightMode={lightMode} />}
      {deleteConfirm && <EditorDeleteConf setDeleteConfirm={setDeleteConfirm} lightMode={lightMode} />}
      {(window || deleteConfirm) && <Overlay setWindow={setWindow} setDeleteConfirm={setDeleteConfirm} />}
    </div>
  );
};

export default Editor;
