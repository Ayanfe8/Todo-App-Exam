import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <div className="max-w-md space-y-6">
        <div className="flex justify-center">
          <AlertTriangle size={48} className="text-red-500" />
        </div>

        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>

        <p className="text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
      </div>
    </main>
  );
}
