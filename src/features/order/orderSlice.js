import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../components/cafe-components/BasketOperations";
import { CAFE_ORDER } from "../../constants/OrderType";
import { useSelector } from "react-redux";

const initialState = {
  basket: [],
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
