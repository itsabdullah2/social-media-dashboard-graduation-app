import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    console.log("User is not authenticated, redirecting to signin");
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // User is authenticated, allow access to protected route
  return children;
};

export default ProtectedRoute;
