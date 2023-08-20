import { createSlice } from '@reduxjs/toolkit';

interface TogglePanelState {
  isOpen: boolean;
}

const initialState : TogglePanelState = {
  isOpen: true,
};

export const togglePanelSlice = createSlice({
    name: 'panelReducer',
    initialState,
    reducers: {
      togglePanel: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
});

export const { togglePanel } = togglePanelSlice.actions;

export default togglePanelSlice.reducer;