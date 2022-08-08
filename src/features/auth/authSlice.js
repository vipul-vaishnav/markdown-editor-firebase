import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const createNewUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  const { email, password } = formData;

  try {
    const res = await authService.registerUser(email, password);
    return { email: res.user.email, displayName: res.user.displayName, uid: res.user.uid };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginExistingUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  const { email, password } = formData;

  try {
    const res = await authService.loginUser(email, password);
    return { email: res.user.email, displayName: res.user.displayName, uid: res.user.uid };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const checkUserStatus = createAsyncThunk('auth/checkAuth', () => {
  authService.checkAuthStatus();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'User Registered Successfully!';
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(loginExistingUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginExistingUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'User LoggedIn Successfully';
      })
      .addCase(loginExistingUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(checkUserStatus.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(checkUserStatus.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      });
  },
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;