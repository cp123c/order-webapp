import React from "react";

function SkeletonLoading({ count = 1, isVertical = false }) {
  let styles = "";
  if (isVertical) {
    styles = "col-span-12";
  } else {
    styles = "col-span-6";
  }
  return (
    <div className="grid grid-cols-12 gap-4 my-3">
      {Array.from(Array(count), (e, i) => {
        return (
          <div className={`${styles} animate-pulse`} key={i}>
            <div className="relative">
              <div className="w-full rounded-xl bg-gray-200 h-[160px] "></div>
            </div>
            <div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
              </div>
              <div className="flex items-center gap-2 h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkeletonLoading;
