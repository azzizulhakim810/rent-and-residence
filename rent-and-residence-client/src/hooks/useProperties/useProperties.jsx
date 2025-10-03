import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useProperties = ({ currentPage, limit }) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allPropInfo,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allPropInfo", { currentPage, limit }],
    queryFn: async ({ queryKey }) => {
      const [_key, { currentPage, limit }] = queryKey;
      const result = await axiosPublic.get(
        `/api/properties?page=${currentPage}&limit=${limit}`
      );

      return result.data;
    },
    keepPreviousData: true,
  });

  return [allPropInfo, refetch, isPending];
};

export default useProperties;
