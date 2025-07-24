import UseAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const UseCart = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/carts");
      return res.data;
    },
  });
  return [cart];
};

export default UseCart;
