import { useSession } from '@supabase/auth-helpers-react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner />;

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
