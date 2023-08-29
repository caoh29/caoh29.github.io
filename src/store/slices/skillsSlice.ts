import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SkillsProps } from '../../types';

export interface SkillsState {
  data: SkillsProps[];
  isLoading: boolean;
  error: string | null;
  isFormOpen: boolean;
}

const initialState : SkillsState = {
  data: [],
  isLoading: false,
  error: null,
  isFormOpen: false
};

export const fetchSkillsData = createAsyncThunk('fetchSkillsData', async (apiURL : string, {rejectWithValue}) => {
  try {
    const response = await fetch(apiURL);
    return response.json();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const postSkillsData = createAsyncThunk(
  'postSkillsData',
  async ({ apiURL, data }: { apiURL: string; data: SkillsProps }, {rejectWithValue}) => {
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

export const skillsSlice = createSlice({
  name: 'skillsReducer',
  initialState,
  reducers: {
    toggleSkillsForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkillsData.pending, (state) => {
        state.isLoading =  true;
        state.error = null;
      })
      .addCase(fetchSkillsData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading =  false;
        state.error = null;
      })
      .addCase(fetchSkillsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Something went wrong; please review your server connection!';
      })
      .addCase(postSkillsData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postSkillsData.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postSkillsData.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to post data; please check your input and server connection.';
      });
  }
});

export const { toggleSkillsForm } = skillsSlice.actions;

export default skillsSlice.reducer;