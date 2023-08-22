import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./reducers/panelSlice";
import educationReducer from "./reducers/educationSlice";

const store = configureStore({
  reducer: {
    panelReducer,
    educationReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;