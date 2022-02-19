import React, { FC } from "react";

export const Css3Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
    >
      <path d="M39,40l-14,4l-14,-4l-3,-34l34,0c-1,11.333 -2,22.667 -3,34Zm0.816,-32l-29.632,0l2.687,30.455l12.129,3.465l12.129,-3.465l2.687,-30.455Zm-23.016,20l4,0l0.1,2.5l4.1,1.4l4.1,-1.4l0.3,-4.5l-8.8,0l-0.2,-4l9.2,0l0.3,-4l-13.8,0l-0.3,-4l18.3,0l-0.5,8l-0.7,11.5l-7.9,2.6l-7.9,-2.6l-0.3,-5.5Z" />
    </svg>
  );
};
