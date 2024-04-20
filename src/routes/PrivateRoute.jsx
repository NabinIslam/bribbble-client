import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../ui/LoadingSpinner';
import { useAuth } from '../contexts/auth';

const PrivateRoute = ({ children }) => {
  const { isloggedIn, isLoading } = useAuth();

  const location = useLocation();

  if (isLoading) return <LoadingSpinner />;

  if (isloggedIn) return children;

  return <Navigate to="/sign-up" state={{ from: location }} replace />;
};

export default PrivateRoute;
