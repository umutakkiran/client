"use client"
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
export default function Home() {
    const [loaded, setLoaded] = useState(false)
    const [selectedShip, setSelectedShip] = useState(null)

    const params = useParams();

    
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

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/destination/${params.id}`);
            const data = await response.json();
            console.log(JSON.stringify(data) + "data")
            setSelectedShip(data.destinations);
            setLoaded(true);
        }

        if (!loaded) {
            fetchData();
        }
    }, [params.id])
    
    return (
        <>
            <div className=' w-full h-screen flex flex-row justify-center items-center'>
                {selectedShip ?
                    <>
                        <div className=' w-[50%] h-[50%] shadow-lg rounded-lg bg-[#818FB4] p-3'>
                             <h1 className=' font-bold font-mono'>{selectedShip[0].NAME}</h1>
                             <p className=' font-mono text-sm'>IMO Number: <span className=' font-bold font-mono'>{selectedShip[0].IMO}</span> </p>
                             <p className=' font-mono text-sm'>Ship Type: <span className=' font-bold font-mono'>{shipTypes.filter(x => x.Type == selectedShip[0].TYPE )[0]?.Name}</span> </p>
                             <p className=' font-mono text-sm'>Ship Type: <span className=' font-bold font-mono'>{selectedShip[0].A}</span> </p>
                             <p className=' font-mono text-sm'>Gross Tonnage: <span className=' font-bold font-mono'>{selectedShip[0].B}</span> </p>
                             <p className=' font-mono text-sm'>Summer Deadweight: <span className=' font-bold font-mono'>{selectedShip[0].C}</span> </p>
                             <p className=' font-mono text-sm'>Length Overall: <span className=' font-bold font-mono'>{selectedShip[0].D}</span> </p>
                             <p className=' font-mono text-sm'>Beam: <span className=' font-bold font-mono'>{selectedShip[0].CALLSIGN}</span> </p>
                        </div>
                    </>
                    :
                    null
                }
            </div>
        </>
    );
}
