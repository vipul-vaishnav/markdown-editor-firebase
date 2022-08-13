import React from 'react';
import MenuIcon from './../icons/MenuIcon';
import DocumentIcon from './../icons/DocumentIcon';
import TrashIcon from './../icons/TrashIcon';
import SaveIcon from './../icons/SaveIcon';
import { Link } from 'react-router-dom';

const EditorHeader = ({ setShowSidebar, setDeleteConfirm }) => {
  return (
    <header className="flex items-center justify-between w-full pr-4 md:pr-6 h-14 md:h-20 bg-primary">
      <div className="flex items-center h-full">
        <div className="grid w-20 h-full bg-back place-content-center">
          <button
            onClick={() => {
              setShowSidebar(true);
            }}
            className="text-secondary"
          >
            <MenuIcon />
          </button>
        </div>
        <h1 className="hidden px-6 border-r border-white md:block">
          <Link to="/" className="font-mono text-3xl font-extrabold uppercase">
            Markdown
          </Link>
        </h1>
        <div className="flex items-center gap-2 pl-4 md:pl-6 md:gap-4">
          <div>
            <DocumentIcon />
          </div>
          <div>
            <h2 className="hidden text-gray-500 md:block">Document Name</h2>
            <h2>Untitled</h2>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div>
          <button onClick={() => setDeleteConfirm(true)} className="transition-all duration-150 hover:text-secondary">
            <TrashIcon />
          </button>
        </div>
        <div>
          <button className="flex items-center justify-center w-full h-10 gap-0 px-3 font-bold tracking-widest text-white uppercase transition-all duration-150 ease-linear rounded md:px-4 md:gap-4 md:h-12 bg-secondary hover:opacity-80">
            <SaveIcon />
            <span className="hidden md:block">Save Changes</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default EditorHeader;
