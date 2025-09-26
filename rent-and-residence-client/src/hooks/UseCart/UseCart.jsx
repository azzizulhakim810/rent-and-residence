import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../useAxiosSecure/useAxiosSecure";
// import useSignedInUser from "../useSignedInUser/useSignedInUser";
import UseAuth from "../useAuth/useAuth";

const UseCart = () => {
  const axiosSecure = UseAxiosSecure();
  // const [currentUserFromDB] = useSignedInUser();
  // const { email } = currentUserFromDB;
  const { user } = UseAuth();
  // console.log(user?.email);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/carts?userEmail=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [cart, refetch];
};

export default UseCart;
