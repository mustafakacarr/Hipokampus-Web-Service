import { createSlice } from "@reduxjs/toolkit";

export const cafeSlice = createSlice({
    name: "cafeItems",
    initialState: {
        value: 0
    },
    reducers : {
        addItems: (state, action) =>  {
            state.value = action.payload 
        }
    }
})

export const { addItems } = userSlice.actions
export default cafeSlice.reducer
