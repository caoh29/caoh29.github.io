// import React, { PropsWithChildren } from 'react';
// import { render } from '@testing-library/react';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';

// import type { RenderOptions } from '@testing-library/react';
// import type { PreloadedState } from '@reduxjs/toolkit';
// import type { RootState, AppStore } from '../../store/store';

// import educationReducer from '../../store/slices/educationSlice';
// import panelReducer from '../../store/slices/panelSlice';
// import skillsReducer from '../../store/slices/skillsSlice';
// import aboutReducer from '../../store/slices/aboutSlice';

// // This type interface extends the default options for render from RTL, as well
// // as allows the user to specify other things such as initialState, store.
// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: PreloadedState<RootState>;
//   store?: AppStore;
// }

// export function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {
//       educationReducer: {
//         content: [],
//         isLoading: false,
//         error: null,
//         isFormOpen: false,
//       },
//       skillsReducer: {
//         data: [],
//         isLoading: false,
//         error: null,
//         isFormOpen: false,
//       },
//       panelReducer: {
//         isOpen: false,
//       },
//       aboutReducer: {
//         text: [],
//         isLoading: false,
//         error: null,
//         isFormOpen: false,
//       },
//     },
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({
//       reducer: {
//         educationReducer,
//         skillsReducer,
//         panelReducer,
//         aboutReducer,
//       },
//       preloadedState,
//     }),
//     ...renderOptions
//   }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }: PropsWithChildren<{}>): React.JSX.Element {
//     return <Provider store={store}>{children}</Provider>;
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }
