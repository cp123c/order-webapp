import React from "react";
import { twMerge } from "tailwind-merge";

const EachCaterBox = ({ title, description, bgColor = "bg-[#ffd2cb]" }) => {
  return (
    <div className={twMerge("p-3 col-span-3 leading-3 rounded-xl", bgColor)}>
      <div>
        <span className="font-bold text-sm">{title}</span>
      </div>
      <span className="text-xs">{description}</span>
    </div>
  );
};

const ColumnSelectList = () => {
  return (
    <div className="grid grid-cols-6 gap-3 mt-5">
      <EachCaterBox
        title="Near Me"
        description="Get it quick"
        bgColor="bg-[#ffd2cb]"
      />
      <EachCaterBox
        title="28% Off"
        description="Pek Hot Deals"
        bgColor="bg-[#b8e5e0]"
      />
      <EachCaterBox
        title="5-Star Restaurants"
        description="Must-try"
        bgColor="bg-[#ffec8f]"
      />
      <EachCaterBox
        title="Grab Signatures"
        description="2x GrabRewards"
        bgColor="bg-[#e6e9f0]"
      />
    </div>
  );
};

export default ColumnSelectList;
