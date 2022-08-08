import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { checkUserStatus } from './../features/auth/authSlice';
import Loader from './Loader';

const PrivateComponent = () => {
  // const { user, isLoading } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUserStatus());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
