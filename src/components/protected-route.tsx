import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/context/use-auth";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
