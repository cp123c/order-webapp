import { createSlice } from "@reduxjs/toolkit";

const Foodproduct = createSlice({
  name: "foodproduct",
  initialState: {
    allOutlet:[],
  },
  reducers: {
    getOutlet(state,action){
      const outlet = action.payload; 
      state.allOutlet = outlet;
    }
  },
});

export const FoodproductActions = Foodproduct.actions;

export default Foodproduct;
