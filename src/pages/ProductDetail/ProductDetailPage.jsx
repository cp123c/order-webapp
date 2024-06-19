import React, { useEffect, useState } from "react";
import { Share2, X, Tag, Plus, Minus } from "lucide-react";
import { useParams } from "react-router-dom";
import ProductList from "./views/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { BottomSheetActions } from "@store/BottomSheet-slice";
import BottomSheet from "@components/BottomSheet";
import { fetchProductFakeData } from "@utils/api";
import SkeletonLoading from "@components/SkeletonLoading";
import Cart from "@components/Cart";
import TopView from "./views/TopView";
import ProductDescBox from "./views/ProductDescBox";

const ProductOptions = () => {
  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div className="relative bg-slate-500 w-full h-44">
        <div className="w-full h-full overflow-hidden">
          <img className="object-cover" src="/home3.jpg" alt="" />
        </div>
        <div className="absolute top-4 w-full flex justify-between p-5">
          <div className="rounded-full bg-white flex items-center w-[32px] h-[32px] p-1">
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
              <input type="radio" value="Regular" /> Takeaway Packaging
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
              <span className="font-semibold text-slate-200">
                Add to Basket - 14.00 (Incl.tax)
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const { productId } = useParams();
  const [datalist, setDatalist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.bottomSheet.isToggle);

  useEffect(() => {
    setIsLoading(true);
    fetchProductFakeData()
      .then((data) => {
        setDatalist(data);
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [productId]);

  return (
    <>
      <div className="relative">
        {/* top section */}
        <TopView />
        {/* scrollable content */}
        <div className="relative w-full mt-32">
          <ProductDescBox />
          <div className="w-full bg-white">
            <div className="mx-5">
              <div className="font-semibold text-lg py-3">For you</div>
              {isLoading ? (
                <SkeletonLoading count={4} />
              ) : (
                <ProductList data={datalist} />
              )}
              {!isLoading ? (
                <div className="pt-4">
                  <div className="font-semibold text-lg py-3">
                    Fresh Mlik Tea Series
                  </div>
                  <ProductList data={datalist} vertical />
                </div>
              ) : null}
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
      <Cart />
    </>
  );
};

export default Product;
