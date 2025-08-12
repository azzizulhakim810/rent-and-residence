import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import UseAuth from "../UseAuth/UseAuth";
const useRole = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: isRole } = useQuery({
    queryKey: [user?.email, "isRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/user/role/${user.email}`);
      console.log(res.data?.role);
      return res.data?.role;
    },
  });
  return [isRole];
};

export default useRole;
