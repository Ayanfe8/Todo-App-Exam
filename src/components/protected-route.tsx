import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/features/auth/context/use-auth";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

/**
 * Renders protected UI for authenticated users, showing a loading spinner while auth state is unresolved and redirecting to login when unauthenticated.
 *
 * @param children - The content to render when a user is authenticated
 * @returns The `children` when authenticated; a `LoadingSpinner` while auth is loading; otherwise a `Navigate` redirect to `/login` with the current location in state
 */
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
