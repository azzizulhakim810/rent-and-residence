import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSignedInUser from "../hooks/useSignedInUser/useSignedInUser";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUserFromDB] = useSignedInUser();
  const { user, loading } = useContext(AuthContext);
  // console.log(currentUserFromDB);
  // console.log(user);

  // console.log(location);

  useEffect(() => {
    console.log("Component Loaded");

    /*  return () => {
      console.log("Component unmounted");
    }; */
  }, [user, navigate, loading]);

  if (loading) {
    return (
      <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
        Loading <span className="loading loading-dots loading-lg"></span>
      </p>
    );
  }

  if (!user) {
    navigate("/");
    document.getElementById("signUpAndInPopUp").showModal();
    // <Navigate to="/" />;
  }

  if (user) {
    return children;
  }

  // return navigate("/");
};

export default PrivateRoute;
