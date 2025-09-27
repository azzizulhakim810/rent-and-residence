import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useProperties = ({ page, limit }) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allPropInfo,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allPropInfo", { page, limit }],
    queryFn: async ({ queryKey }) => {
      const [_key, { page, limit }] = queryKey;
      const result = await axiosPublic.get(
        `/api/properties?page=${page}&limit=${limit}`
      );

      return result.data;
    },
    // keepPreviousData: true,
  });

  return [allPropInfo, refetch, isPending];
};

export default useProperties;
