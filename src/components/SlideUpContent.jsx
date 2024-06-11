import React, { useEffect, useRef } from "react";
import { Tag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { sliceUpContent } from "@store/slideUpContent-slice";
import { formatCurrencies } from "@utils/utils";

const SlideUpContent = () => {
  const ref = useRef(null);
  const showSlideUp = useSelector((state) => state.slideUp.isToggle);
  const allOutlet = useSelector((state) => state.slideUp.allOutlet);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(sliceUpContent.toggle());
  };

  useEffect(() => {
    if (showSlideUp) {
      document.body.style.overflow="hidden";
      window.scrollTo({bottom:0,behavior: "smooth"})
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }else{
        document.body.style.overflow="auto";
    }
  }, [showSlideUp]);

  return (
    <>
      {showSlideUp ? (
        <>
          <div
            ref={ref}
            className="absolute z-30 bottom-0 bg-white rounded-lg border w-full min-h-64 px-3 overflow-hidden"
          >
            <div className="flex justify-between border-b-2 py-5">
              <div className="flex flex-col">
                <div className="text-xs">PROMO</div>
                <div className="font-semibold">{allOutlet[0].foodName}</div>
                <div className="text-xs">{allOutlet[0].catergory}</div>
              </div>
              <div className="w-[5.2rem] flex items-start justify-center pt-1">
                <img className="rounded-xl" src={allOutlet[0].image} alt="" />
              </div>
            </div>
            <div className="max-h-[450px] overflow-scroll">
              {allOutlet.length > 1
                ? allOutlet.map((data) => {
                    const {
                      catergory,
                      deliveryPrice,
                      deliveryTime,
                      freeDelivery,
                      id,
                      promo,
                      rating,
                      saver,
                      place,
                    } = data;
                    return (
                      <div className="mt-5 pb-2 flex h-[130px]" key={id}>
                        <div className="px-2 flex flex-col gap-1">
                          <div>
                            <span className="font-bold">{place}</span>
                          </div>
                          <div className="flex gap-1 text-sm">
                            <span className="font-semibold">{rating}</span>
                            <span>&#183;</span>
                            <span className=" text-slate-500 tracking-tight">
                              {catergory}
                            </span>
                          </div>
                          <div className="flex gap-1 text-sm">
                            {freeDelivery ? (
                              <>
                                <span className=" text-orange-400 font-semibold">
                                  Free
                                </span>
                                <s className="text-slate-500">
                                  RM {formatCurrencies(deliveryPrice)}
                                </s>
                                <span>&#183;</span>
                              </>
                            ) : (
                              <>
                                <s className="text-slate-500">
                                  RM {formatCurrencies(deliveryPrice)}
                                </s>
                                <span>&#183;</span>
                              </>
                            )}

                            <span className="font-semibold tracking-tight">
                              {deliveryTime}
                            </span>
                          </div>
                          {saver ? (
                            <div className="rounded-lg bg-[#e2fffc] px-1 inline text-xs">
                              Saver Delivery Available
                            </div>
                          ) : (
                            ""
                          )}
                          {promo ? (
                            <div className="flex">
                              <div className="border rounded-lg px-2 py-1 font-semibold text-xs flex items-center gap-1">
                                <Tag size={16} strokeWidth={1} /> Delivery Promo
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div
            className="absolute z-20 left-0 top-0 bg-black opacity-50 h-full w-full overflow-hidden"
            onClick={toggleHandler}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default SlideUpContent;
