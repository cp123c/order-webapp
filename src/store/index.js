import { configureStore } from "@reduxjs/toolkit";
import Foodproduct from "./FoodProduct-slice";
import BottomSheet from "./BottomSheet-slice";
import Cart from "./Cart-slice";

const store = configureStore({
  reducer: {
    foodproduct: Foodproduct.reducer,
    bottomSheet: BottomSheet.reducer,
    cart: Cart.reducer,
  },
});

export default store;
