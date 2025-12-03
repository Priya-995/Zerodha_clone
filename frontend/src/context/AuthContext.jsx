import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyUser();
  }, []);

   
    
  const verifyUser = async () => {
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:10000';
      const response = await fetch(`${API_URL}/userVerification`, {
  method: 'POST',
  credentials: 'include',
});
      const data = await response.json();
      
      if (data.success && data.status) {
        setUser({ username: data.user });
      }
    } catch (error) {
      console.error('Verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:10000';
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    
    if (data.success) {
      setUser(data.user);
    }
    return data;
  };

  const signup = async (email, password, username) => {
     const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:10000';
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, username }),
    });
    const data = await response.json();
    
    if (data.success) {
      setUser(data.user);
    }
    return data;
  };

  const logout = () => {
    setUser(null);
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}