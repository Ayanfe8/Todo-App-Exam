import { useState, useEffect, useCallback, type ReactNode } from "react";
import axiosInstance from "@/api/axios";
import { AuthContext } from "./auth-context";
import type { User, AuthTokenResponse } from "@/types";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback((): void => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  }, []);

  const login = useCallback(async (data: {
    email: string;
    password: string;
  }): Promise<void> => {
    const res = await axiosInstance.post<AuthTokenResponse>("/auth/login", data);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    setUser(res.data.user);
  }, []);

  const register = useCallback(async (data: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    const res = await axiosInstance.post<AuthTokenResponse>("/auth/register", data);
    localStorage.setItem("accessToken", res.data.accessToken);
    localStorage.setItem("refreshToken", res.data.refreshToken);
    setUser(res.data.user);
  }, []);

  const refresh = useCallback(async (): Promise<string | undefined> => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      logout();
      return undefined;
    }
    try {
      const res = await axiosInstance.post<{ accessToken: string }>("/auth/refresh", {
        refreshToken,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data.accessToken;
    } catch {
      logout();
      return undefined;
    }
  }, [logout]);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await axiosInstance.get<User>("/auth/me");
        setUser(res.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [logout]); 

  return (
    <AuthContext.Provider value={{ user, login, register, logout, refresh, loading }}>
      {children}
    </AuthContext.Provider>
  );
}