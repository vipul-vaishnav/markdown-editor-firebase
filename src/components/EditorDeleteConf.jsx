import React from 'react';
import TrashIcon from './../icons/TrashIcon';

const EditorDeleteConf = ({ setDeleteConfirm, lightMode }) => {
  const handleClick = () => setDeleteConfirm(false);

  return (
    <div
      className={`absolute z-20 w-full max-w-xs p-5 transition-all duration-150 ease-in -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md sm:max-w-sm top-1/2 left-1/2 bg-${
        lightMode ? 'white' : 'primary'
      }`}
    >
      <h2 className="mb-5 text-xl font-bold text-secondary">Delete this document?</h2>
      <p className={`${lightMode ? 'text-gray-600' : 'text-white'}`}>
        Are you sure you want to delete this document? This action cannot be reversed.
      </p>
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-full gap-3 py-3 mt-6 text-lg font-bold tracking-widest text-white uppercase transition-all duration-150 ease-in border-2 rounded-md border-secondary bg-secondary hover:opacity-70"
      >
        <TrashIcon />
        <span>Confirm & Delete</span>
      </button>
    </div>
  );
};

export default EditorDeleteConf;
