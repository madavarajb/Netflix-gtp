import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gtp",
  initialState: {
    showGtp: false,
  },
  reducers: {
    togglegtp: (state) => {
      state.showGtp = !state.showGtp;
    },
  },
});

export const { togglegtp } = gtpSlice.actions;
export default gtpSlice.reducer;
