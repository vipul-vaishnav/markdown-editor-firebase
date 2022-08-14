import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import docService from './docService';

const initialState = {
  docs: [],
  doc: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

// Add new document
export const addNewDocumentInDB = createAsyncThunk('doc/addNew', async (data, thunkAPI) => {
  try {
    const res = await docService.addNewDoc(data);
    if (res) return { ...data, docID: res.id };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getDocsFromDB = createAsyncThunk('doc/getAll', async (userRef, thunkAPI) => {
  try {
    const docs = await docService.getAllDocs(userRef);
    const docsArr = [];
    const convertTimestamp = (timestamp) => {
      const fireBaseTime = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000).toString();
      return fireBaseTime;
      // const day =
      //   fireBaseTime.getDate() < 10
      //     ? `0${fireBaseTime.getDate()}`
      //     : fireBaseTime.getDate();
      // const month =
      //   fireBaseTime.getMonth() < 10
      //     ? `0${fireBaseTime.getMonth()}`
      //     : fireBaseTime.getMonth();
      // const year = fireBaseTime.getFullYear();

      // return `${day}-${month}-${year}`;
    };
    docs.forEach((doc) => docsArr.push({ ...doc.data(), _id: doc.id }));

    return docsArr.map((doc) => {
      return { ...doc, createdAt: convertTimestamp(doc.createdAt) };
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const docSlice = createSlice({
  name: 'doc',
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewDocumentInDB.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addNewDocumentInDB.fulfilled, (state, action) => {
        state.doc = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Document Created Successfully!';
      })
      .addCase(addNewDocumentInDB.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'Something went wrong!';
      })
      .addCase(getDocsFromDB.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getDocsFromDB.fulfilled, (state, action) => {
        state.docs = action.payload;
        state.isLoading = false;
      })
      .addCase(getDocsFromDB.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'Something went wrong!';
      });
  },
});

export const { clearState } = docSlice.actions;

export default docSlice.reducer;
