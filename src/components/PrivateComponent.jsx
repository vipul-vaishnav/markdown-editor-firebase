import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Loader from './Loader';
import { useAuthStatus } from './../hooks/useAuthStatus';

const PrivateComponent = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Loader />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComponent;
