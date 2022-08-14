import { useState, useEffect } from 'react';
import { auth, db } from './../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from './../features/auth/authSlice';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, 'USERS'), where('uid', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const uids = [];
        querySnapshot.forEach((doc) => {
          uids.push(doc.id);
        });
        const payload = { email: user.email, displayName: user.displayName, uid: user.uid, docID: uids[0] };
        localStorage.setItem('mdUser', JSON.stringify(payload));
        dispatch(setUser(payload));
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  });

  return { loggedIn, checkingStatus };
};
