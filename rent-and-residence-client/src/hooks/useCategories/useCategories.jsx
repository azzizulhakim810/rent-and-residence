import { useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import { useEffect } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/api/allCategories").then((res) => {
      setCategories(res.data);
    });
  }, [axiosPublic]);
  return [categories];
};

export default useCategories;
