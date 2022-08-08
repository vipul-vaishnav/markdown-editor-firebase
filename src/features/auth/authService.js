import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

// REGISTER
const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// AUTH STATUS
const checkAuthStatus = () => {
  onAuthStateChanged(auth, (user) => {
    return user ? user : null;
  });
};

const authService = {
  registerUser,
  loginUser,
  checkAuthStatus,
};

export default authService;
