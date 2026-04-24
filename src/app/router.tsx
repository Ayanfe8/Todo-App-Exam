import { createBrowserRouter } from "react-router-dom";
// import Layout from "@/components/Layout";
import Home from "../pages/home";
import Todos from "../pages/todos";
import TodoDetails from "../pages/todo-details";
import LoginPage from "../pages/login-page";
// import TodosPage from "@/pages/TodosPage";
// import TodoDetailsPage from "@/pages/TodoDetailsPage";
import NotFound from "@/pages/not-found";
import ErrorTest from "../pages/error-test";
import RegisterPage from "@/pages/register-page";
import ProtectedRoute from "@/components/protected-route";
import Layout from "@/components/layout";
import ErrorBoundary from "./ErrorBoundary"

export const router = createBrowserRouter([
  // {
  //   element: <Layout />,
  //   children: [
  //     { path: "/", element: <TodosPage /> },
  //     { path: "/todos/:id", element: <TodoDetailsPage /> },
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },

  // Public routes
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // Main app routes
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/todos",
    element: (
      <ProtectedRoute>
        <Layout>
          <Todos />
        </Layout>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/todos/:id",
    element: (
      <ProtectedRoute>
        <Layout>
          <TodoDetails />
        </Layout>
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
  },

  {
    path: "/error-test",
    element: <ErrorTest />,
  },
  { path: "*", element: <NotFound /> },
]);
