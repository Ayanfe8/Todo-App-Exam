import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <div className="max-w-2xl space-y-6">
        <div className="flex justify-center">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Todo Manager
        </h1>

        <p className="text-gray-600 text-lg">
          A modern React + React Query powered todo application.
          Manage your tasks efficiently and stay productive.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/todos">
            <Button size="lg">View Todos</Button>
          </Link>

          <Link to="/error-test">
            <Button variant="outline" size="lg">
              Test Error Page
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
