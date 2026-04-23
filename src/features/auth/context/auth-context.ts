import { createContext } from "react";
import type { User } from "@/types";

export interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (data: { email: string; password: string }) => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<string | undefined>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);