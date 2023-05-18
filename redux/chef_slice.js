import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    condition: false,
    data: {

    },
    selected: "pictures"
}
export const Chef_reducer = createSlice({
    name: "Current_chef",
    initialState,
    reducers: {
        toggle: (state, action)=>{
            state.condition = !state.condition
            state.data = action.payload.data
        },
        select: (state, action)=>{
            state.selected = action.payload.data
        }
    }
})

export const { toggle, select } = Chef_reducer.actions
export default Chef_reducer.reducer 
