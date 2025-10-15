// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check session from backend when app loads
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/api/auth/check_session", {
          withCredentials: true,
        });
        if (res.data.authenticated) {
          setUser({ username: res.data.user });
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = (username) => {
    setUser({ username });
  };

  const logout = async () => {
    try {
      await axios.post("http://127.0.0.1:5000/api/auth/logout", {}, { withCredentials: true });
    } catch (e) {
      console.error("Logout error:", e);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
