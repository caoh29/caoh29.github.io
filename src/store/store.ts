import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./reducers/togglePanelSlice";

const store = configureStore({
  reducer: {
    panelReducer: panelReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;