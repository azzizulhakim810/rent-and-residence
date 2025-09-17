import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useComparison = () => {
  const [comparisonProperty, setComparisonProperty] = useState();
  const [isShowed, setIsShowed] = useState(true);

  const axiosPublic = useAxiosPublic();
  const fetchProperties = JSON.parse(localStorage.getItem("properties"));
  // console.log(fetchProperties);

  useEffect(() => {
    Promise.all(
      fetchProperties.map((propertyId) =>
        axiosPublic.get(`/api/properties/${propertyId}`)
      )
    ).then((res) => setComparisonProperty(res));
  }, [axiosPublic, fetchProperties]);

  const handleRemoveComparison = () => {
    setIsShowed(!isShowed);
  };

  return [handleRemoveComparison, comparisonProperty];
};

export default useComparison;
