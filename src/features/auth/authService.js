import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';

// REGISTER
const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
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
};

export default authService;
