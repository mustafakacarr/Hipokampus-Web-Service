import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSignedIn : false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        signUserIn : (state) => {
            state.isSignedIn = true
            sessionStorage.setItem("isSignedIn", true)
        },
        signUserOut : (state) => {
            state.isSignedIn = false
            sessionStorage.clear()
        }
    }
})

export const { signUserIn, signUserOut } = userSlice.actions
export default userSlice.reducer
