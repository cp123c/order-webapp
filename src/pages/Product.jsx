import React from "react";
import { ArrowLeft, Share2, Users, Search } from "lucide-react";
import ListRender from "@components/ListRender";
import FoodListRender from "@components/FoodListRender";
import { DATA_1, DATA_2 } from "../dummyData/listData";
function Product() {
  return (
    <div className="relative">
      {/* top section */}
      <div className="fixed top-0 bg-slate-500 w-full h-40">
        <div className="w-full h-full overflow-hidden">
          <img className="object-cover" src="./home3.jpg" alt="" />
        </div>
        <div className="fixed top-0 w-full flex justify-between p-5">
          <div className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1">
            <ArrowLeft />
          </div>
          <div className="flex gap-2">
            <div className="rounded-full bg-white flex gap-2 items-center px-3">
              <Users size={16} />{" "}
              <span className="text-sm font-semibold">Group order</span>
            </div>
            <div className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1">
              <Share2 />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-32">
        <div className="pb-[500px]">
          <div className="w-full pb-2 bg-gradient-to-t from-white to-black/0">
            <div className="mx-5 bg-white rounded-lg p-3 shadow-md">
              <div className="text-lg font-semibold border-b py-3">
                <div className=" ">
                  KyoChon Korean Fried Chicken - Taman XXX
                </div>
              </div>
              <div className="  border-b py-3">rating</div>
              <div className="  border-b py-3">4.1km</div>
              <div className="  border-b py-3">offer</div>
              <div className="   py-3">get unlimited now</div>
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="mx-5">
              <ListRender title="For you" data={DATA_1} />
              <FoodListRender data={DATA_2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
