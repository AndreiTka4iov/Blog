import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        auth: true
    },
    reducers: {
        authTrue(state) {
            state.auth = true
        },
        authFalse(state) {
            state.auth = false
        }
    }
})

export default toolkitSlice.reducer
export const {authTrue, authFalse} = toolkitSlice.actions