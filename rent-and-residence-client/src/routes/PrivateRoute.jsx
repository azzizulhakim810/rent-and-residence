import { useContext, useEffect } from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import useSignedInUser from "../hooks/useSignedInUser/useSignedInUser";
import AuthProvider, { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUserFromDB] = useSignedInUser();
  const { user } = useContext(AuthContext);
  // console.log(currentUserFromDB);
  // console.log(user);

  // console.log(location);

  useEffect(() => {
    console.log("Component Loaded");
    if (!user) {
      // navigate("/");
      document.getElementById("signUpAndInPopUp").showModal();
      // <Navigate to="/" />;
      navigate("/");
    }

    return () => {
      console.log("Component unmounted");
    };
  }, [user, navigate]);

  if (user) {
    return children;
  }

  // return navigate("/");
};

export default PrivateRoute;
