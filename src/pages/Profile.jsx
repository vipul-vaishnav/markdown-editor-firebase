import React from 'react';
import { auth } from '../firebase';

const Profile = () => {
  return <div>Profile: {auth.currentUser?.email}</div>;
};

export default Profile;
