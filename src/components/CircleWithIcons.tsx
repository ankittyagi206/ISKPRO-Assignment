import React from "react";
import CircularIconWithText from "./CircularIconWithText";

const CircleWithIcons = ({ subheading, icons, ctaText }) => {
  const generateIconPositions = (icons) => {
    const iconWithPositions = [];
    const angle = (2 * Math.PI) / icons.length;

    for (let i = 0; i < icons.length; i++) {
      const x = Math.cos(i * angle);
      const y = Math.sin(i * angle);
      const iconData = { ...icons[i], positionX: x, positionY: y };
      iconWithPositions.push(iconData);
    }

    return iconWithPositions;
  };

  const iconPositions = generateIconPositions(icons);

  return (
    <div className="relative w-[500px] h-[500px] ">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-full flex justify-center items-center flex-col ">
        <h2 className="text-xl w-60 flex-wrap text-center">{subheading}</h2>
        <button className="border-2 border-[#7d1f03] p-1 m-6 text-[#7d1f03]">
          {ctaText}
        </button>
      </div>
      {iconPositions.map(
        ({ positionX, positionY, textWithIcon, iconUrl }, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: `calc(40% + ${positionX * 50}%)`,
              top: `calc(40% + ${positionY * 50}%)`,
            }}
          >
            <h1
              style={{
                position: "absolute",
                left: `${positionX < 0 ? "-150px" : "150px"}`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {`${textWithIcon}`}
            </h1>
            <CircularIconWithText iconName={textWithIcon} iconUrl={iconUrl} />
          </div>
        )
      )}
    </div>
  );
};

export default CircleWithIcons;
