import { useQuery } from "@tanstack/react-query";

import MyOrdersTable from "../../../components/MyOrdersTable/MyOrdersTable";
import UseAuth from "../../../hooks/UseAuth/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useScrollToTop from "../../../hooks/useScrollToTop/useScrollToTop";

const MyOrders = () => {
  useScrollToTop();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: myOrders = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["myOrders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/payment/${user.email}`);
      return res.data;
    },
  });

  console.log(myOrders);

  // myOrders?.map((order) => console.log(order.status));

  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">Dashboard – My Orders</h1>

      <div className="grid  grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-12 col-span-12 lg:order-1 order-2 flex flex-col gap-10">
          {/*Contact Information  */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            {/*  <div className="font-Nunito_Sans text-C_LightGray w-full">
              <PropertyCard property={agentOwnedProperty} />
            </div> */}

            {/* My Orders Table  */}
            <div className="grid lg:grid-cols-1 grid-cols-1 justify-start lg:w-full min-w-full gap-6 py-0 overflow-x-auto">
              <table className="table rounded-8xl">
                {/* head */}
                <thead className="bg-C_purple rounded-5xl ">
                  <tr className="font-Nunito text-[16px] text-white rounded-4xl">
                    <th className="text-center">Serial</th>

                    <th>Title</th>

                    <th>Category</th>

                    <th>Price</th>

                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {isPending ? (
                    <tr>
                      <td colSpan={6} className="text-center py-4">
                        <p className="text-lg text-C_purple flex items-center justify-start gap-4">
                          <span>Loading </span>
                          <span className="loading loading-dots loading-lg"></span>
                        </p>
                      </td>
                    </tr>
                  ) : myOrders?.length !== 0 ? (
                    myOrders?.map(
                      (order, i) =>
                        order.status === "paid" && (
                          <MyOrdersTable
                            order={order}
                            key={i}
                            i={i}
                            refetch={refetch}
                          />
                        )
                    )
                  ) : (
                    <tr>
                      <td colSpan={6} className=" pt-6">
                        <span className="text-lg font-Nunito_Sans text-C_DarkGray/50">
                          There is no property!
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
