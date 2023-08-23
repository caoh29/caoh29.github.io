import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SkillsProps } from '../../types';

interface SkillsState {
  data: SkillsProps[];
  isLoading: boolean;
  error: string | null;
}

const initialState : SkillsState = {
  data: [],
  isLoading: false,
  error: null
};

export const fetchSkillsData = createAsyncThunk('fetchSkillsData', async (apiURL : string) => {
  const response = await fetch(apiURL);
  return response.json();
});

export const skillsSlice = createSlice({
  name: 'skillsReducer',
  initialState,
  reducers: {},
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

export default skillsSlice.reducer;