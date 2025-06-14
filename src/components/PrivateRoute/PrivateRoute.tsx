import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../Services/Auth/AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
