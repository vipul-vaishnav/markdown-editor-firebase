import React, { useEffect } from 'react';
import CloseIcon from './../icons/CloseIcon';
import { Link, useNavigate } from 'react-router-dom';
import PlusIcon from './../icons/PlusIcon';
import HomeIcon from './../icons/HomeIcon';
import YouIcon from './../icons/YouIcon';
import LogoutIcon from './../icons/LogoutIcon';
import { useSelector, useDispatch } from 'react-redux';
import Toggle from './Toggle';
import MoonIcon from './../icons/MoonIcon';
import SunIcon from './../icons/SunIcon';
import { signOutLoggedInUser, clearState } from './../features/auth/authSlice';
import { toast } from 'react-toastify';

const EditorSidebar = ({ setShowSidebar, showSidebar, setLightMode, lightMode }) => {
  const { user, isSuccess, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignout = () => {
    dispatch(signOutLoggedInUser());
  };

  useEffect(() => {
    if (isSuccess && !user) {
      toast.success(message);
      navigate('/');
    }
    dispatch(clearState());
  }, [isSuccess, message, user, navigate, dispatch]);

  return (
    <div
      className={`fixed h-screen bg-tertiary w-64 top-0 ${
        showSidebar ? 'left-0' : '-left-full'
      } shadow-lg shadow-primary overflow-auto transition-all duration-200 ease-linear`}
    >
      {/* close button */}
      <button
        onClick={() => setShowSidebar(false)}
        className="bg-secondary text-white md:h-20 h-14 w-full flex items-center justify-center gap-5 text-lg font-bold tracking-widest uppercase transition-all duration-150 ease-linear hover:text-back hover:bg-white"
      >
        <CloseIcon />
        <span>Close</span>
      </button>
      {/* New Button */}
      <div className="my-4">
        <h1 className="px-5">
          <Link to="/" className="text-lg font-bold tracking-widest text-gray-500 uppercase">
            Markdown
          </Link>
        </h1>
        <div className="px-5 mt-4">
          <button className="flex items-center justify-center w-full h-10 px-3 font-bold tracking-widest text-white uppercase transition-all duration-150 ease-linear rounded gap-2 md:h-12 bg-secondary hover:opacity-80">
            <PlusIcon />
            <span>New Document</span>
          </button>
        </div>
      </div>
      <hr />
      {/* Navbar */}
      <div className="my-4 mx-6">
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className="flex py-3 hover:bg-secondary text-white items-center justify-start gap-4 text-lg px-4 rounded w-full"
              >
                <HomeIcon /> Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to={`/user/${user?.id}/details`}
                className="flex items-center py-3 justify-start gap-4 text-lg w-full hover:bg-secondary text-white px-4 rounded"
              >
                <YouIcon /> You
              </Link>
            </li>
            <li>
              <button
                onClick={onSignout}
                className="flex items-center py-3 justify-start gap-4 text-lg w-full hover:bg-secondary text-white px-4 rounded"
              >
                <LogoutIcon /> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* Toggle */}
      <div className="flex justify-start items-center gap-4 left-0 bottom-10 px-4 mx-6 absolute">
        <div>
          <MoonIcon />
        </div>
        <Toggle setLightMode={setLightMode} lightMode={lightMode} />
        <div>
          <SunIcon />
        </div>
      </div>
    </div>
  );
};

export default EditorSidebar;
