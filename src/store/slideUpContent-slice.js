import { createSlice } from "@reduxjs/toolkit";

const SliceUpContent = createSlice({
  name: "slideup",
  initialState: {
    isToggle: false,
    allOutlet:[],
  },
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
    getOutlet(state,action){
      const outlet = action.payload; 
      state.allOutlet = outlet;
    }
  },
});

export const sliceUpContent = SliceUpContent.actions;

export default SliceUpContent;
