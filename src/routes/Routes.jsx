import { createBrowserRouter } from "react-router-dom";
import NewsLayout from "../layouts/NewsLayout";
import NewsDetailsLayout from "../layouts/NewsDetailsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews";
import NewsDetails from "../pages/NewsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    // News Layout
  {
    path: "/",
    element: <NewsLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/category/:id", element: <CategoryNews /> },
    ],
  },


  // News Details Layout
  {
  path: "/news/:id",
  element: <NewsDetailsLayout />,
  children: [
    { 
      path: "/news/:id", 
      element: <PrivateRoute><NewsDetails /></PrivateRoute> 
    },
  ],
},
  
  // Auth Layout
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />

  }

])

export default router