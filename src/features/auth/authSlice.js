import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const mdUser = JSON.parse(localStorage.getItem('mdUser'));

const initialState = {
  user: mdUser ? mdUser : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
  isgoogleAuth: false,
};

export const createNewUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  const { email, password, name } = formData;

  try {
    const res = await authService.registerUser(email, password);
    authService.updateDisplayName(name);
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

// sign out
export const signOutLoggedInUser = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    localStorage.removeItem('mdUser');
    await authService.logoutUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// google sign in
export const googleAuthFunc = createAsyncThunk('auth/google', async (_, thunkAPI) => {
  try {
    const res = await authService.googleSignIn();
    return [{ email: res.user.email, displayName: res.user.displayName, uid: res.user.uid }, res._tokenResponse];
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// update profile name

export const updateProfileName = createAsyncThunk('auth/updateProfileName', async (newName, thunkAPI) => {
  try {
    authService.updateDisplayName(newName);
    return newName;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },

    setUser: (state, action) => {
      state.user = action.payload;
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
      .addCase(googleAuthFunc.pending, (state, action) => {
        state.isLoading = true;
        state.isgoogleAuth = true;
      })
      .addCase(googleAuthFunc.fulfilled, (state, action) => {
        state.user = action.payload[0];
        state.isLoading = false;
        state.isSuccess = true;
        state.isgoogleAuth = false;
        state.message = action.payload[1].isNewUser ? 'User Registered Successfully' : 'User Logged In Successfully';
      })
      .addCase(googleAuthFunc.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.isgoogleAuth = false;
      })
      .addCase(signOutLoggedInUser.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccess = true;
        state.message = 'User Logged Out successfully';
      })
      .addCase(updateProfileName.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateProfileName.fulfilled, (state, action) => {
        state.user = { ...state.user, displayName: action.payload };
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Name Updated successfully';
      })
      .addCase(updateProfileName.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearState, setUser } = authSlice.actions;

export default authSlice.reducer;
