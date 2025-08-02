import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../layout/NotFound";

import Dashboard from "../layout/Dashboard/Dashboard";
import AgentDetails from "../pages/Agent/AgentDetails/AgentDetails";
import AllAgents from "../pages/Agent/AllAgents/AllAgents";
import BlogDetails from "../pages/Blogs/BlogDetails/BlogDetails";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import AddNewProperty from "../pages/Dashboard_Pages/AddNewProperty/AddNewProperty";
import Favorites from "../pages/Dashboard_Pages/Favorites/Favorites";
import Inbox from "../pages/Dashboard_Pages/Inbox/Inbox";
import MyProfile from "../pages/Dashboard_Pages/MyProfile/MyProfile";
import MyPropertyList from "../pages/Dashboard_Pages/MyPropertyList/MyPropertyList";
import Statistics from "../pages/Dashboard_Pages/Statistics/Statistics";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import Comparison from "../pages/Comparison/Comparison";

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
        path: "/propertyDetails/:propertyId",
        element: (
          // <PrivateRoute>
          <PropertyDetails />
          // </PrivateRoute>
        ),
      },
      {
        path: "/agents/:id",
        element: (
          <PrivateRoute>
            <AgentDetails />
          </PrivateRoute>
        ),
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
      {
        path: "/comparison",
        element: <Comparison />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/stat",
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myPropertyList",
        element: (
          <PrivateRoute>
            <MyPropertyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addNewProperty",
        element: (
          <PrivateRoute>
            <AddNewProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/favorites",
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/inbox",
        element: (
          <PrivateRoute>
            <Inbox />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
