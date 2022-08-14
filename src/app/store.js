import { configureStore } from '@reduxjs/toolkit';
import authReducer from './../features/auth/authSlice';
import docReducer from './../features/doc/docSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    doc: docReducer,
  },
});
