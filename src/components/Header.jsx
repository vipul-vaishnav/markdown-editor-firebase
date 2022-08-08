import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutLoggedInUser, clearState } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, isSuccess, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(signOutLoggedInUser());
  };

  useEffect(() => {
    if (isSuccess && !user) {
      toast.success(message);
      if (user === null) navigate('/');
    }
    dispatch(clearState());
  }, [isSuccess, message, user, navigate, dispatch]);

  return (
    <header className="flex items-center justify-between gap-4 px-4 sm:px-6 py-9 lg:px-12">
      <Link to="/">
        <span className="font-mono text-3xl font-extrabold uppercase">Markdown</span>
      </Link>
      <nav className="flex gap-3 sm:gap-8">
        {!user && (
          <>
            <Link to="/login" className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline">
              Login
            </Link>
            <Link to="/register" className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline">
              Register
            </Link>
          </>
        )}
        {user && (
          <>
            <Link
              to={`/user/${user.uid}/editor`}
              className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
            >
              Editor
            </Link>
            <Link
              to={`/user/${user.uid}/profile`}
              className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline"
            >
              Profile
            </Link>
            <button onClick={signOut} className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
