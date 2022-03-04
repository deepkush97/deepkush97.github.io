import React, { FC } from "react";
import { classes } from "../../configs/classnames";
import { InfoSection } from "../InfoSection";
import { experiences } from "../../configs/data";

export const ExperienceSection = () => {
  const [openTab, setOpenTab] = React.useState<number>(0);
  const selected = experiences[openTab];
  return (
    <InfoSection id="experience">
      <div className="flex h-full flex-col md:flex-row mt-8 px-6 md:px-32 pt-8">
        <div className="flex flex-row md:flex-col justify-start md:h-96 overflow-auto">
          {experiences.map((value, index) => (
            <TabButton
              isActive={openTab === index}
              onClick={() => setOpenTab(index)}
              title={value.timePeriod}
              key={index}
            />
          ))}
        </div>
        <div className="w-full">
          <div
            className={`relative flex flex-col min-w-0 break-words ${classes.background.transparentAccent} border ${classes.border} w-full mb-6 shadow-lg`}
          >
            <div className="px-4 py-5 flex-auto">
              <TabContent item={selected} />
            </div>
          </div>
        </div>
      </div>
    </InfoSection>
  );
};

interface TabButtonProps {
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const TabButton: FC<TabButtonProps> = ({ isActive, title, onClick }) => {
  return (
    <button
      className={`${classes.background.hoverTransparentAccent} ${
        classes.textAccent
      }  text-sm font-mono py-2 px-2 md:px-4 border duration-200 ${
        classes.border
      } ${
        isActive
          ? ` ${classes.background.transparentAccent}`
          : " bg-transparent "
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

interface TabContentProps {
  item: {
    companyName: string;
    location: string;
    designation: string;
    timePeriod: string;
    mentionablePoints: string[];
  };
}

export const TabContent: FC<TabContentProps> = ({
  item: { companyName, designation, location, mentionablePoints, timePeriod },
}) => {
  return (
    <>
      <div
        className={`flex items-center justify-between border-b-2 ${classes.border} pb-2 mb-4`}
      >
        <div className="flex flex-col w-full justify-between md:flex-row">
          <div className={`flex flex-col text-base ${classes.textWhite}`}>
            <span className={classes.textAccent}>{designation}</span>
            <span className="text-sm">{companyName}</span>
          </div>
          <div className={`flex text-sm flex-col justify-center`}>
            <span>{location}</span>
            <span>{timePeriod}</span>
          </div>
        </div>
      </div>
      <ul className="flex w-full flex-col">
        {mentionablePoints.map((point, pointIndex) => (
          <li key={pointIndex} className="mb-1">
            <span className={classes.textAccent}>-</span> {point}
          </li>
        ))}
      </ul>
    </>
  );
};
