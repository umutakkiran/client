import { NextResponse } from "next/server";
import axios from 'axios';
import connectMongodb from "../../../libs/mongodb";
import Destination from "../../../models/destination";


  const externalApiUrl = 'https://data.aishub.net/ws.php?username=AH_TRIAL_8AFCE7C7&format=1&output=json'; // Dış API'nin URL'sini buraya ekleyin
  
  // Dış API'ya istek gönderen işlev
  async function sendRequestToExternalAPI() {
    try {
        const response = await axios.get(externalApiUrl);
        await connectMongodb(); // MongoDB'ye bağlan
        const destinations = await Destination.find();
         //Veriyi düzleştir
         const flattedData = response.data.slice(1).flat();
         // Verileri filtreleyerek MongoDB'de kaydedilmemiş olanları al
         const filteredData = flattedData.filter(item =>
          !destinations.some(dataItem => dataItem.MMSI == item.MMSI && dataItem.DEST == item.DEST)
         );
         console.log(filteredData)
         const insertPromises = filteredData.map(doc => 
          Destination.create({MMSI:doc.MMSI, DEST:doc.DEST, NAVSTAT:doc.NAVSTAT, TYPE:doc.TYPE, LONGITUDE:doc.LONGITUDE, LATITUDE:doc.LATITUDE, NAME: doc.NAME, TIME: doc.TIME,COG: doc.COG, SOG:doc.SOG,A:doc.A,B:doc.B,C:doc.C,D:doc.D,HEADING: doc.HEADING, ROT:doc.ROT,CALLSIGN:doc.CALLSIGN,DRAUGHT:doc.DRAUGHT,ETA:doc.ETA, IMO:doc.IMO})); // Tüm ekleme işlemlerini başlat
          return Promise.all(insertPromises)
         .then(() => {
             return new Response(JSON.stringify({ message: "Destinations created" }), { status: 201, headers: { 'Content-Type': 'application/json' } });
         })
         .catch((error) => {
             console.error("Error inserting destinations:", error);
             return new Response(JSON.stringify({ message: "Error inserting destinations" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
         });


    } catch (error) {
        console.error('Error sending request to external API:', error);
    }
  }

  // Belirli aralıklarla dış API'ya istek göndermek için bir zamanlayıcı kurma
  setInterval(sendRequestToExternalAPI, 60*60*1000); // Her 10 saniyede bir (10 * 1000 milisaniye)