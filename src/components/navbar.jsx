import { useAuth } from "@/features/auth/context/use-auth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <Link to="/" className="font-semibold text-lg">
            Todo App
          </Link>

          <Link to="/todos" className="text-sm hover:underline">
            Todos
          </Link>

          <Link to="/error-test" className="text-sm hover:underline">
            Error Test
          </Link>

          <Link to="/notfound-test" className="text-sm hover:underline">
            404 Test
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {user && (
            <span className="text-sm text-muted-foreground">
              {user.email}
            </span>
          )}

          {user && (
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
