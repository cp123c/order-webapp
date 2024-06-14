import { configureStore } from "@reduxjs/toolkit";
import Foodproduct from "./FoodProduct-slice"; 
import BottomSheet from "./BottomSheet-slice";

const store = configureStore({
  reducer: {
    foodproduct: Foodproduct.reducer,
    bottomSheet: BottomSheet.reducer,
  },
});

export default store;
