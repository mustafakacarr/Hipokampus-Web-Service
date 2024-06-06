import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const userInSession = sessionStorage.getItem("user")
const initialState = {
  userInfo: userInSession ? JSON.parse(userInSession) : null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        signUserIn : (state, action) => {
            state.userInfo = action.payload
            sessionStorage.setItem("user", JSON.stringify(state.userInfo));
        },
        signUserOut : (state) => {
            state.userInfo = null
            sessionStorage.clear()
        }
    }
})

export const { signUserIn, signUserOut } = userSlice.actions
export default userSlice.reducer
