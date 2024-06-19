import React from "react";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import BottomSheet from "@components/BottomSheet";
import { CartActions } from "@store/Cart-slice";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(CartActions.toggle());
  };
  const showModal = useSelector((state) => state.cart.isToggle);
  return (
    <>
      <div
        className="fixed bottom-4 right-2 bg-white rounded-md p-2 border shadow-2xl"
        onClick={toggleHandler}
      >
        <span className="absolute top-2 right-2 rounded-full bg-red-600 p-1"></span>
        <ShoppingBag strokeWidth={1} />
      </div>
      <BottomSheet
        visible={showModal}
        onClose={() => dispatch(CartActions.toggle())}
        full
      >
        <div className="flex items-center justify-between p-2 shadow-md">
          <div onClick={() => dispatch(CartActions.toggle())}>
            <ArrowLeft strokeWidth={1} />
          </div>
          <div className="font-semibold">My Cart</div>
          <div>
            <span className="text-sm">Manage</span>
          </div>
        </div>
        {/* <div className="text-center pt-5">Empty...</div> */}
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex flex-col">
            <div>
              <span className="text-orange-500 text-xs">
                20% Off Selected Promo - 20 % off
              </span>
            </div>
            <div>
              <span className="font-semibold text-sm">
                CHAGEE - Pandan Indah
              </span>
            </div>
            <div>
              <span className="text-xs">1 item From 40 mins 4.1 km</span>
            </div>
          </div>
          <div>
            <img src="/home4.jpg" className="w-14" alt="" />
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

export default Cart;
