import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const data = Array.from({ length: 20 }, (_, i) => ({
  epoch: i + 1,
  EyeNet_SGD: [
    0.3634074, 0.4955926, 0.528037, 0.5557778, 0.57659256, 0.5933704, 0.6095926,
    0.6112222, 0.61792594, 0.6308148, 0.6485185, 0.6522963, 0.66507405, 0.669,
    0.6774074, 0.6857037, 0.68807405, 0.6971111, 0.7035556, 0.7057037,
  ][i],
  EyeNet_Adam: [
    0.66951853, 0.7082222, 0.728, 0.746, 0.7594815, 0.76674074, 0.7808889,
    0.7879259, 0.7925185, 0.80214816, 0.80633336, 0.8154815, 0.8195556,
    0.8201111, 0.8281481, 0.83455557, 0.8421481, 0.8421852, 0.84125924,
    0.8479259,
  ][i],
  Extension_Adam_Valid: [
    0.62303704, 0.7129259, 0.76766664, 0.80344445, 0.8376667, 0.86314815,
    0.88174075, 0.89214814, 0.8995926, 0.9061111, 0.9108148, 0.9157778,
    0.91866666, 0.91844445, 0.9221111, 0.9244074, 0.9275926, 0.9265185,
    0.9301481, 0.92896295,
  ][i],
}));

const AccuracyVsEpochChart: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-20">
      <NeonGradientCard
        className="items-center justify-center text-center"
        neonColors={{ firstColor: "#2ecc71", secondColor: "#2980b9" }}
      >
        
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis
              dataKey="epoch"
              label={{
                value: "Epoch",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              label={{ value: "Accuracy", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="EyeNet_SGD"
              stroke="#3182CE"
              name="EyeNet SGD"
            />
            <Line
              type="monotone"
              dataKey="EyeNet_Adam"
              stroke="#38A169"
              name="EyeNet Adam"
            />
            <Line
              type="monotone"
              dataKey="Extension_Adam_Valid"
              stroke="#E53E3E"
              name="Extension Adam & Valid"
            />
          </LineChart>
        </ResponsiveContainer>
      </NeonGradientCard>
    </div>
  );
};

export default AccuracyVsEpochChart;
