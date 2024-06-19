import React from "react";
import { Tags, Plus } from "lucide-react";
import { formatCurrencies } from "@utils/utils";
import { BottomSheetActions } from "@store/BottomSheet-slice";
import { useDispatch } from "react-redux";

const calculateDiscountedPrice = (price, discountPercentage) => {
  return formatCurrencies(price * (1 - discountPercentage / 100));
};

const Item = ({ data, vertical }) => {
  const dispatch = useDispatch();
  const openOptionHandler = () => {
    dispatch(BottomSheetActions.toggle());
  };

  const { image, name, promo, price, popular } = data;

  if (vertical) {
    return (
      <>
        <div
          className="col-span-12 flex border-b pb-3"
          onClick={openOptionHandler}
        >
          <div className="relative w-32">
            <div className="w-full rounded-xl">
              <img src={image} className="w-full rounded-xl" alt="" />
            </div>
            {/* {popular ? (
            <div className="absolute top-2 left-2 rounded-full bg-green-600 px-2 flex items-center justify-center">
              <span className="text-xs leading-snug text-white">
                most order
              </span>
            </div>
          ) : null} */}
          </div>
          <div className="relative w-full pl-3">
            <div>
              <span className="text-sm">{name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">
                {promo
                  ? calculateDiscountedPrice(formatCurrencies(price), promo)
                  : formatCurrencies(price)}
              </span>
              {promo ? (
                <span className="font-semibold text-xs flex items-center gap-2">
                  <s>{price}</s>
                  <Tags className="text-orange-500" size={16} />
                </span>
              ) : null}
            </div>
            <div className="absolute bottom-2 right-2 bg-green-800 p-1 rounded-full text-white">
              <Plus strokeWidth={2} size={24} />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="col-span-6">
      <div className="relative" onClick={openOptionHandler}>
        <div className="w-full rounded-xl">
          <img src={image} className="w-full rounded-xl" alt="" />
        </div>
        {popular ? (
          <div className="absolute top-2 left-2 rounded-full bg-green-600 px-2 flex items-center justify-center">
            <span className="text-xs leading-snug text-white">most order</span>
          </div>
        ) : null}
        <div className="absolute bottom-2 right-2 bg-green-800 p-1 rounded-full text-white">
          <Plus strokeWidth={2} size={24} />
        </div>
      </div>
      <div>
        <div>
          <span className="text-sm">{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">
            {promo
              ? calculateDiscountedPrice(formatCurrencies(price), promo)
              : formatCurrencies(price)}
          </span>
          {promo ? (
            <span className="font-semibold text-xs flex items-center gap-2">
              <s>{price}</s>
              <Tags className="text-orange-500" size={16} />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ data, vertical = false }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {data.map((data) => {
          return <Item data={data} key={data.id} vertical={vertical} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
