import React from "react";
import { motion } from "framer-motion";
import { NumberTicker } from "./magicui/number-ticker";
import { TextAnimate } from "./magicui/text-animate";
import violetEye from "/violet_eye.png";
import { useNavigate } from "react-router-dom";

const waveAnimation = {
  y: [0, -10, 0, 10, 0], // Moves up and down
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "linear",
  },
};

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative  overflow-hidden">
      <div className="container mx-auto px-5 sm:px-10 lg:px-20 py-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Hero Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-base lg:mt-0   font-semibold text-accent lg:mb-0 text-black">
              Welcome to
            </h3>
            <h1 className="text-3xl sm:text-5xl lg:text-[75px] font-bold mb-4 lg:leading-None ">
              <span className="text-[#401D82] ">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  duration={1}
                  className=" mt-4 mb-0"
                >
                  EyeDeep-Net
                </TextAnimate>
              </span>
            </h1>
            <h1 className="text-3xl sm:text-5xl lg:text-[75px] font-bold mb-4 lg:leading-None ">
              AI-Powered Retinal Disease Diagnosis
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-10">
              Uses deep learning to detect and classify retinal diseases like
              DR, MH, and ODC with high accuracy.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col mt-14 sm:flex-row mx-16 lg:mx-0 gap-4 justify-center lg:justify-start">
              <button
                className="detect-btn"
                onClick={() => navigate("/predict")}
              >
                <span className="detect-text">Detect Retinal Disease</span>
              </button>
            </div>

            <div className="mt-20 flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center lg:justify-start">
              {[
                { label: "Accuracy", value: 94 },
                { label: "Precision", value: 94 },
                { label: "Recall", value: 93 },
                { label: "FScore", value: 93 },
              ].map((stat, index) => (
                <div key={index}>
                  <h2 className="text-4xl sm:text-5xl font-bold text-cyan-600">
                    <NumberTicker
                      value={stat.value}
                      className="text-cyan-600"
                    />
                    +
                  </h2>
                  <p className="text-lg font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image with Smooth Wave Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img
              src={violetEye}
              alt="Eye Deep Net"
              className="w-10/12 sm:w-3/4 lg:w-full max-w-lg rounded-lg shadow-2xl bg-[#401D82] violet_eye shadow-[0_0_20px_5px_rgba(138,43,226,0.8),0_0_40px_10px_rgba(75,0,130,0.6)]"
              animate={waveAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
