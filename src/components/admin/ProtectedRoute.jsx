import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import './ProtectedRoute.css';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/admin" replace />;
}

export default ProtectedRoute;
