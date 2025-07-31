import { createSlice } from "@reduxjs/toolkit";
import { CAFE_ORDER } from "../../constants/OrderType";

const initialState = {
  orderType: CAFE_ORDER,
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
