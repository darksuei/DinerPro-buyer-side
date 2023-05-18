import { configureStore } from "@reduxjs/toolkit";
import dashboard_categories_reducer from './dashboardSelect'
import chef_slice from "./chef_slice";

export const Store = configureStore({
    reducer: {
        Category: dashboard_categories_reducer,
        Current_chef: chef_slice,
    }
})