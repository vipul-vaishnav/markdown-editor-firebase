import React from 'react';

const Overlay = ({ setWindow, setDeleteConfirm }) => {
  return (
    <div
      onClick={() => {
        setWindow(false);
        setDeleteConfirm(false);
      }}
      className="absolute top-0 left-0 z-10 w-full h-full transition-all duration-150 ease-in bg-black opacity-50"
    ></div>
  );
};

export default Overlay;
