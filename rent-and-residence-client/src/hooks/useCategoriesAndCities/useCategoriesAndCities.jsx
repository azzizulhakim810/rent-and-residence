// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useCategoriesAndCities = () => {
  // const [categoriesAndCities, setCategoriesAndCities] = useState();
  const axiosPublic = useAxiosPublic();

  const { data: categoriesAndCities, isPending } = useQuery({
    queryKey: ["categoriesAndCities"],
    queryFn: async () => {
      const result = await axiosPublic.get("/api/allCategoriesAndCities");
      return result.data;
    },
  });

  return [categoriesAndCities, isPending];
};

export default useCategoriesAndCities;
