import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";
const useProperties = () => {
  const axiosPublic = useAxiosPublic();

  const [properties, setProperties] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* fetch("http://localhost:5123/api/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      }); */

    axiosPublic.get("/api/properties").then((res) => {
      // console.log(res.data);
      setProperties(res.data.allProperties);
      setFavourites(res.data.favouritePropertyIds);
      setLoading(false);
    });
  }, [axiosPublic]);
  return [properties, favourites, loading];
};

export default useProperties;
