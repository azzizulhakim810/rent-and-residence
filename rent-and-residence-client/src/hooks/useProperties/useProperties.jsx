import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useProperties = ({ currentPage, limit, filters }) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allPropInfo,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allPropInfo", { currentPage, limit, ...filters }],
    queryFn: async ({ queryKey }) => {
      const [_key, { currentPage, limit, city, category, type, value }] =
        queryKey;
      console.log(queryKey);
      const result = await axiosPublic.get(
        `/api/properties?page=${currentPage}&limit=${limit}&type=${type}&city=${city}&category=${category}&value=${value}`
      );

      return result.data;
    },
    keepPreviousData: true,
  });

  return [allPropInfo, refetch, isPending];
};

export default useProperties;
