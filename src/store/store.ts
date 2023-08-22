import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./reducers/togglePanelSlice";
import fetchTimelineReducer from "./reducers/fetchTimelineSlice";

const store = configureStore({
  reducer: {
    panelReducer,
    fetchTimelineReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;