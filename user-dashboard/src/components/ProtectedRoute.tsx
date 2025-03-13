import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../types";

interface ProtectedRouteProps {
  children : ReactNode;
  requiredRole? : UserRole;
}

const ProtectedRoute = ({ children, requiredRole } : ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  // checks if user is authenticated
  if (!isAuthenticated) {
    // redirect to login page with the current location
    return <Navigate to="/login" state={{ from : location }} replace />;
  }

  // if a specific role is required, check if user has that role
  if (requiredRole && user?.role !== requiredRole) {
    // redirect to dashboard if user doesn't have the req role
    return <Navigate to="/dashboard" replace />;
  }

  // if user is authenticated and has the required role, render children
  return <>{children}</>;
}

export default ProtectedRoute;

