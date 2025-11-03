import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import BarChartStat from "../BarChartStat/BarChartStat";
import PieChartStat from "../PieChartStat/PieChartStat";
import useAgentOwnedProperties from "../../hooks/useAgentOwnedProperties/useAgentOwnedProperties";
import useSignedInUser from "../../hooks/useSignedInUser/useSignedInUser";

const UserDashboard = () => {
  const axiosSecure = UseAxiosSecure();
  const [currentUserFromDB] = useSignedInUser();
  const { _id, email } = currentUserFromDB;
  console.log(email);

  const [, , agentOwnedProperties] = useAgentOwnedProperties();
  // console.log(agentOwnedProperties);
  const { data: agentRevenue } = useQuery({
    queryKey: ["agentRevenue", _id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/agentRevenue/${email}`);
      return res.data;
    },
  });

  console.log(agentRevenue);

  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/order-stats");
      return res.data;
    },
  });

  console.log(chartData);
  return (
    <div className="grid grid-cols-12 gap-6 pt-10">
      <div className="lg:col-span-8 col-span-12 flex flex-col gap-8 lg:order-1 order-2">
        {/* Account Summary  */}
        <div className="shadow-[0px_4px_20px_rgba(0,0,0,0.1)] lg:p-8 p-4 w-full rounded-xl bg-white">
          <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-4">
            Account Summary
          </h1>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 font-Nunito_Sans text-C_LightGray">
            <h3>
              Listed Properties: {agentOwnedProperties?.allOwnedProps?.length}
            </h3>
            <h3>
              Approved Properties: {agentOwnedProperties?.approvedProps?.length}
            </h3>
            {/* <h3>Registered Users: {stats?.registeredUsers}</h3> */}
            {/* <h3>Saved Searches: 0</h3> */}
            {/* <h3>Favorite Properties: 0</h3> */}
          </div>
        </div>

        {/* Listing Views */}
        <div className="shadow-[0px_4px_20px_rgba(0,0,0,0.1)] px-2 py-8 w-full rounded-xl bg-white">
          <div className="grid lg:grid-cols-2 grid-cols-1 text-center">
            <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-8">
              Sales per Category
            </h1>

            <h1 className="lg:block hidden font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-8">
              Revenue per Category
            </h1>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 ">
            <div>
              <BarChartStat chartData={agentRevenue?.result} />
            </div>
            <h1 className="lg:hidden flex font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mt-6">
              Revenue per Category
            </h1>
            <div>
              <PieChartStat chartData={agentRevenue?.result} />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 col-span-12 lg:order-2 order-1">
        {/* Account History  */}
        <div className="shadow-[0px_4px_20px_rgba(0,0,0,0.1)] lg:p-8 p-4 w-full rounded-xl bg-white">
          <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-4">
            Account History
            {/* <br /> (last 7 days) */}
          </h1>

          <div className="font-Nunito_Sans text-C_LightGray">
            <h3>Total Sell: {agentRevenue?.totalRevenue.toFixed(2)}€</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
