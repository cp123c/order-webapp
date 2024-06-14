import { createSlice } from "@reduxjs/toolkit";

const BottomSheet = createSlice({
  name: "bottomSheet",
  initialState: {
    isToggle: false,
  },
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const BottomSheetActions = BottomSheet.actions;

export default BottomSheet;
