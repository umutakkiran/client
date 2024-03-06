"use client";
import { configureStore } from "@reduxjs/toolkit"
import AllShipsSlice from "./slices/allships-slice";


const store = configureStore({
    reducer:{
        allShips : AllShipsSlice.reducer,
    }
})

export default store;