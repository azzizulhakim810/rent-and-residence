import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useSignedInUser = () => {
  const { user } = useContext(AuthContext);
  const { email } = user || {};

  const [currentUserFromDB, setCurrentUserFromDB] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5123/api/auth/me?email=${email}`)
      .then((res) => res.json())
      .then((data) => setCurrentUserFromDB(data));
  }, [email]);

  return [currentUserFromDB];
};

export default useSignedInUser;
