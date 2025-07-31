import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5123",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
