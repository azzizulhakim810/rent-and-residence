import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import UseAuth from "../UseAuth/UseAuth";

const useRole = () => {
  const { user } = UseAuth();

  const axiosSecure = UseAxiosSecure();

  const { isPending: isRolePending, data: isRole } = useQuery({
    queryKey: ["isRole", user?.email],
    queryFn: async ({ queryKey }) => {
      const [_key, email] = queryKey;
      const res = await axiosSecure.get(`/api/user/role/${email}`);
      console.log("this is user role", res.data?.role);
      return res.data.role;
    },
    enabled: !!user?.email,
  });
  return [isRole, isRolePending];
};

export default useRole;
