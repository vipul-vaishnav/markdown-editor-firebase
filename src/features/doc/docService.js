import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

// Add new document
const addNewDoc = async (payload) => {
  const colRef = collection(db, 'DOCS');
  const docRef = await addDoc(colRef, { ...payload, createdAt: serverTimestamp() });
  return docRef;
};

// Get all docs of logged in user
const getAllDocs = async (userRef) => {
  const colRef = collection(db, 'DOCS');
  const q = query(colRef, where('userRef', '==', userRef));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};

const docService = {
  addNewDoc,
  getAllDocs,
};

export default docService;
