import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packageId: 0,
  periodId: 0,
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    fillPackage: (state, action) => {
      state.packageId = action.payload.packageId;
      state.periodId = action.payload.periodId;
    },
  },
});

export const { fillPackage } = packageSlice.actions;
export default packageSlice.reducer;
