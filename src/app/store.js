import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import cafeReducer from "../features/cafe/cafeSlice"
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cafe: cafeReducer,
    order: orderReducer
  }
})
