import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    // userType: "admin",
    // userType: "worker",
    userType: "participant",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            state.userType = "";
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.userType = null;
        }
    }
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;