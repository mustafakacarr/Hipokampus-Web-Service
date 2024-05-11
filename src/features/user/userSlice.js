import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        signUserIn : (state, action) => {
            state.userInfo = action.payload
            sessionStorage.setItem("userName", state.userInfo.name)
        },
        signUserOut : (state) => {
            state.userInfo = null
            sessionStorage.clear()
        }
    }
})

export const { signUserIn, signUserOut } = userSlice.actions
export default userSlice.reducer
