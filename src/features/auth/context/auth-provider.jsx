import { useState, useEffect } from "react";
import axiosInstance from "@/api/axios";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on startup
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.get("/auth/me");
        setUser(res.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const register = async (data) => {
    const res = await axiosInstance.post("/auth/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);

    setUser(res.data.user);
  };

  const login = async (data) => {
    const res = await axiosInstance.post("/auth/login", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);

    setUser(res.data.user);
  };

  const refresh = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) return logout();

    try {
      const res = await axiosInstance.post("/auth/refresh", {
        refreshToken,
      });

      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data.accessToken;
    } catch (error) {
      if (error.response?.status === 401) {
        const newToken = await refresh();
        if (newToken) {
          const res = await axiosInstance.get("/auth/me");
          setUser(res.data);
        }
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, refresh, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
