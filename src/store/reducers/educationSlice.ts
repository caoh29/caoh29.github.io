import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TimeLineProps } from '../../types';

interface EducationState {
  content: TimeLineProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState : EducationState = {
  content: [],
  isLoading: false,
  error: null
};

export const fetchTimelineData = createAsyncThunk('fetchTimelineData', async (apiURL : string) => {
  const response = await fetch(apiURL);
  return response.json();
});

export const educationSlice = createSlice({
  name: 'educationReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimelineData.pending, (state) => {
        state.isLoading =  true;
        state.error = null;
      })
      .addCase(fetchTimelineData.fulfilled, (state, action) => {
        state.content = action.payload;
        state.isLoading =  false;
        state.error = null;
      })
      .addCase(fetchTimelineData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Something went wrong; please review your server connection!';
      })
  }
});

export default educationSlice.reducer;