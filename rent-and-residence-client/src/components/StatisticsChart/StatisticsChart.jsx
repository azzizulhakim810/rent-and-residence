import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 4590,
    pv: 2200,
    amt: 4800,
  },
  {
    name: "Page G",
    uv: 3840,
    pv: 4790,
    amt: 3700,
  },
  {
    name: "Page G",
    uv: 7690,
    pv: 1000,
    amt: 4600,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 1290,
    pv: 7800,
    amt: 8600,
  },
  {
    name: "Page G",
    uv: 3590,
    pv: 6800,
    amt: 8600,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 7800,
    amt: 6500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 7690,
    pv: 6200,
    amt: 6800,
  },
];

const StatisticsChart = () => {
  return (
    <>
      <BarChart className="lg:flex hidden" width={550} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>

      <BarChart
        className="lg:hidden block -ms-6"
        width={320}
        height={250}
        data={data}
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
