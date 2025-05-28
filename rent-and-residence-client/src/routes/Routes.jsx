import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../layout/NotFound";
import Agents from "../pages/Agents/Agents";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
