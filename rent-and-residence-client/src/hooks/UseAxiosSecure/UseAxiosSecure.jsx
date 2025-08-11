import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5123",
});

const UseAxiosSecure = () => {
  const { signOutUser } = UseAuth();
  const navigate = useNavigate();
  // Request interceptor to add authorization header for every secure call to api
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      // console.log(token);

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      // Do something with request error
      return Promise.reject(err);
    }
  );

  // Response interceptor (Intercepts 401 & 403 status)
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (err) => {
      const status = err.res.status;
      console.log("Status error", status);

      // For 401 & 403 user to logOut

      if (status == 401 || status == 403) {
        await signOutUser()
          .then(() => {
            console.log("Sign Out Successfully");
            // loading(false);
          })
          .catch((error) => {
            console.log(error.message);
          });

        navigate("/");
      }
      return Promise.reject(err);
    }
  );

  return axiosSecure;
};

export default UseAxiosSecure;
