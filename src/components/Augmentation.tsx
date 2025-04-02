import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

type ChartProps = {
  title: string;
  data: { name: string; count: number }[];
};

const Chart = ({ title, data }: ChartProps) => {
  return (
    <div className="lg:w-[800px] h-96 mt-28 mb-28">
      <NeonGradientCard
        className="items-center justify-center text-center w-full"
        neonColors={{ firstColor: "#9b59b6", secondColor: "#3498db" }}
      >
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis dataKey="name" className="text-sm" />
            <YAxis
              className=""
              label={{ value: "Count", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <h2 className="text-lg font-semibold text-center mt-4">{title}</h2>
      </NeonGradientCard>
    </div>
  );
};

const dataset1 = [
  { name: "DR", count: 380 },
  { name: "MH", count: 320 },
  { name: "Normal", count: 410 },
  { name: "ODC", count: 280 },
];

const dataset2 = [
  { name: "DR", count: 8230 },
  { name: "MH", count: 6624 },
  { name: "Normal", count: 8655 },
  { name: "ODC", count: 6492 },
];
const Augmentation = () => {
  return (
    <div className="p-6  min-h-screen flex flex-wrap gap-10 items-center justify-center">
      <Chart title="Dataset Class Label Graph Before Augmentation" data={dataset1} />
      <Chart title="Dataset Class Label Graph After Augmentation" data={dataset2} />
    </div>
  );
};

export default Augmentation;
