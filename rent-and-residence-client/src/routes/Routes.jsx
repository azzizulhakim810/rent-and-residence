import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../layout/NotFound";

import AddProperty from "../pages/AddProperty/AddProperty";

import Dashboard from "../layout/Dashboard/Dashboard";
import AgentDetails from "../pages/Agent/AgentDetails/AgentDetails";
import AllAgents from "../pages/Agent/AllAgents/AllAgents";
import BlogDetails from "../pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import ActiveListing from "../pages/Dashboard_Pages/ActiveListing/ActiveListing";
import MyProfile from "../pages/Dashboard_Pages/MyProfile/MyProfile";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/Properties/PropertyDetails";

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
        path: "/addProperty",
        element: <AddProperty />,
      },
      {
        path: "/properties",
        element: <Properties />,
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
        path: "/agents/:id",
        element: <AgentDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5123/api/users/${params.id}`),
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/activeListing",
        element: <ActiveListing />,
      },
    ],
  },
]);
