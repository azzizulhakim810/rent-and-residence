import { useQuery } from "@tanstack/react-query";
import BarChartStat from "../../../components/BarChartStat/BarChartStat";
import PieChartStat from "../../../components/PieChartStat/PieChartStat";
import useAxiosSecure from "../../../hooks/UseAxiosSecure/UseAxiosSecure";

const Statistics = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chartData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/order-stats");
      return res.data;
    },
  });

  // console.log(chartData);
  return (
    <div className="py-10">
      <h1 className="font-Nunito text-2xl font-[600] pb-2">Welcome</h1>
      <h1 className="font-Nunito text-5xl font-[800]">Dashboard - Main</h1>

      <div className="grid grid-cols-12 gap-6 pt-10">
        <div className="lg:col-span-8 col-span-10 flex flex-col gap-8">
          {/* Account Summary  */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-4">
              Account Summary
            </h1>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 font-Nunito_Sans text-C_LightGray">
              <h3>Total Properties: {stats?.propertyItems}</h3>
              <h3>Published Properties: {stats?.approvedProperties.length}</h3>
              <h3>Registered Users: {stats?.registeredUsers}</h3>
              {/* <h3>Saved Searches: 0</h3> */}
              {/* <h3>Favorite Properties: 0</h3> */}
            </div>
          </div>

          {/* Listing Views */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] px-2 py-8 w-full rounded-xl bg-white">
            {/* {chartData &&
              chartData?.map((singleData) => (
                <StatisticsChart key={singleData._id} singleData={singleData} />
              ))} */}

            <div className="grid grid-cols-2 text-center">
              <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-8">
                Sales per Category
              </h1>

              <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-8">
                Revenue per Category
              </h1>
            </div>
            <div className="grid grid-cols-2 ">
              <div>
                <BarChartStat chartData={chartData} />
              </div>

              <div>
                <PieChartStat chartData={chartData} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-10 ">
          {/* Account History  */}
          <div className="shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-8 w-full rounded-xl bg-white">
            <h1 className=" font-Nunito text-[20px] font-[600] tracking-wider text-gray-700 mb-4">
              Account History
              {/* <br /> (last 7 days) */}
            </h1>

            <div className="font-Nunito_Sans text-C_LightGray">
              <h3>Total Sell: {(stats?.revenue / 100).toFixed(2)}€</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
