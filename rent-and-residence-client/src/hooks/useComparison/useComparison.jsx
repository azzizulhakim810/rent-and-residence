import { useEffect, useState } from "react";
import { useQuery, useQueries } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useComparison = () => {
  // const [comparisonProperty, setComparisonProperty] = useState();
  // const [propertyIds, setPropertyIds] = useState([]);
  // const [isShowed, setIsShowed] = useState();
  // const [p, setP] = useState();

  const axiosPublic = useAxiosPublic();

  const selectedComparePropIds = JSON.parse(localStorage.getItem("properties"));

  // console.log(selectedComparePropIds);

  // const fetchProperty = async () => {
  //   const result = await axiosPublic.post(
  //     "/api/comparisonProperties",
  //     selectedComparePropIds
  //   );
  //   return result;
  //   // console.log(result);
  // };

  // fetchProperty();

  const {
    data: comparisonProperties,
    isPending,
    refetch: comparisonRefetch,
  } = useQuery({
    queryKey: ["properties", selectedComparePropIds],
    queryFn: async () => {
      const result = await axiosPublic.post(
        "/api/comparisonProperties",
        selectedComparePropIds
      );
      return result.data;
    },
    enabled: selectedComparePropIds?.length > 0,
  });

  // console.log(comparisonProperties);

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

  /* 
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
  const isLoading = () => results.some((q) => q.isPending); */

  // const properties = results.map((q) => q.data);
  // console.log(properties);
  // console.log(results);
  // results.map((q) => console.log(q.data[0]));

  /*   useEffect(() => {
    Promise?.all(
      propertyIds?.map((propertyId) =>
        axiosPublic.get(`/api/properties/${propertyId}`)
      )
    ).then((res) => setComparisonProperty(res));
  }, [axiosPublic, propertyIds]); */

  const handleRemoveComparison = () => {
    const popUp = document.getElementById("comparisonPopUp");
    popUp.style.animation = "fadeOutDown 0.5s ease forwards";

    // Clear localStorage
    localStorage.removeItem("properties");
  };

  return [handleRemoveComparison, comparisonProperties, comparisonRefetch];
};

export default useComparison;
