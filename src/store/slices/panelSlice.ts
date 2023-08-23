import { createSlice } from '@reduxjs/toolkit';

interface PanelState {
  isOpen: boolean;
}

const initialState : PanelState = {
  isOpen: true,
};

export const panelSlice = createSlice({
    name: 'panelReducer',
    initialState,
    reducers: {
      togglePanel: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
});

export const { togglePanel } = panelSlice.actions;

export default panelSlice.reducer;