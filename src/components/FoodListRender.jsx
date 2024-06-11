import React from "react";
import { Tag } from "lucide-react";
import { formatCurrencies } from "@utils/utils";
import { sliceUpContent } from "@store/slideUpContent-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Items = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleHandler = () => {
    const { outlet } = data;
    dispatch(sliceUpContent.toggle());
    dispatch(sliceUpContent.getOutlet(outlet));
  };

  const goProductDetailPage = () => {
    navigate("/products");
  };

  const {
    image,
    foodName,
    rating,
    catergory,
    freeDelivery = false,
    deliveryPrice,
    saver = false,
    promo = false,
    deliveryTime,
    outlet,
  } = data;
  return (
    <div
      className="mt-5 pb-2 flex"
      onClick={outlet.length > 1 ? toggleHandler : goProductDetailPage}
    >
      <div className="w-[7rem] h-[4rem] flex items-start justify-center pt-1">
        <img src={image} className="rounded-xl" alt="" />
      </div>
      <div className="px-2 flex flex-col gap-1">
        <div>
          <span className="font-bold">{foodName}</span>
        </div>
        <div className="flex gap-1 text-sm">
          <span className="font-semibold">{rating}</span>
          <span>&#183;</span>
          <span className=" text-slate-500 tracking-tight">{catergory}</span>
        </div>
        <div className="flex gap-1 text-sm">
          {freeDelivery ? (
            <>
              <span className=" text-orange-400 font-semibold">Free</span>
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

          <span className="font-semibold tracking-tight">{deliveryTime}</span>
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
};

const FoodListRender = ({ data }) => {
  return (
    <>
      {data.map((data) => {
        return <Items key={data.id} data={data} />;
      })}
    </>
  );
};

export default FoodListRender;
