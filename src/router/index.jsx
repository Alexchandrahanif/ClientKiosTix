import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "../layout/layout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("authorization")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: () => {
      if (localStorage.getItem("authorization")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
