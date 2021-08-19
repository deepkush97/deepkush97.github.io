import React, { FC } from "react";
import { classes } from "../../configs/classnames";
import { InfoSection } from "../InfoSection";
import { experiences } from "../../configs/data";

type ExperienceKeys = keyof typeof experiences;

export const ExperienceSection = () => {
  const [openTab, setOpenTab] = React.useState<ExperienceKeys>("first");
  const selected = experiences[openTab];
  return (
    <InfoSection id="experience">
      <div className="flex h-full flex-row mt-8 px-32 pt-8">
        <div className="flex flex-col justify-start h-96 overflow-y-auto">
          {Object.entries(experiences).map(([key, value]) => (
            <TabButton
              isActive={openTab === key}
              onClick={() => setOpenTab(key as ExperienceKeys)}
              title={value.timePeriod}
              key={key}
            />
          ))}
        </div>
        <div className="w-full">
          <div
            className={`relative flex flex-col min-w-0 break-words ${classes.background.transparentAccent} border ${classes.border} w-full mb-6 shadow-lg`}
          >
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <TabContent item={selected} />
              </div>
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
      }  text-sm font-mono py-2 px-4 border ${classes.border} ${
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
        <div className="flex flex-col">
          <div className={classes.textWhite}>
            <span className={`text-base`}>{companyName}</span> |{" "}
            <span className="text-base">{designation}</span>
          </div>
          <p className="text-sm">{location}</p>
        </div>
        <span className="text-sm">{timePeriod}</span>
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
