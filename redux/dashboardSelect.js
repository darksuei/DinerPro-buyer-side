
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "chefs",
    item: "all chefs"
}
export const Dashboard_Store = createSlice({
    name: "Category",
    initialState,
    reducers: {
        chefs: (state)=>{
            state.category = "chefs"
            state.item = "all chefs"
        },
        couzines: (state)=>{
            state.category = "couzines"
            state.item = "all"
        },
        food_supply: (state)=>{
            state.category = "food_supply"
            state.item = "all items"
        },
        change_item: (state, action)=>{
            console.log(action.payload.value)
            state.item= action.payload.value
        }
    }
})

export const { chefs, couzines, food_supply, change_item } = Dashboard_Store.actions
export default Dashboard_Store.reducer