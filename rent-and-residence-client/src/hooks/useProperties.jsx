import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";
const useProperties = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allPropInfo,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allPropInfo"],
    queryFn: async () => {
      const result = await axiosPublic.get("/api/properties");

      return result.data;
    },
  });

  return [allPropInfo, refetch, isPending];
};

export default useProperties;
