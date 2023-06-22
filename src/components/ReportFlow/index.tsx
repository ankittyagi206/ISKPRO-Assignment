import React, { useEffect, useState } from "react";
import CircularIconWithText from "../CircularIconWithText";
import CircleWithIcons from "../CircleWithIcons";

type Icon = {
  // Define the type/interface for each icon object
  icon: string;
  text: string;
};

type ReportFlowProps = {
  data: {
    heading: string;
    subheading: string;
    icons: Icon[]; // Update the type to use the defined Icon type/interface
    ctaText: string;
  };
};

const ReportFlow = ({ data }: ReportFlowProps) => {
  const { heading, subheading, icons, ctaText } = data;
  const [iconNumber, setIconNumber] = useState(0);
  const [iconData, setIconData] = useState<Icon[]>([]);

  useEffect(() => {
    const data = icons.slice(0, iconNumber);
    setIconData(data);
  }, [iconNumber, icons]);

  const increaseIconNumber = () => {
    if (icons.length > iconNumber) setIconNumber(iconNumber + 1);
  };

  const decreaseIconNumber = () => {
    setIconNumber(Math.max(iconNumber - 1, 0));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-[#000080] font-bold text-4xl mt-6">{heading}</h1>
      <div className="flex flex-row gap-2 mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={increaseIconNumber}
        >
          Increase
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={decreaseIconNumber}
        >
          Decrease
        </button>
      </div>

      <div className="flex flex-col justify-center items-center flex-grow">
        <CircleWithIcons
          subheading={subheading}
          ctaText={ctaText}
          icons={iconData}
        />
      </div>
    </div>
  );
};

export default ReportFlow;
