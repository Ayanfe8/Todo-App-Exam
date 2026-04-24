import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/context/use-auth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
