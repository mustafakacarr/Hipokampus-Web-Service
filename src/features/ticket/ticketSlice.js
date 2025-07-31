import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eventId: 0
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
