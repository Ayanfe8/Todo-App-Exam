import { useContext } from "react";
import { AuthContext } from "./auth-context";

/**
 * Retrieves the current authentication context from AuthContext.
 *
 * @returns The current auth context value.
 * @throws Error if called outside of an AuthProvider with message "useAuth must be used within an AuthProvider".
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};