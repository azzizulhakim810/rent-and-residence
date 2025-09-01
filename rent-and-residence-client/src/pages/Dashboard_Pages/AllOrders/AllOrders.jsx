import { useQuery } from "@tanstack/react-query";

import PaymentHistoryTable from "../../../components/PaymentHistoryTable/PaymentHistoryTable";
import UseAuth from "../../../hooks/UseAuth/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import AllOrdersTable from "../../../components/AllOrdersTable/AllOrdersTable";

const AllOrders = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: allOrders = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allOrders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/allPayments/${user.email}`);
      return res.data;
    },
  });

  // console.log(paymentHistory.map((item) => item.cartIds));

  console.log(allOrders);
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard – All Orders History
      </h1>

      <div className="grid  grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-12 col-span-12 lg:order-1 order-2 flex flex-col gap-10">
          {/*Contact Information  */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            {/*  <div className="font-Nunito_Sans text-C_LightGray w-full">
              <PropertyCard property={agentOwnedProperty} />
            </div> */}

            {/* My Orders Table  */}
            <div className="grid lg:grid-cols-1 grid-cols-1 justify-start w-full gap-6 py-0">
              <table className="table rounded-8xl">
                {/* head */}
                <thead className="bg-C_purple rounded-5xl ">
                  <tr className="font-Nunito text-[16px] text-white rounded-4xl">
                    <th className="text-center">Serial</th>
                    {/* <th>Transaction Id</th> */}
                    <th>Email</th>

                    {/* <th className="text-center">Quantity</th> */}
                    <th className="text-center">Properties</th>

                    <th>Order Created</th>
                    <th>Amount</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {isPending ? (
                    <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
                      Loading{" "}
                      <span className="loading loading-dots loading-lg"></span>
                    </p>
                  ) : allOrders?.length !== 0 ? (
                    allOrders?.map((order, i) => (
                      <AllOrdersTable
                        key={order._id}
                        order={order}
                        i={i}
                        refetch={refetch}
                        // setLoading={setLoading}
                      />
                    ))
                  ) : (
                    <tr className="text-lg font-Nunito_Sans block mt-4">
                      You don't make any payment!
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

export default AllOrders;
