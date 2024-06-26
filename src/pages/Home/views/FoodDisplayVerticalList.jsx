import React from "react";
import { Tag } from "lucide-react";
import { formatCurrencies } from "@utils/utils";
import { FoodproductActions } from "@store/FoodProduct-slice";
import { BottomSheetActions } from "@store/BottomSheet-slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BottomSheet from "@components/BottomSheet";

const ItemBox = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleHandler = () => {
    const { outlet } = data;
    dispatch(BottomSheetActions.toggle());
    dispatch(FoodproductActions.getOutlet(outlet));
  };

  const goProductDetailPage = ({ id }) => {
    navigate(`/products/${id}`);
  };

  const {
    id,
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
      onClick={
        outlet.length > 1 ? toggleHandler : () => goProductDetailPage(id)
      }
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

const OutletList = () => {
  const allOutlet = useSelector((state) => state.foodproduct.allOutlet);
  return (
    <>
      <div className="flex justify-between border-b-2 py-5 px-3">
        <div className="flex flex-col">
          <div className="text-xs">PROMO</div>
          <div className="font-semibold">{allOutlet[0]?.foodName}</div>
          <div className="text-xs">{allOutlet[0]?.catergory}</div>
        </div>
        <div className="w-[5.2rem] flex items-start justify-center pt-1">
          <img className="rounded-xl" src={allOutlet[0]?.image} alt="" />
        </div>
      </div>
      <div className="max-h-[450px] overflow-scroll px-3">
        {allOutlet?.length > 1
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
    </>
  );
};

const FoodDisplayVerticalList = ({ data }) => {
  const showModal = useSelector((state) => state.bottomSheet.isToggle);
  const dispatch = useDispatch();
  return (
    <>
      {data.map((data) => {
        return <ItemBox key={data.id} data={data} />;
      })}
      <BottomSheet
        visible={showModal}
        onClose={() => dispatch(BottomSheetActions.toggle())}
      >
        <OutletList />
      </BottomSheet>
    </>
  );
};

export default FoodDisplayVerticalList;
