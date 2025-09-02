import { useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UseAuth from "../UseAuth/UseAuth";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useSignedInUser = () => {
  const { user } = UseAuth();
  const { email } = user || {};
  const axiosPublic = useAxiosPublic();

  const [currentUserFromDB, setCurrentUserFromDB] = useState({});

  useEffect(() => {
    axiosPublic
      .get(`/api/auth/me?email=${email}`)
      .then((res) => setCurrentUserFromDB(res.data));

    /* fetch(`http://localhost:5123/api/auth/me?email=${email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUserFromDB(data)); */
  }, [axiosPublic, email]);

  return [currentUserFromDB];
};

export default useSignedInUser;
