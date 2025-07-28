import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    packageId: null,
    periodId: null,
    packageName: null,
    packagePrice: null,
    packageType: null,
    serviceType: null
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    fillPackage: (state, action) => {
        state.packageId = action.payload.packageId
        state.packageName = action.payload.packageName
        state.packagePrice = action.payload.packagePrice
        state.packageType = action.payload.packageType
        state.periodId = action.payload.periodId
        state.serviceType = action.payload.serviceType
    }
  }
});

export const { fillPackage } = packageSlice.actions;
export default packageSlice.reducer;
