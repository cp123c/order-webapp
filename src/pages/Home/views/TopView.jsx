import React from "react";
import { ArrowLeft, Heart, ReceiptText, Search } from "lucide-react";

const TopView = () => {
  return (
    <div className="absolute bottom-[5px] inset-x-0 py-5 px-7">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ArrowLeft />
            <div className="flex flex-col text-white">
              <span className="tracking-tighter font-extralight text-sm">
                DELIVERY TO
              </span>
              <span className="font-semibold">USERNAME</span>
            </div>
          </div>
          <div className="flex gap-3 text-white">
            <div className="rounded-full bg-slate-300/50 p-2 ">
              <Heart />
            </div>
            <div className="rounded-full bg-slate-300/50 p-2">
              <ReceiptText />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-x-0">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search />
            </span>
            <input
              className="placeholder:text-sm block bg-white w-full rounded-md py-3 pl-11 pr-3 shadow-md focus:outline-none sm:text-sm"
              placeholder="KyoChon Korean Fried Chicken"
              type="text"
              name="search"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 border border-l rounded-tr-md rounded-br-md bg-transparent font-semibold text-sm">
              Search
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopView;
