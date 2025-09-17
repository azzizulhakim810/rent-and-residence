import { useEffect, useState } from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useComparison = () => {
  const [comparisonProperty, setComparisonProperty] = useState();
  // const [propertyIds, setPropertyIds] = useState([]);
  const [isShowed, setIsShowed] = useState();
  // const [p, setP] = useState();

  const axiosPublic = useAxiosPublic();

  // console.log(fetchProperties);

  // const fetchProperty = async () => {
  //   const result = await fetchProperties.map((propertyId) => setP(propertyId));
  // };
  // fetchProperty();

  // useEffect(() => {
  //   Promise?.all(fetchProperties.map((propertyId) => setP(propertyId)));
  // }, [fetchProperties]);

  // const {
  //   data: ComparisonProp,
  //   isPending,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["ComparisonProp"],
  //   queryFn: async () => {
  //     const result = await axiosPublic.get(
  //       `/api/properties/${fetchProperties}`
  //     );
  //     return result.data;
  //   },
  //   enabled: fetchProperties.length > 0,
  // });

  // console.log(ComparisonProp);

  // const fetchProperties = JSON.parse(localStorage.getItem("properties"));

  const [propertyIds, setPropertyIds] = useState(
    () => JSON.parse(localStorage.getItem("properties")) || []
  );

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("properties")) || [];
    setPropertyIds(stored);
  }, []);

  const results = useQueries({
    queries: propertyIds.map((id) => ({
      queryKey: ["property", id],
      queryFn: async () => {
        const result = await axiosPublic.get(`/api/properties/${id}`);
        return result.data;
      },
      enabled: !!id,
    })),
  });

  const refetchAll = () => results.forEach((q) => q.refetch());

  // const properties = results.map((q) => q.data);
  // console.log(properties);
  // console.log(results);
  // results.map((q) => console.log(q.data[0]));

  // useEffect(() => {
  //   Promise?.all(
  //     propertyIds?.map((propertyId) =>
  //       axiosPublic.get(`/api/properties/${propertyId}`)
  //     )
  //   ).then((res) => setComparisonProperty(res));
  // }, [axiosPublic, propertyIds]);

  const handleRemoveComparison = () => {
    const popUp = document.getElementById("comparisonPopUp");
    popUp.style.animation = "fadeOutDown 0.5s ease forwards";

    // Clear localStorage
    localStorage.removeItem("properties");
    refetchAll();
  };

  return [
    handleRemoveComparison,
    comparisonProperty,
    results,
    setIsShowed,
    isShowed,
    refetchAll,
  ];
};

export default useComparison;
