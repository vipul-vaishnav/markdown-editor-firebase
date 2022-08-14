import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';

// REGISTER
const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const addNewUser = async (payload) => {
  const colRef = collection(db, 'USERS');
  return await addDoc(colRef, { ...payload, createdAt: serverTimestamp() });
};

// UPDATEPROFILE
const updateDisplayName = async (name) => {
  return await updateProfile(auth.currentUser, {
    displayName: name,
  });
};

const updateUserInDB = async (userID, name) => {
  const docRef = doc(db, 'USERS', userID);
  return await updateDoc(docRef, { displayName: name, lastUpdatedAt: serverTimestamp() });
};

// LOGIN
const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
const logoutUser = async () => {
  return await signOut(auth);
};

// Google Auth
// google sign in
const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

const authService = {
  registerUser,
  addNewUser,
  loginUser,
  logoutUser,
  updateDisplayName,
  updateUserInDB,
  googleSignIn,
};

export default authService;
