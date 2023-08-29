import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TimeLineProps } from '../../types';

export interface EducationState {
  content: TimeLineProps[];
  isLoading: boolean;
  error: string | null;
  isFormOpen: boolean;
}

const initialState : EducationState = {
  content: [],
  isLoading: false,
  error: null,
  isFormOpen: false,
};

export const fetchTimelineData = createAsyncThunk('fetchTimelineData', async (apiURL : string, {rejectWithValue}) => {
  try {
    const response = await fetch(apiURL);
    return response.json();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postTimelineData = createAsyncThunk(
  'postTimelineData',
  async ({ apiURL, data }: { apiURL: string; data: TimeLineProps }, {rejectWithValue}) => {
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const educationSlice = createSlice({
  name: 'educationReducer',
  initialState,
  reducers: {
    toggleEducationForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
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
      .addCase(postTimelineData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postTimelineData.fulfilled, (state, action) => {
        state.content.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postTimelineData.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to post data; please check your input and server connection.';
      });
  }
});

export const { toggleEducationForm } = educationSlice.actions;

export default educationSlice.reducer;