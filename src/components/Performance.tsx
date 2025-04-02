import React from "react";
import { Bar } from "recharts";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const data = [
  {
    name: "EyeNet with SGD",
    Accuracy: 78.903516,
    Precision: 78.941689,
    Recall: 77.477876,
    F1Score: 77.373954,
  },
  {
    name: "EyeNet with Adam",
    Accuracy: 82.852858,
    Precision: 82.761383,
    Recall: 82.059470,
    F1Score: 81.716741,
  },
  {
    name: "Extension with Adam & Valid",
    Accuracy: 94.317614,
    Precision: 94.110863,
    Recall: 93.857464,
    F1Score: 93.858996,
  },
];

const AlgorithmPerformanceChart: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-20">
      <NeonGradientCard
                  className="items-center justify-center text-center"
                  neonColors={{ firstColor: "#f1c40f", secondColor: "#2ecc71" }}
                >
      <h2 className="text-xl font-bold mb-4 text-center">Algorithm Performance Comparison</h2>
      <ResponsiveContainer width="100%" height={400}>
        
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={0} textAnchor="middle" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Accuracy" fill="#3182CE" />
          <Bar dataKey="Precision" fill="#38A169" />
          <Bar dataKey="Recall" fill="#E53E3E" />
          <Bar dataKey="F1Score" fill="#D69E2E" />
        </BarChart>
       
      </ResponsiveContainer>
      </NeonGradientCard>
    </div>
  );
};

export default AlgorithmPerformanceChart;