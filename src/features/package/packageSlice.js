import { createSlice } from "@reduxjs/toolkit";
import { 
    VIRTUAL_OFFICE_ORDER,
    COWORKING_SPACE_ORDER,      
    MEETING_ROOM_ORDER } 
from "../../constants/OrderType";

const initialState = {
  packageId: null,
  packagePeriod: null,
  orderType: null 
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    addVirtualOfficePackage: (state, action) => {
        state.orderType = VIRTUAL_OFFICE_ORDER
    },
    addCoworkingSpacePackage: (state, action) => {
        state.orderType = COWORKING_SPACE_ORDER
    },
    addMeetingRoomPackage: (state, action) => {
        state.orderType = MEETING_ROOM_ORDER
    }
  }
});

export const { addPackage } = packageSlice.actions;
export default packageSlice.reducer;
