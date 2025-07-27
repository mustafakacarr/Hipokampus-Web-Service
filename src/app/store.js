import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import cafeReducer from "../features/cafe/cafeSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    cafe: cafeReducer
  }
})
