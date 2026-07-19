import { createContext, useContext, useMemo, useState } from 'react';
import { authService } from '../services/api.js';
import React from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('portfolio-token'));
  const [admin, setAdmin] = useState(() => JSON.parse(localStorage.getItem('portfolio-admin') || 'null'));

  const login = async (credentials) => {
    const { data } = await authService.login(credentials);
    localStorage.setItem('portfolio-token', data.token);
    localStorage.setItem('portfolio-admin', JSON.stringify(data.admin));
    setToken(data.token);
    setAdmin(data.admin);
    return data;
  };

  const logout = () => {
    localStorage.removeItem('portfolio-token');
    localStorage.removeItem('portfolio-admin');
    setToken(null);
    setAdmin(null);
  };

  const value = useMemo(() => ({ token, admin, isAuthenticated: Boolean(token), login, logout }), [token, admin]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
