import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';

// REGISTER
const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// UPDATEPROFILE
const updateDisplayName = async (name) => {
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
};

// LOGIN
const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
const logoutUser = async () => {
  return await signOut(auth);
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
  updateDisplayName,
};

export default authService;
