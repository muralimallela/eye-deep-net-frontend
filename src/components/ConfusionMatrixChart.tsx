import React from "react";
import ConfusionMatrix from "./ConfusionMatrix";

const sdaMatrix: number[][] = [
  [203, 151, 287, 674],
  [78, 1, 1608, 29],
  [111, 1074, 37, 97],
  [1379, 66, 127, 79],
];
const adamMatrix: number[][] = [
  [206, 215, 106, 788],
  [75, 45, 1563, 30],
  [30, 1212, 1, 76],
  [1409, 147, 39, 56],
];
const extensionMatrix: number[][] = [
  [69, 130, 0, 1164],
  [1, 0, 1715, 0],
  [27, 1264, 1, 27],
  [1565, 55, 2, 29],
];

const App: React.FC = () => {
  return (
    <>
      <div className="container flex flex-wrap gap-20 lg:gap-12  justify-start items-start mb-20 mt-20">
        <div className="ml-0 lg:ml-36 ">
          <ConfusionMatrix
            matrix={sdaMatrix}
            title="EyeNet SGD Testing Confusion Matrix"
          />
        </div>
        <ConfusionMatrix
          matrix={adamMatrix}
          title="EyeNet Adam Testing Confusion Matrix"
        />
      </div>
      <div className="container flex flex-wrap gap-24  justify-center items-start mb-20 mt-44">
        <ConfusionMatrix
          matrix={extensionMatrix}
          title="Extension with Adam & Valid Testing Confusion Matrix"
        />
      </div>
    </>
  );
};

export default App;
