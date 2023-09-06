import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AboutProps } from '../../types';

export interface AboutState {
  text: AboutProps[];
  isLoading: boolean;
  error: string | null;
  isFormOpen: boolean;
}

const initialState : AboutState = {
  text: [
    {
      content: 'Distinguished as a conscientious and accountable individual, demonstrating outstanding academic and interpersonal aptitude. Possesses a strong proficiency in the field of computer science, coupled with exceptional communication skills in both English and Spanish. Recognized for fostering collaborative work environments, adept problem-solving through critical thinking, and a proven ability to adapt effectively to diverse situations.'
    }
  ],
  isLoading: false,
  error: null,
  isFormOpen: false,
};

export const fetchAboutData = createAsyncThunk('fetchAboutData', async (apiURL : string, {rejectWithValue}) => {
  try {
    const response = await fetch(apiURL);
    return response.json();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postAboutData = createAsyncThunk(
  'postAboutData',
  async ({ apiURL, data }: { apiURL: string; data: AboutProps }, {rejectWithValue}) => {
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

export const aboutSlice = createSlice({
  name: 'aboutReducer',
  initialState,
  reducers: {
    toggleAboutForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.isLoading =  true;
        state.error = null;
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.text = action.payload;
        state.isLoading =  false;
        state.error = null;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Something went wrong; please review your server connection!';
      })
      .addCase(postAboutData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postAboutData.fulfilled, (state, action) => {
        state.text.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postAboutData.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to post data; please check your input and server connection.';
      });
  }
});

export const { toggleAboutForm } = aboutSlice.actions;

export default aboutSlice.reducer;