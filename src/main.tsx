import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/queryclient";
import ErrorBoundary from "@/app/ErrorBoundary";
import { AuthProvider } from "@/features/auth/context/auth-provider"; // <-- import AuthProvider
import App from "@/App";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element not found. Make sure index.html contains an element with id='root'");
}

ReactDOM.createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>,
);
