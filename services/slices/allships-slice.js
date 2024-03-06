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
            const res = await fetch('/api');
            const result = await res.json();
            dispatch(AllShipsAction.replaceShips(result));
               // MongoDB'de kaydedilmiş verilerin listesini al
               const preDatares = await fetch('/api/destination');
               const preData = await preDatares.json();

               // Verileri filtreleyerek MongoDB'de kaydedilmemiş olanları al
               const filteredData = result.filter(item =>
                   !preData.destinations.some(dataItem => dataItem.id == item.MMSI && dataItem.destination == item.DEST)
               );

               // Eğer MongoDB'de kaydedilmemiş veri varsa, MongoDB'ye kaydet
               if (filteredData.length > 0) {
                   await handlePostDataToMongo(filteredData);
               }
    }
}

const handlePostDataToMongo = async (data) => {
      const res = await fetch(`/api/destination`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      });
      const response = await res.json();
       console.log(response);
    }

export const AllShipsAction= AllShipsSlice.actions;
export default AllShipsSlice;