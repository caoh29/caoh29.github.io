import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
  const token = localStorage.getItem('token');
  return token === 'c6aa0706-c1f4-4b09-a6fd-a1c19fe7998c' ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
