import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../layout/NotFound";

import AddProperty from "../pages/AddProperty/AddProperty";
import AllAgents from "../pages/Agent/AllAgents/AllAgents";
import BlogDetails from "../pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import Agent from "../pages/Agent/Agent/Agent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5123/api/properties"),
      },
      {
        path: "/addProperty",
        element: <AddProperty />,
      },
      {
        path: "/properties",
        element: <Properties />,
        loader: () => fetch("http://localhost:5123/api/properties"),
      },
      {
        path: "/propertyDetails/:propertyId",
        element: <PropertyDetails />,
        /* loader: ({ params }) => {
          console.log(params.propertyId);
          fetch(`http://localhost:5123/api/properties/${params.propertyId}`)
            .then((res) => res.json())
            .then((data) => console.log(data[0]));
        }, */
      },
      {
        path: "/agent",
        element: <Agent />,
      },

      {
        path: "/allAgents",
        element: <AllAgents />,
        loader: () => fetch("http://localhost:5123/api/users"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogDetails",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
