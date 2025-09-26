import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
const useProperties = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allPropInfo,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allPropInfo", { page: 1, skip: 2, limit: 3 }],
    queryFn: async () => {
      const result = await axiosPublic.get("/api/properties", {
        params: {
          page: 1,
          skip: 2,
          limit: 3,
        },
      });

      return result.data;
    },
  });

  return [allPropInfo, refetch, isPending];
};

export default useProperties;
