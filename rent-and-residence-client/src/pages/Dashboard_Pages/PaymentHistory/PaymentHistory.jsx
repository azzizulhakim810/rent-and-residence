import { useQuery } from "@tanstack/react-query";

import PaymentHistoryTable from "../../../components/PaymentHistoryTable/PaymentHistoryTable";
import UseAuth from "../../../hooks/UseAuth/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";
import useScrollToTop from "../../../hooks/useScrollToTop/useScrollToTop";

const PaymentHistory = () => {
  useScrollToTop();
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const {
    data: paymentHistory = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/payment/${user.email}`);
      return res.data;
    },
  });

  // console.log(paymentHistory.map((item) => item.cartIds));
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">
        Dashboard – My Payment History
      </h1>

      <div className="grid  grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-12 col-span-12 lg:order-1 order-2 flex flex-col gap-10">
          {/*Contact Information  */}
          <div className="shadow-[0px_4px_20px_rgba(0,0,0,0.1)] lg:p-8 p-4 w-full rounded-xl bg-white">
            {/* My Orders Table  */}
            <div className="grid lg:grid-cols-1 grid-cols-1 justify-start w-full gap-6 py-0">
              <table className="table rounded-8xl">
                {/* head */}
                <thead className="bg-C_purple rounded-5xl ">
                  <tr className="font-Nunito text-[16px] text-white rounded-4xl">
                    <th className="text-center">Serial</th>
                    <th>Transaction Id</th>
                    <th>Amount</th>
                    <th className="text-center">Quantity</th>

                    <th>Order Created</th>
                    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {isPending ? (
                    <p className="text-lg text-C_purple flex items-center mt-5 gap-4">
                      Loading{" "}
                      <span className="loading loading-dots loading-lg"></span>
                    </p>
                  ) : paymentHistory?.length !== 0 ? (
                    paymentHistory?.map((order, i) => (
                      <PaymentHistoryTable
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

export default PaymentHistory;
