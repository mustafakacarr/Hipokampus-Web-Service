import { createSlice } from "@reduxjs/toolkit";
import { TICKET_ORDER } from "../../constants/OrderType";

const initialState = {
    eventId: null,
    orderType: TICKET_ORDER
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    fillTicket: (state, action) => {
        state.eventId = action.payload.eventId
    }
  }
});

export const { fillTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
