import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
const CardComponent = ({selectedShip, visible, setCardVisible}) => {
    const [destinations, setDestinations] = useState([])

    function formatDate(dateString) {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
        const date = new Date(dateString);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
    
        const formattedDate = `${month},${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}-${minutes < 10 ? '0' + minutes : minutes}`;
        
        return formattedDate;
      }

      const shipTypes = [
        { Type: "Not available (default)", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "1", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "2", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "3", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "4", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "5", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "6", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "7", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "8", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "9", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "10", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "11", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "12", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "13", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "14", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "15", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "16", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "17", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "18", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "19", Name: "Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "20", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "21", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "22", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "23", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "24", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "25", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "26", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "27", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "28", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "29", Name: "Wing in ground (WIG)", Color: "/icons/ship-solid-mor.svg" },
        { Type: "30", Name: "Fishing", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "31", Name: "Towing", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "32", Name: "Towing: length exceeds 200m or breadth exceeds 25m", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "33", Name: "Dredging or underwater ops", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "34", Name: "Diving ops", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "35", Name: "Military ops", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "36", Name: "Sailing", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "37", Name: "Pleasure Craft", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "38", Name: "Reserved", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "39", Name: "Reserved", Color: "/icons/ship-solid-mavi.svg" },
        { Type: "40", Name: "High speed craft (HSC), all ships of this type", Color: "/icons/ship-solid-mor.svg" },
        { Type: "41", Name: "High speed craft (HSC), Hazardous category A", Color: "/icons/ship-solid-mor.svg" },
        { Type: "42", Name: "High speed craft (HSC), Hazardous category B", Color: "/icons/ship-solid-mor.svg" },
        { Type: "43", Name: "High speed craft (HSC), Hazardous category C", Color: "/icons/ship-solid-mor.svg" },
        { Type: "44", Name: "High speed craft (HSC), Hazardous category D", Color: "/icons/ship-solid-mor.svg" },
        { Type: "45", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "46", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "47", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "48", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/ship-solid-mor.svg" },
        { Type: "49", Name: "High speed craft (HSC), No additional information", Color: "/icons/ship-solid-mor.svg" },
        { Type: "50", Name: "Pilot Vessel", Color: "/icons/ship-solid-mor.svg" },
        { Type: "51", Name: "Search and Rescue vessel", Color: "/icons/ship-solid-mor.svg" },
        { Type: "52", Name: "Tug", Color: "/icons/ship-solid-mor.svg" },
        { Type: "53", Name: "Port Tender", Color: "/icons/ship-solid-mor.svg" },
        { Type: "54", Name: "Anti-pollution equipment", Color: "/icons/ship-solid-mor.svg" },
        { Type: "55", Name: "Law Enforcement", Color: "/icons/ship-solid-mor.svg" },
        { Type: "56", Name: "Spare - Local Vessel", Color: "/icons/ship-solid-mor.svg" },
        { Type: "57", Name: "Spare - Local Vessel", Color: "/icons/ship-solid-mor.svg" },
        { Type: "58", Name: "Medical Transport", Color: "/icons/ship-solid-mor.svg" },
        { Type: "59", Name: "Noncombatant ship according to RR Resolution No. 18", Color: "/icons/ship-solid-mor.svg" },
        { Type: "60", Name: "Passenger, all ships of this type", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "61", Name: "Passenger, Hazardous category A", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "62", Name: "Passenger, Hazardous category B", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "63", Name: "Passenger, Hazardous category C", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "64", Name: "Passenger, Hazardous category D", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "65", Name: "Passenger, Reserved for future use", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "66", Name: "Passenger, Reserved for future use", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "67", Name: "Passenger, Reserved for future use", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "68", Name: "Passenger, Reserved for future use", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "69", Name: "Passenger, No additional information", Color: "/icons/ship-solid-yesil.svg" },
        { Type: "70", Name: "Cargo, all ships of this type", Color: "/icons/ship-solid-sari.svg" },
        { Type: "71", Name: "Cargo, Hazardous category A", Color: "/icons/ship-solid-sari.svg" },
        { Type: "72", Name: "Cargo, Hazardous category B", Color: "/icons/ship-solid-sari.svg" },
        { Type: "73", Name: "Cargo, Hazardous category C", Color: "/icons/ship-solid-sari.svg" },
        { Type: "74", Name: "Cargo, Hazardous category D", Color: "/icons/ship-solid-sari.svg" },
        { Type: "75", Name: "Cargo", Color: "/icons/ship-solid-sari.svg" },
        { Type: "76", Name: "Cargo", Color: "/icons/ship-solid-sari.svg" },
        { Type: "77", Name: "Cargo", Color: "/icons/ship-solid-sari.svg" },
        { Type: "78", Name: "Cargo", Color: "/icons/ship-solid-sari.svg" },
        { Type: "79", Name: "Cargo", Color: "/icons/ship-solid-sari.svg" },
        { Type: "80", Name: "Tanker", Color: "/icons/ship-solid-red.svg" },
        { Type: "81", Name: "Tanker, Hazardous category A", Color: "/icons/ship-solid-red.svg" },
        { Type: "82", Name: "Tanker, Hazardous category B", Color: "/icons/ship-solid-red.svg" },
        { Type: "83", Name: "Tanker, Hazardous category C", Color: "/icons/ship-solid-red.svg" },
        { Type: "84", Name: "Tanker, Hazardous category D", Color: "/icons/ship-solid-red.svg" },
        { Type: "85", Name: "Tanker", Color: "/icons/ship-solid-red.svg" },
        { Type: "86", Name: "Tanker", Color: "/icons/ship-solid-red.svg" },
        { Type: "87", Name: "Tanker", Color: "/icons/ship-solid-red.svg" },
        { Type: "88", Name: "Tanker", Color: "/icons/ship-solid-red.svg" },
        { Type: "89", Name: "Tanker", Color: "/icons/ship-solid-red.svg" },
        { Type: "90", Name: "Other Type, all ships of this type", Color: "/icons/ship-solid-red.svg" },
        { Type: "91", Name: "Other Type, Hazardous category A", Color: "/icons/ship-solid-red.svg" },
        { Type: "92", Name: "Other Type, Hazardous category B", Color: "/icons/ship-solid-red.svg" },
        { Type: "93", Name: "Other Type, Hazardous category C", Color: "/icons/ship-solid-red.svg" },
        { Type: "94", Name: "Other Type, Hazardous category D", Color: "/icons/ship-solid-red.svg" },
        { Type: "95", Name: "Other Type, Reserved for future use", Color: "/icons/ship-solid-red.svg" },
        { Type: "96", Name: "Other Type, Reserved for future use", Color: "/icons/ship-solid-red.svg" },
        { Type: "97", Name: "Other Type, Reserved for future use", Color: "/icons/ship-solid-red.svg" },
        { Type: "98", Name: "Other Type, Reserved for future use", Color: "/icons/ship-solid-red.svg" },
        { Type: "99", Name: "Other Type, no additional information", Color: "/icons/ship-solid-red.svg" }
    ];
      
      useEffect( () => {
        if (selectedShip) {
            handleGetById();
        }

        console.log( JSON.stringify(destinations)  + "responseeeee");
      },[selectedShip])

      const handleGetById = async () => {
        const res = await fetch(`/api/destination/${selectedShip[0].MMSI}`);
        const response = await res.json();
        console.log( JSON.stringify(response.destinations) + "RESPONSE")
        setDestinations(response.destinations)
      }

      const navStats = [
        { type: 0, name: "Under way using engine" },
        { type: 1, name: "At anchor" },
        { type: 2, name: "Not under command" },
        { type: 3, name: "Restricted manoeuverability" },
        { type: 4, name: "Constrained by her draught" },
        { type: 5, name: "Moored" },
        { type: 6, name: "Aground" },
        { type: 7, name: "Engaged in Fishing" },
        { type: 8, name: "Under way sailing" },
        { type: 9, name: "Reserved for future amendment of Navigational Status for HSC" },
        { type: 10, name: "Reserved for future amendment of Navigational Status for WIG" },
        { type: 11, name: "Reserved for future use" },
        { type: 12, name: "Reserved for future use" },
        { type: 13, name: "Reserved for future use" },
        { type: 14, name: "AIS-SART is active" },
        { type: 15, name: "Not defined (default)" }
      ]


    return (
        <>
        { visible === true ?
            <div className=' absolute w-72 h-fit left-0 top-12 z-[500] bg-white transition-all ease-in-out duration-700 pb-10 shadow-lg rounded-br-lg rounded-bl-lg'>
                <div className=" flex flex-row w-full justify-between px-3 bg-[#818FB4]">
                <button className=" hover:text-orange-300 rounded-full" onClick={() => setCardVisible(false)}>
                <IoCloseSharp className=" w-5 h-5" />
                </button>
                
                <a href={`/shipdetails/${selectedShip[0].MMSI}`} className=" flex flex-row justify-center items-center font-bold font-mono">{selectedShip[0].NAME}<span className=" ml-3"><FaArrowRight /></span></a>
                </div>
                <div className=" w-full h-48 relative">
                <Image fill src={"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} alt="noimage" />
                </div>
                <div className=" w-full px-3">
                    <ul>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Destination</span>: {selectedShip[0].DEST ? selectedShip[0].DEST : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">ETA</span>: {selectedShip[0].ETA ? formatDate(selectedShip[0].ETA) : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Speed</span>: {selectedShip[0].SOG ? selectedShip[0].SOG : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Course</span>: {selectedShip[0].COG ? selectedShip[0].COG : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Draught</span>: {selectedShip[0].DRAUGHT ? selectedShip[0].DRAUGHT : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Nav Status</span>: {selectedShip[0].NAVSTAT ? navStats.map((item, index) => ( item.type == selectedShip[0].NAVSTAT ? <p key={index} >{item.name}</p>: null)) : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Last Report</span>: {selectedShip[0].TIME ? selectedShip[0].TIME : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Position</span>: {selectedShip[0].LONGITUDE && selectedShip[0].LATITUDE ? <p> LAT: {selectedShip[0].LATITUDE} , LONG: {selectedShip[0].LONGITUDE} </p>   : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Previous Destination</span>: {destinations ? destinations?.slice(-2, -1)[0]?.destination : "Bilgi Bulunamadı"}</li>
                    </ul>
                    <h2 className=" w-full h-8 bg-red-400 justify-center items-center flex">Vessel Particulars</h2>
                    <ul>
                        <li className=" text-sm"> <span className=" font-mono font-bold">Type</span>: {selectedShip[0].TYPE ? shipTypes.filter(x => x.Type == selectedShip[0].TYPE )[0]?.Name : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">IMO</span>: {selectedShip[0].IMO ? selectedShip[0].IMO : "Bilgi Bulunamadı" }</li>
                        <li className=" text-sm"> <span className=" font-mono font-bold">MMSI</span>: {selectedShip[0].MMSI ? selectedShip[0].MMSI : "Bilgi Bulunamadı" }</li>
                    </ul>
                </div>
            </div>
            :
            null
        }
        </>
    )
}

export default CardComponent;