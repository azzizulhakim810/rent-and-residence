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

  // useEffect(() => {
  //   axiosPublic.get("/api/allCategoriesAndCities").then((res) => {
  //     setCategoriesAndCities(res.data);
  //   });
  // }, [axiosPublic]);
  return [categoriesAndCities, isPending];
};

export default useCategoriesAndCities;
