import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import useSignedInUser from "../useSignedInUser/useSignedInUser";

const useAgentOwnedProperties = () => {
  const [currentUserFromDB] = useSignedInUser();
  const { _id } = currentUserFromDB;

  const axiosSecure = UseAxiosSecure();

  const {
    isPending,
    refetch,
    data: agentOwnedProperties,
  } = useQuery({
    queryKey: ["agentOwnedProperties", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/agentOwnedProperty/${_id}`);
      return res.data;
    },
    enabled: !!_id,
  });

  // console.log(agentOwnedProperties);

  return [isPending, refetch, agentOwnedProperties];
};

export default useAgentOwnedProperties;
