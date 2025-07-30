import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderType: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fillOrder: (state, action) => {
      return {
          ...action.payload,
      };
    },
  },
});

export const { fillOrder } = orderSlice.actions;
export default orderSlice.reducer;
