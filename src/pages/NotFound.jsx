import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="px-6 pt-6 lg:px-12">
      <h1 className="font-mono font-extrabold text-center sm:text-9xl text-7xl">Oops!</h1>
      <p className="my-6 mt-12 text-lg font-bold sm:text-center">We can't seem to find the page you're looking for.</p>
      <p className="my-6 text-lg font-bold tracking-widest uppercase sm:text-center">
        Error Code: <span className="text-red-500">404</span>
      </p>
      <p className="sm:max-w-xs sm:mx-auto">Here are some userful links instead:</p>
      <ul className="sm:max-w-xs sm:mx-auto">
        <li className="my-3">
          <Link to="/" className="font-bold text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        <li className="my-3">
          <Link to="/login" className="font-bold text-blue-500 hover:underline">
            Login
          </Link>
        </li>
        <li className="my-3">
          <Link to="/register" className="font-bold text-blue-500 hover:underline">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
