import { useEffect, useState } from "react";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useComparison = () => {
  const [comparisonProperty, setComparisonProperty] = useState();
  const [isShowed, setIsShowed] = useState();

  const axiosPublic = useAxiosPublic();
  const fetchProperties = JSON.parse(localStorage.getItem("properties"));
  // console.log(fetchProperties);

  // const {data, isPending, refetch} = useQuery({
  //   queryKey: []
  // })

  useEffect(() => {
    Promise?.all(
      fetchProperties?.map((propertyId) =>
        axiosPublic.get(`/api/properties/${propertyId}`)
      )
    ).then((res) => setComparisonProperty(res));
  }, [axiosPublic, fetchProperties]);

  const handleRemoveComparison = () => {
    const popUp = document.getElementById("comparisonPopUp");
    popUp.style.animation = "fadeOutDown 0.5s ease forwards";

    // Clear localStorage
    localStorage.removeItem("properties");
  };

  return [handleRemoveComparison, comparisonProperty, setIsShowed, isShowed];
};

export default useComparison;
