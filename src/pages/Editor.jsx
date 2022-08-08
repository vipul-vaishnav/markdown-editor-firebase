import React from 'react';
import { auth } from './../firebase.js';

const Editor = () => {
  console.log(auth.currentUser);
  return <div>Editor : {auth.currentUser?.email}</div>;
};

export default Editor;
