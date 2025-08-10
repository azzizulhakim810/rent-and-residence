import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5123",
});

const UseAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      // console.log("request stopped by interceptors");

      const token = localStorage.getItem("access-token");

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      // Do something with request error
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
