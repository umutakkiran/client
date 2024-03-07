"use client";
import { createSlice } from "@reduxjs/toolkit";

const AllShipsSlice = createSlice({
    name : 'allShips',
    initialState:{data:[]},
    reducers:{
        replaceShips(state, action){
            state.data = action.payload;
        }
    }
})

export const getShipsDataThunk = () => {
    return async (dispatch) => {
        const res = await fetch(`/api`);
        const result = await res.json();
        console.log(JSON.stringify(result) + "RESULT")
        dispatch(AllShipsAction.replaceShips(result.destinations));
        }
}

export const AllShipsAction= AllShipsSlice.actions;
export default AllShipsSlice;