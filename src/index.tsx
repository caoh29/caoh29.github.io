import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './assets/styles/style.scss';

import store from './store/store';

import PrivateRoutes from './utils/helpers/PrivateRoutes';

// import { makeServer } from './services/server';

import HomePage from './pages/Home/HomePage';
import InnerPage from './pages/Inner/InnerPage';
import ErrorPage from './pages/Error/ErrorPage';
import AdminPage from './pages/Admin/AdminPage';
import LoginPage from './pages/Login/LoginPage';

// makeServer();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/inner" element={<InnerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
