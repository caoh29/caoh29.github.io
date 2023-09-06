import { configureStore } from "@reduxjs/toolkit";
import panelReducer from "./slices/panelSlice";
import educationReducer from "./slices/educationSlice";
import skillsReducer from "./slices/skillsSlice";
import aboutReducer from "./slices/aboutSlice";

const store = configureStore({
  reducer: {
    panelReducer,
    educationReducer,
    skillsReducer,
    aboutReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;

export type AppDispatch = typeof store.dispatch;

export default store;