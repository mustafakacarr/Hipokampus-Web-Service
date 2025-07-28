import { createSlice } from "@reduxjs/toolkit";
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../../components/cafe-components/BasketOperations";

const initialState = {
  items: [], 
};

export const cafeSlice = createSlice({
  name: "cafeItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
     state.items = addToCart(action.payload, state.items);
    },
    deleteItem: (state, action) => {
     state.items = removeFromCart(action.payload, state.items);
    },
    addQuantity: (state, action) => {
      state.items = increaseQuantity(action.payload, state.items);
    },
    reduceQuantity: (state, action) => {
     state.items= decreaseQuantity(action.payload, state.items);
    },
  },
});

export const { addItem, deleteItem, addQuantity, reduceQuantity } = cafeSlice.actions;
export default cafeSlice.reducer;
