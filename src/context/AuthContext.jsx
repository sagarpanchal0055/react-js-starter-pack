import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authService
        .getMyProfile()
        .then((userData) => {
          setUser(userData);
        })
        .catch(() => {
          // Token is invalid, log out
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      const { token, ...userData } = await authService.login(credentials);

      // Add a 'role' for our app's purposes. 'admin' if username is 'kminchelle'.
      const role = userData.username === 'kminchelle' ? 'admin' : 'user';
      const userWithRole = { ...userData, role };

      localStorage.setItem('user', JSON.stringify(userWithRole));
      localStorage.setItem('token', token);
      setUser(userWithRole);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login function failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const value = { user, login, logout, loading };

  if (loading) {
    // You can return a full-page loading spinner here
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-slate-900">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
