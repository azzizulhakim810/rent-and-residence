import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatisticsChart = ({ chartData }) => {
  // const {category, }
  console.log(chartData);

  /*  const dynamicData = [
    {
      name: singleData?.category,
      uv: singleData?.revenue,
    },
  ]; */

  return (
    <>
      <BarChart
        className="lg:flex hidden"
        width={250}
        height={250}
        data={chartData.map((d) => d)}
      >
        <CartesianGrid strokeDasharray="3 2" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
      </BarChart>

      <BarChart
        className="lg:hidden block -ms-6"
        width={320}
        height={250}
        data={chartData.map((d) => d)}
      >
        <CartesianGrid strokeDasharray="3 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </>
  );
};

export default StatisticsChart;
