import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";
const useProperties = () => {
  const axiosPublic = useAxiosPublic();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* fetch("http://localhost:5123/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      }); */

    axiosPublic.get("http://localhost:5123/api/properties").then((res) => {
      // console.log(res.data);
      setProperties(res.data);
      setLoading(false);
    });
  }, [axiosPublic]);
  return [properties, loading];
};

export default useProperties;
