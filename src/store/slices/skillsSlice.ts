import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SkillsProps } from '../../types';

interface SkillsState {
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

export const fetchSkillsData = createAsyncThunk('fetchSkillsData', async (apiURL : string) => {
  const response = await fetch(apiURL);
  return response.json();
});

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
  }
});

export const { toggleSkillsForm } = skillsSlice.actions;

export default skillsSlice.reducer;