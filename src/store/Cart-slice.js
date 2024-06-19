import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "Cart",
  initialState: {
    isToggle: false,
  },
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const CartActions = Cart.actions;

export default Cart;
