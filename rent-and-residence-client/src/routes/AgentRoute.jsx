// import { useContext, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
// import useSignedInUser from "../hooks/useSignedInUser/useSignedInUser";
import { AuthContext } from "../providers/AuthProvider";
import UseAuth from "../hooks/UseAuth/UseAuth";
import useRole from "../hooks/useRole/useRole";

const AgentRoute = ({ children }) => {
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
  if (user && isRole === "agent") {
    console.log("Hurrah! You're an Agent");
    return children;
  }
  // If there is no user logged in
  return (
    <Navigate to="/" state={{ from: location, showModal: false }} replace />
  );
};

export default AgentRoute;
