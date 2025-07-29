import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import cafeReducer from "../features/cafe/cafeSlice"
import orderReducer from "../features/order/orderSlice"
import packageReducer from "../features/package/packageSlice"
import cateringReducer from "../features/catering/cateringSlice"
import ticketReducer from "../features/ticket/ticketSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cafe: cafeReducer,
    order: orderReducer,
    package: packageReducer,
    catering: cateringReducer,
    ticket: ticketReducer
  }
})
