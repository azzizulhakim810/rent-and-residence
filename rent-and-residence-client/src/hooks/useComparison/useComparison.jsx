import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import { usePopup } from "../../providers/PopupProvider";

const useComparison = () => {
  const [selectedComparePropIds, setSelectedComparePropIds] = useState(
    JSON.parse(localStorage.getItem("properties")) || []
  );

  const axiosPublic = useAxiosPublic();
  const { setIsShow } = usePopup();

  // keep localStorage in sync whenever state changes
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(selectedComparePropIds));
  }, [selectedComparePropIds]);

  const {
    data: comparisonProperties,
    isPending,
    isLoading,
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

  const handleRemoveComparison = () => {
    const popUp = document.getElementById("comparisonPopUp");
    popUp.style.animation = "fadeOutDown 0.5s ease forwards";

    // Clear localStorage
    // localStorage.removeItem("properties");
    setSelectedComparePropIds([]);
    setIsShow(false);
  };

  return [
    handleRemoveComparison,
    comparisonProperties,
    comparisonRefetch,
    isPending,
    isLoading,
    setSelectedComparePropIds,
  ];
};

export default useComparison;
