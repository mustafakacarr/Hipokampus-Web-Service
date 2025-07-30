import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstGroupFoodId: null,
    secondGroupFoodId: null,
    thirdGroupFoodId: null,
};

export const cateringSlice = createSlice({
  name: "catering",
  initialState,
  reducers: {
    fillCatering: (state, action) => {
        state.firstGroupFoodId = action.payload.firstGroupFoodId
        state.secondGroupFoodId = action.payload.secondGroupFoodId
        state.thirdGroupFoodId = action.payload.thirdGroupFoodId
    }
  }
});

export const { fillCatering } = cateringSlice.actions;
export default cateringSlice.reducer;
