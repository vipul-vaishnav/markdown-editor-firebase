import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="px-6 py-9 lg:px-12 flex justify-between items-center">
      <Link to="/">
        <span className="text-3xl font-mono font-extrabold">Markdown</span>
      </Link>
      <nav className="flex gap-6 sm:gap-8">
        <Link to="/login" className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline">
          Login
        </Link>
        <Link to="/register" className="font-bold opacity-80 hover:opacity-100 sm:text-lg hover:underline">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Header;
