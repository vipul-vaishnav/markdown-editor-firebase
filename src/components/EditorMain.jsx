import React, { useState, useRef } from 'react';
import EyeIcon from './../icons/EyeIcon';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const EditorMain = ({ lightMode }) => {
  const [value, setValue] = useState('# Welcome to *MARKDOWN*');
  const ref = useRef();
  const handleHeight = (e) => {
    ref.current.style.height = 'auto';
    let textAreaHeight = e.target.scrollHeight;
    ref.current.style.height = textAreaHeight + 'px';
  };

  return (
    <>
      <div className="flex items-center justify-between w-full bg-tertiary">
        <div
          className={`flex items-center  justify-between w-full h-10 px-4 font-bold tracking-widest text-left text-gray-300 uppercase md:border-r border-${
            lightMode ? 'gray-500' : 'white'
          }`}
        >
          Markdown
          <button>
            <EyeIcon />
          </button>
        </div>
        <div
          className={`items-center justify-between hidden w-full px-4 py-2 font-bold tracking-widest text-left text-gray-300 uppercase border-${
            lightMode ? 'gray-500' : 'white'
          } md:border-l md:flex`}
        >
          Preview
          <button>
            <EyeIcon />
          </button>
        </div>
      </div>

      {/* EDITOR HERE */}
      <div
        className={`flex items-start justify-between w-full md:h-[calc(100vh-7.5rem)] h-[calc(100vh-6rem)] bg-${
          lightMode ? 'white' : 'back'
        } overflow-hidden text-${lightMode ? 'back' : 'white'} transition-all duration-300 ease-linear delay-100`}
      >
        {/* MARKDOWN */}
        <div
          className={`w-full h-full px-4 py-4 overflow-x-hidden overflow-y-auto text-left border-r-0 border-${
            lightMode ? 'gray-500' : 'white'
          } md:border-r`}
        >
          <textarea
            value={value}
            className="w-full min-h-[calc(100%-1rem)] bg-transparent outline-none resize-none textarea-container"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyUp={handleHeight}
            ref={ref}
            spellCheck={false}
          />
        </div>
        {/* PREVIEW */}
        <div
          className={`hidden prose prose-a:text-blue-500 prose-headings:text-gray-900 max-w-full ${
            !lightMode && 'prose-invert prose-headings:text-white'
          } text-current w-full h-full px-4 py-4 overflow-x-hidden overflow-y-auto text-left border-l-0 border-${
            lightMode ? 'gray-500' : 'white'
          } md:border-l md:block`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{value}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default EditorMain;
