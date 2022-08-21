import React, { useState, useEffect } from 'react';
import PlusIcon from './../icons/PlusIcon';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import { addNewDocumentInDB, clearState } from './../features/doc/docSlice';

const EditorWindow = ({ setWindow, lightMode }) => {
  const [name, setName] = useState('');
  const { isSuccess, isError, isLoading, message } = useSelector((state) => state.doc);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name.trim().length === 0) {
      toast.error('Enter a name for the document');
      return;
    }
    dispatch(addNewDocumentInDB({ name, userRef: user?.uid, isStarred: false }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      setWindow(false);
    }

    if (isError) {
      toast.error(message);
    }

    dispatch(clearState());
  }, [isSuccess, isError, message, dispatch, setWindow]);

  return (
    <div
      className={`absolute z-20 w-full max-w-xs p-5 transition-all duration-150 ease-in -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md sm:max-w-sm top-1/2 left-1/2 bg-${
        lightMode ? 'white' : 'primary'
      }`}
    >
      <h2 className="mb-5 text-xl font-bold text-secondary">Create a new document</h2>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className={`font-bold tracking-wider uppercase ${lightMode ? 'text-gray-600' : 'text-white'}`}
        >
          Document Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full px-2 py-3 my-6 mb-4 text-lg border-2 rounded-md outline-none border-secondary text-back"
          placeholder="Type here..."
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="flex items-center justify-center w-full gap-3 py-3 text-lg font-bold tracking-widest text-white uppercase transition-all duration-150 ease-in border-2 rounded-md border-secondary bg-secondary hover:opacity-70">
          {isLoading ? <Loader /> : <PlusIcon />}
          <span>Create</span>
        </button>
      </form>
    </div>
  );
};

export default EditorWindow;
