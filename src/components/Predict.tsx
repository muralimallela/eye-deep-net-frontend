import { useState } from "react";
import { Image } from "@heroui/react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

const Predict: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Generate image preview
      uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      // Map abbreviations to full names
      const fullNames: Record<string, string> = {
        DR: "Diabetic Retinopathy",
        MH: "Macular Hole",
        Normal: "Normal",
        ODC: "Optic Disc Cupping",
      };
      setPrediction(fullNames[data.predicted_class] || data.predicted_class);
    } catch (error) {
      console.error("Error predicting image", error);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setPrediction(null);
  };

  return (
    <div className="container mx-auto p-4 lg:p-24 ">
      <div className="flex flex-col lg:flex-row items-start justify-center lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Upload Section */}
        <div className="w-full lg:w-auto flex flex-col items-center space-y-4">
          {!imagePreview ? (
            <label
              htmlFor="file"
              className="w-[350px] max-w-[350px] w-[350px] h-[250px] flex flex-col items-center justify-center space-y-5 cursor-pointer border-2 border-dashed border-gray-300 bg-white p-4 rounded-[30px] shadow-lg hover:border-blue-400 transition-colors"
            >
              <NeonGradientCard className="">
                <div className="flex flex-col items-center justify-center">
                  <AnimatedGradientText className="text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-20 text-gray-600"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      ></path>
                    </svg>
                  </AnimatedGradientText>
                  <span className="text-black font-normal text-center">
                    <AnimatedGradientText className="text-sm font-medium">
                      Click to upload image
                    </AnimatedGradientText>
                  </span>
                </div>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </NeonGradientCard>
            </label>
          ) : (
            <NeonGradientCard className="w-full max-w-[350px] flex flex-col items-center justify-center ">
              {/* <div className="w-full max-w-[350px] flex flex-col items-center justify-center "> */}
              <Image
                alt="Uploaded Image"
                src={imagePreview}
                className="w-full h-auto max-h-[300px] object-cover"
              />
              {/* </div> */}
            </NeonGradientCard>
          )}

          {selectedFile && (
            <p className="text-gray-700 text-sm text-center break-all max-w-[350px]">
              Selected File: {selectedFile.name}
            </p>
          )}

          {imagePreview && (
            <button
              onClick={handleReset}
              className="mt-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition w-full max-w-[350px]"
            >
              Upload Another Image
            </button>
          )}
        </div>

        {/* Prediction Result */}
        {prediction && (
          <NeonGradientCard className="max-w-[700px] p-0 items-center justify-center  text-center">
            <div className="lg:w-full  flex flex-col items-center justify-center space-y-4 p-0 ">
              <h1 className="text-lg font-semibold text-center">
                Prediction Result
              </h1>
              <p className="mt-2 text-[#401D82] font-bold text-3xl text-center">
                {prediction}
              </p>
              <p className="text-gray-700 text-base text-justify ">
                {prediction === "Diabetic Retinopathy" &&
                  "Diabetic Retinopathy is a complication of diabetes that affects the eyes. It occurs due to damage to the blood vessels of the retina, leading to vision impairment and, in severe cases, blindness. Early symptoms may include floaters, blurred vision, or dark areas in vision. Managing blood sugar levels and regular eye check-ups can help slow its progression."}
                {prediction === "Macular Hole" &&
                  "A Macular Hole is a small break in the macula, the central part of the retina responsible for sharp vision. This condition can cause blurred and distorted central vision, making daily activities like reading and recognizing faces difficult. It is often related to aging but can also result from trauma or other eye disorders. Vitrectomy surgery is a common treatment to repair the hole."}
                {prediction === "Normal" &&
                  "The retinal image appears normal with no detected abnormalities. A healthy retina is essential for clear vision, and maintaining eye health through a balanced diet, regular eye check-ups, and proper protection against UV light can prevent various eye conditions."}
                {prediction === "Optic Disc Cupping" &&
                  "Optic Disc Cupping refers to an increase in the cup-to-disc ratio of the optic nerve head, often associated with glaucoma. This condition results from the gradual loss of optic nerve fibers, leading to peripheral vision loss and, eventually, blindness if left untreated. Regular eye exams, intraocular pressure control, and medication can help slow disease progression."}
              </p>
            </div>
          </NeonGradientCard>
        )}
      </div>
    </div>
  );
};

export default Predict;
