import React from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

const labelsV: string[] = ["ODC", "Normal", "MH", "DR"];
const labelsH: string[] = ["DR", "MH", "Normal", "ODC"];

const getColor = (value: number, min: number, max: number): string => {
  const scale = (value - min) / (max - min);
  const r = Math.round(100 * (1 - scale));
  const g = Math.round(234 * scale);
  return `rgb(${r}, ${g}, 100)`;
};

interface ConfusionMatrixProps {
  matrix: number[][];
  title: string;
}

const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({ matrix, title }) => {
  const values: number[] = matrix.flat();
  const min: number = Math.min(...values);
  const max: number = Math.max(...values);

  return (
    <div className="flex flex-col items-center w-full max-w-[600px] px-4 md:px-0 ">
      <h2 className="text-xl font-bold mb-4 text-center w-full lg:ml-28">{title}</h2>
      <div className="flex flex-row items-center">
        <div className="rotate-[270deg] flex flex-col items-center">
          <div className="text-lg font-semibold rounded-md w-24 text-center">True Class</div>
        </div>
        <div className="flex flex-col justify-center">
          {labelsV.map((label, idx) => (
            <div
              key={idx}
              className="h-12 md:h-16 flex items-center justify-end pr-2 text-xs md:text-sm font-semibold"
            >
              {label}
            </div>
          ))}
        </div>
        <NeonGradientCard
          className="w-full max-w-[90vw] md:max-w-[600px] p-0 items-center justify-center text-center"
          neonColors={{ firstColor: "#FF00FF", secondColor: "#00FF00" }}
        >
          <div className="grid grid-cols-4">
            {matrix.map((row, i) =>
              row.map((value, j) => (
                <div
                  key={`${i}-${j}`}
                  className="w-10 h-10 md:w-24 md:h-24 flex items-center justify-center text-white font-bold transition-all transform hover:scale-150 hover:z-10 hover:shadow-lg hover:shadow-blue-200 hover:rounded-lg hover:cursor-pointer"
                  style={{ backgroundColor: getColor(value, min, max) }}
                >
                  {value}
                </div>
              ))
            )}
          </div>
        </NeonGradientCard>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex justify-center w-full max-w-xs md:max-w-sm ml-0 ml-28">
          {labelsH.map((label, idx) => (
            <div key={idx} className="text-xs md:text-sm font-semibold md:ml-16 ">
              {label}
            </div>
          ))}
        </div>
        <div className="text-lg font-semibold mt-2 ml-36 ">Predicted Class</div>
      </div>
    </div>
  );
};

export default ConfusionMatrix;