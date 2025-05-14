import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import LoadingSpinner from "./LoadingSpinner";

const PublicRoute = ({ children }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  // If authenticated, redirect to dashboard
  if (isAuthenticated) {
    console.log("User is authenticated, redirecting to dashboard");
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  // Not authenticated, allow access to public route
  return children;
};

export default PublicRoute; 