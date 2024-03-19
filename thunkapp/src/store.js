import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersSlice";

export const storeData = configureStore({
    reducer:{
    usersSlice:usersSlice
    }
})