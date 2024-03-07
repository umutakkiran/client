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

export const getShipsDataThunk = (minLatitude, maxLatitude, minLongitude, maxLongitude) => {
    return async (dispatch) => {
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                minLatitude: minLatitude,
                maxLatitude: maxLatitude,
                minLongitude: minLongitude,
                maxLongitude: maxLongitude,
                typesToFind: [37, 61, 10, 0, 1, 70, 80 ,90]
            }),
        })
        .then(response => response.json())
        .then(data => dispatch(AllShipsAction.replaceShips(data.destinations)))
        .catch(error => console.error('Error:', error));
        }
}

export const AllShipsAction= AllShipsSlice.actions;
export default AllShipsSlice;