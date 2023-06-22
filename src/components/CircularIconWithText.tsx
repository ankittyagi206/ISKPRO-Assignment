import React from "react";

type CircularIconWithTextProps = {
  iconUrl: string;
  iconName: string;
};

const CircularIconWithText = ({
  iconUrl,
  iconName,
}: CircularIconWithTextProps) => {
  return (
    <div className="border-[5px] border-[#1e78d1] rounded-full p-12 h-8 w-8 flex justify-center items-center z-10 bg-white overflow-hidden hover:animate-bounce cursor-pointer">
      <img
        loading="lazy"
        src={iconUrl}
        alt={iconName}
        className="max-h-20 max-w-lg object-cover"
      />
    </div>
  );
};

export default CircularIconWithText;
