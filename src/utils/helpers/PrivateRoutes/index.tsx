import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
  const token = localStorage.getItem('token');
  return token === process.env.REACT_APP_TOKEN ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
