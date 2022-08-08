import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../firebase.js';

const Editor = () => {
  return (
    <div>
      Editor : {auth.currentUser?.email}
      <h1>USERNAME: {auth.currentUser?.displayName || 'User'}</h1>
      <Link
        to={`/user/${auth.currentUser.uid}/profile`}
        className="flex items-center justify-center w-full gap-3 mt-6 text-sm font-bold tracking-widest uppercase transition-all duration-150 ease-linear bg-white border-2 rounded sm:text-lg h-14 border-back text-back hover sm:gap-4"
      >
        Go to Profile
      </Link>
    </div>
  );
};

export default Editor;
