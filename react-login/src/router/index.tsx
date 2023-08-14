
import type { RouteObject } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import OAuth2RedirectHandlerPage from "../pages/OAuth2RedirectHandlerPage";

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "oauth2Redirect",
      element: <OAuth2RedirectHandlerPage />,
    },
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;