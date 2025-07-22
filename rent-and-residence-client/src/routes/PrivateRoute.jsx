import { useContext, useEffect } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import useSignedInUser from "../hooks/useSignedInUser/useSignedInUser";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUserFromDB] = useSignedInUser();
  const { user, loading } = useContext(AuthContext);

  // When nothing is fetched
  if (loading) {
    return (
      <p className="text-lg text-C_purple flex items-center justify-center mt-5 gap-4">
        Loading <span className="loading loading-dots loading-lg"></span>
      </p>
    );
  }

  // If there is no user logged in
  if (!user) {
    return (
      <Navigate to="/" state={{ from: location, showModal: true }} replace />
    );
  }

  // If user is logged in
  return children;
};

export default PrivateRoute;
