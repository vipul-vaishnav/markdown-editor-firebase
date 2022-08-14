import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileBg from './../images/profile-bg.avif';
import { useSelector, useDispatch } from 'react-redux';
import { clearState, updateProfileName } from './../features/auth/authSlice';
import Loader from './../components/Loader';
import { toast } from 'react-toastify';
import List from '../components/List';

const Details = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  const [name, setName] = useState(user && user.displayName ? user.displayName : '');
  const [email] = useState(user && user.email ? user.email : '');
  const [uid] = useState(user && user.uid ? user.uid : '');

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfileName({ newName: name, userID: user?.docID }));
  };

  useEffect(() => {
    if (user && isSuccess) {
      toast.success(message);
    }

    if (isError) {
      toast.error(message);
    }

    dispatch(clearState());
  }, [isSuccess, isError, dispatch, message, user]);

  return (
    <div className="flex flex-col lg:gap-6 gap-16 px-4 py-6 lg:flex-row sm:px-6 lg:px-12">
      <div className="w-full lg:max-w-sm">
        <div className="relative w-full mx-auto mb-0 bg-primary">
          <img src={ProfileBg} alt="profile-background" className="w-full rounded-t-xl h-36 sm:h-40 lg:h-48" />
          <div className="absolute grid w-24 h-24 text-4xl font-extrabold -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full shadow-md sm:text-5xl sm:w-32 sm:h-32 top-100 left-1/2 place-content-center text-back">
            <span>{name && name.trim().length > 0 ? name[0].toUpperCase() : 'U'}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full p-6 pt-16 mx-auto bg-white rounded-b-md">
          <div className="mb-6">
            <label htmlFor="name" className="inline-block mb-2 text-xl text-gray-700 form-label">
              Name
            </label>
            <input
              className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label className="inline-block mb-2 text-xl text-gray-700 form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-gray-100 bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="email"
              name="email"
              id="email"
              value={email}
              autoComplete="off"
              aria-label="Disabled input example"
              disabled
            />
          </div>
          <div className="mb-6">
            <label className="inline-block mb-2 text-xl text-gray-700 form-label" htmlFor="uid">
              Uid
            </label>
            <input
              className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-gray-100 bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="text"
              name="uid"
              id="uid"
              value={uid}
              autoComplete="off"
              aria-label="Disabled input example"
              disabled
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full gap-3 mt-6 text-sm font-bold tracking-widest text-white uppercase transition-all duration-150 ease-linear border-2 rounded bg-back sm:text-lg h-14 border-back sm:gap-4 hover:text-back hover:bg-white"
          >
            {isLoading && <Loader />}
            Save
          </button>
        </form>
        <Link
          to={`/user/${user?.uid}/editor/`}
          className="grid w-full mt-6 text-lg font-bold tracking-wider uppercase bg-blue-500 rounded place-content-center h-14 hover:opacity-80"
        >
          Go to Editor
        </Link>
      </div>
      <div className="w-full">
        <List />
      </div>
    </div>
  );
};

export default Details;
