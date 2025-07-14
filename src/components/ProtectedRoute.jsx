import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // User is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return children;
}
