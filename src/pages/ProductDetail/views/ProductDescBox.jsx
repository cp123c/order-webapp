import React from "react";
import { Star, Tags, Infinity } from "lucide-react";

function ProductDescBox() {
  return (
    <div className="w-full pb-2 bg-gradient-to-t from-white to-black/0">
      <div className="mx-5 bg-white rounded-lg p-3 shadow-md">
        <div className="text-lg font-semibold border-b py-3">
          <div className="">KyoChon Korean Fried Chicken - Taman XXX</div>
        </div>
        <div className="border-b py-3 flex items-center gap-1">
          <span>
            <Star size="16" />
          </span>
          <span className="font-bold">4.7</span>
          <span className="font-light">(461)</span> <span>&#183;</span> Ratings
          and reviews
        </div>
        <div className="border-b py-3">
          <div>
            <span className="font-bold">7.5 km</span>
            <span> (From 45 mins)</span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-xs">Deliver now</span> |{" "}
            <div className="flex items-center gap-1 text-sm">
              <span className="text-orange-400">RM3.00</span>
              <span>
                <s>RM 6.00</s>
              </span>
            </div>{" "}
          </div>
        </div>
        <div className="border-b py-3 flex items-center gap-1">
          <span className="text-orange-400">
            <Tags />
          </span>{" "}
          Enjoy discount on items
        </div>
        <div className="py-3 bg-red-100 px-2">
          <div className="flex items-center gap-2">
            <div className="">
              <Infinity />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-sm">Get GrabUnlimited now</div>
              <div className="text-sm">Enjoy free delivery (up to RM3.00)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescBox;
