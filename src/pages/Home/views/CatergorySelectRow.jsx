import React from "react";

const CatergorySelectRow = () => {
  return (
    <div className="flex overflow-scroll mx-4 mt-4">
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
            <img className="rounded-full w-[48px] h-[48px] object-cover" src="./western.jpg" alt="" />
          <span className="font-semibold text-sm">Western</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src="./nonhalal.jpg" alt="" />
          <span className="font-semibold text-sm">Non-halal</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src="./malaysian.jpg" alt="" />
          <span className="font-semibold text-sm">Malaysia</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src="./Healthy.jpg" alt="" />
          <span className="font-semibold text-sm">Healthy</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src="./berverages.jpg" alt="" />
          <span className="font-semibold text-sm">Berverages</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src="./bubbletea.jpg" alt="" />
          <span className="font-semibold text-sm">Bubble Tea</span>
        </div>
      </div>
      <div className="p-2 flex justify-center min-w-24">
        <div className="text-center flex flex-col max-h-[150px] items-center gap-2">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src="./coffeeandtea.jpg" alt="" />
          <span className="font-semibold text-sm">Coffee </span>
        </div>
      </div>
    </div>
  );
};

export default CatergorySelectRow;
