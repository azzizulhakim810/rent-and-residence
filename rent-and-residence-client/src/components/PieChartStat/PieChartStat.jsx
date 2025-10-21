import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

/* type TooltipPayload = ReadonlyArray<any>;

type Coordinate = {
  x: number,
  y: number,
};

type PieSectorData = {
  percent?: number,
  name?: string | number,
  midAngle?: number,
  middleRadius?: number,
  tooltipPosition?: Coordinate,
  value?: number,
  paddingAngle?: number,
  dataKey?: string,
  payload?: any,
  tooltipPayload?: ReadonlyArray<TooltipPayload>,
};

type GeometrySector = {
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number,
};

type PieLabelProps = PieSectorData &
  GeometrySector & {
    tooltipPayload?: any,
  }; */

/* const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
]; */

const RADIAN = Math.PI / 180;
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#5dbbe3",
  "#f734f1",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartStat = ({ chartData }) => {
  const mappedData = chartData.map((item) => {
    return { name: item.category, value: item.revenue };
  });

  // console.log(mappedData);
  return (
    <ResponsiveContainer className="z-100" width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={mappedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          // label
        >
          {mappedData.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartStat;
