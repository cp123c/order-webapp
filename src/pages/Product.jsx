import React from "react";
import {
  ArrowLeft,
  Share2,
  Users,
  Star,
  Tags,
  Infinity,
  X,
  Tag,
  Plus,
  Minus,
} from "lucide-react";
import { DATA_1, DATA_2, PRODUCT_DETAIL_DATA } from "../dummyData/listData";
import { useNavigate } from "react-router-dom";
import ProductList from "@components/layout/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { BottomSheetActions } from "../store/BottomSheet-slice";
import { BottomSheet } from "../components/BottomSheet";

const ProductOptions = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div className="relative bg-slate-500 w-full h-44">
        <div className="w-full h-full overflow-hidden">
          <img className="object-cover" src="./home3.jpg" alt="" />
        </div>
        <div className="absolute top-4 w-full flex justify-between p-5">
          <div
            className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1"
            // onClick={backToHome}
          >
            <X onClick={() => dispatch(BottomSheetActions.toggle())} />
          </div>
          <div className="flex gap-2">
            <div className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1">
              <Share2 />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100">
        <div className="px-3 py-2 bg-white">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg">Da Hong Pao Milk Tea</div>
            <div className="flex gap-2">
              <span className="font-light text-slate-400">
                <s>13.68</s>
              </span>
              <span className="font-semibold">10.94</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag size="16" className="text-orange-400" /> 20% off
            </div>
            <div>
              <span className="font-light text-slate-400 text-sm">
                Base price
              </span>
            </div>
          </div>
        </div>

        <div className="px-3 py-2 bg-white mt-2">
          <div>
            <span className="font-semibold">Choice Of Size</span>{" "}
            <span className="font-light text-xs">Pick 1</span>
          </div>
          <div className="py-3 border-b">
            <label className="text-sm font-light">
              <input type="radio" value="Regular" /> Regular
            </label>
          </div>
          <div className="py-3">
            <label className="text-sm font-light">
              <input type="radio" value="Regular" /> Regular
            </label>
          </div>
        </div>

        <div className="px-3 py-2 bg-white mt-2">
          <div>
            <span className="font-semibold">Choice Of Temperature</span>{" "}
            <span className="font-light text-xs">Pick 1</span>
          </div>
          <div className="py-3 border-b">
            <label className="text-sm font-light">
              <input type="radio" value="Regular" /> Cold
            </label>
          </div>
          <div className="py-3">
            <label className="text-sm font-light">
              <input type="radio" value="Regular" /> Hot
            </label>
          </div>
        </div>

        <div className="px-3 py-2 bg-white mt-2">
          <div>
            <span className="font-semibold">Merchant Imposed Charges</span>{" "}
            <span className="font-light text-xs">Pick 1</span>
          </div>
          <div className="py-3 border-b flex justify-between items-center">
            <label className="text-sm font-light">
              <input type="radio" value="Regular" checked /> Takeaway Packaging
            </label>
            <div>
              <span className="font-light text-sm">+0.50</span>
            </div>
          </div>
        </div>

        <div className=" bg-white mt-2">
          <div className="px-3 py-2">
            <span className="font-semibold">Note to restaurant</span>{" "}
            <span className="font-light text-xs">Optional</span>
          </div>
          <div>
            <textarea
              name=""
              id=""
              className="placeholder:text-sm w-full py-3 border-t border-b px-3"
              placeholder="Add your request (subject to restaurant's discretion)"
            ></textarea>
          </div>
          <div className="flex items-center justify-center gap-5 py-4">
            <button className=" text-green-600 p-2 border rounded-md">
              <Plus />
            </button>
            <span className="font-semibold text-lg">1</span>
            <button className=" text-green-600  p-2 border rounded-md">
              <Minus />
            </button>
          </div>
          <div className="flex justify-center py-3 w-full">
            <button className=" bg-slate-400 p-3 rounded-md text-white w-[90%]">
              <span className="font-semibold text-slate-200">Add to Basket - 14.00 (Incl.tax)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.bottomSheet.isToggle);

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="relative">
        {/* top section */}
        <div className="fixed top-0 bg-slate-500 w-full h-40">
          <div className="w-full h-full overflow-hidden">
            <img className="object-cover" src="./home3.jpg" alt="" />
          </div>
          <div className="fixed top-0 w-full flex justify-between p-5">
            <div
              className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1"
              onClick={backToHome}
            >
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
          <div className="">
            <div className="w-full pb-2 bg-gradient-to-t from-white to-black/0">
              <div className="mx-5 bg-white rounded-lg p-3 shadow-md">
                <div className="text-lg font-semibold border-b py-3">
                  <div className="">
                    KyoChon Korean Fried Chicken - Taman XXX
                  </div>
                </div>
                <div className="border-b py-3 flex items-center gap-1">
                  <span>
                    <Star size="16" />
                  </span>
                  <span className="font-bold">4.7</span>
                  <span className="font-light">(461)</span> <span>&#183;</span>{" "}
                  Ratings and reviews
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
                      <div className="font-bold text-sm">
                        Get GrabUnlimited now
                      </div>
                      <div className="text-sm">
                        Enjoy free delivery (up to RM3.00)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white">
              <div className="mx-5">
                <ProductList data={PRODUCT_DETAIL_DATA} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductOptions /> */}
      <BottomSheet
        visible={showModal}
        onClose={() => dispatch(BottomSheetActions.toggle())}
        full
      >
        <ProductOptions />
      </BottomSheet>
    </>
  );
};

export default Product;
