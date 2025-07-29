import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  packageId: null,
  periodId: null,
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
