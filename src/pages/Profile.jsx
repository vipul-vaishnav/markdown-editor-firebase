import React from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      Profile: {auth.currentUser?.email}
      <Link
        to={`/user/${auth.currentUser.uid}/editor`}
        className="flex items-center justify-center w-full gap-3 mt-6 text-sm font-bold tracking-widest uppercase transition-all duration-150 ease-linear bg-white border-2 rounded sm:text-lg h-14 border-back text-back hover sm:gap-4"
      >
        Go to Editor
      </Link>
    </div>
  );
};

export default Profile;
