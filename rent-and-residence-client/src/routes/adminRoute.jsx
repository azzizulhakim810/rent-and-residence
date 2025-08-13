import { useContext, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import useSignedInUser from "../hooks/useSignedInUser/useSignedInUser";
import { AuthContext } from "../providers/AuthProvider";
import UseAuth from "../hooks/UseAuth/UseAuth";
import useRole from "../hooks/useRole/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isRole, isRolePending] = useRole();
  const location = useLocation();

  // When nothing is fetched
  if (loading || isRolePending) {
    return (
      <p className="text-lg text-C_purple flex items-center justify-center my-5 gap-4">
        Loading <span className="loading loading-dots loading-lg"></span>
      </p>
    );
  }

  // If user is logged in
  if (user && isRole === "Admin") {
    console.log("Hurrah! You're Admin");
    return children;
  }
  // If there is no user logged in
  return (
    <Navigate to="/" state={{ from: location, showModal: true }} replace />
  );
};

export default AdminRoute;
