import 'leaflet/dist/leaflet.css'
import L from "leaflet";

export function IconGenerator  (data) {
    let iconUrl = "/icons/ship-solid.svg";
    const shipTypes = [
        { Type: "Not available (default)", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "1", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "2", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "3", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "4", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "5", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "6", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "7", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "8", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "9", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "10", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "11", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "12", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "13", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "14", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "15", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "16", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "17", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "18", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "19", Name: "Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "20", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "21", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "22", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "23", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "24", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "25", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "26", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "27", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "28", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "29", Name: "Wing in ground (WIG)", Color: "/icons/purple.svg" },
        { Type: "30", Name: "Fishing", Color: "/icons/blue.svg" },
        { Type: "31", Name: "Towing", Color: "/icons/blue.svg" },
        { Type: "32", Name: "Towing: length exceeds 200m or breadth exceeds 25m", Color: "/icons/blue.svg" },
        { Type: "33", Name: "Dredging or underwater ops", Color: "/icons/blue.svg" },
        { Type: "34", Name: "Diving ops", Color: "/icons/blue.svg" },
        { Type: "35", Name: "Military ops", Color: "/icons/blue.svg" },
        { Type: "36", Name: "Sailing", Color: "/icons/blue.svg" },
        { Type: "37", Name: "Pleasure Craft", Color: "/icons/blue.svg" },
        { Type: "38", Name: "Reserved", Color: "/icons/blue.svg" },
        { Type: "39", Name: "Reserved", Color: "/icons/blue.svg" },
        { Type: "40", Name: "High speed craft (HSC), all ships of this type", Color: "/icons/purple.svg" },
        { Type: "41", Name: "High speed craft (HSC), Hazardous category A", Color: "/icons/purple.svg" },
        { Type: "42", Name: "High speed craft (HSC), Hazardous category B", Color: "/icons/purple.svg" },
        { Type: "43", Name: "High speed craft (HSC), Hazardous category C", Color: "/icons/purple.svg" },
        { Type: "44", Name: "High speed craft (HSC), Hazardous category D", Color: "/icons/purple.svg" },
        { Type: "45", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "46", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "47", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "48", Name: "High speed craft (HSC), Reserved for future use", Color: "/icons/purple.svg" },
        { Type: "49", Name: "High speed craft (HSC), No additional information", Color: "/icons/purple.svg" },
        { Type: "50", Name: "Pilot Vessel", Color: "/icons/purple.svg" },
        { Type: "51", Name: "Search and Rescue vessel", Color: "/icons/purple.svg" },
        { Type: "52", Name: "Tug", Color: "/icons/purple.svg" },
        { Type: "53", Name: "Port Tender", Color: "/icons/purple.svg" },
        { Type: "54", Name: "Anti-pollution equipment", Color: "/icons/purple.svg" },
        { Type: "55", Name: "Law Enforcement", Color: "/icons/purple.svg" },
        { Type: "56", Name: "Spare - Local Vessel", Color: "/icons/purple.svg" },
        { Type: "57", Name: "Spare - Local Vessel", Color: "/icons/purple.svg" },
        { Type: "58", Name: "Medical Transport", Color: "/icons/purple.svg" },
        { Type: "59", Name: "Noncombatant ship according to RR Resolution No. 18", Color: "/icons/purple.svg" },
        { Type: "60", Name: "Passenger, all ships of this type", Color: "/icons/green.svg" },
        { Type: "61", Name: "Passenger, Hazardous category A", Color: "/icons/green.svg" },
        { Type: "62", Name: "Passenger, Hazardous category B", Color: "/icons/green.svg" },
        { Type: "63", Name: "Passenger, Hazardous category C", Color: "/icons/green.svg" },
        { Type: "64", Name: "Passenger, Hazardous category D", Color: "/icons/green.svg" },
        { Type: "65", Name: "Passenger, Reserved for future use", Color: "/icons/green.svg" },
        { Type: "66", Name: "Passenger, Reserved for future use", Color: "/icons/green.svg" },
        { Type: "67", Name: "Passenger, Reserved for future use", Color: "/icons/green.svg" },
        { Type: "68", Name: "Passenger, Reserved for future use", Color: "/icons/green.svg" },
        { Type: "69", Name: "Passenger, No additional information", Color: "/icons/green.svg" },
        { Type: "70", Name: "Cargo, all ships of this type", Color: "/icons/yellow.svg" },
        { Type: "71", Name: "Cargo, Hazardous category A", Color: "/icons/yellow.svg" },
        { Type: "72", Name: "Cargo, Hazardous category B", Color: "/icons/yellow.svg" },
        { Type: "73", Name: "Cargo, Hazardous category C", Color: "/icons/yellow.svg" },
        { Type: "74", Name: "Cargo, Hazardous category D", Color: "/icons/yellow.svg" },
        { Type: "75", Name: "Cargo", Color: "/icons/yellow.svg" },
        { Type: "76", Name: "Cargo", Color: "/icons/yellow.svg" },
        { Type: "77", Name: "Cargo", Color: "/icons/yellow.svg" },
        { Type: "78", Name: "Cargo", Color: "/icons/yellow.svg" },
        { Type: "79", Name: "Cargo", Color: "/icons/yellow.svg" },
        { Type: "80", Name: "Tanker", Color: "/icons/red.svg" },
        { Type: "81", Name: "Tanker, Hazardous category A", Color: "/icons/red.svg" },
        { Type: "82", Name: "Tanker, Hazardous category B", Color: "/icons/red.svg" },
        { Type: "83", Name: "Tanker, Hazardous category C", Color: "/icons/red.svg" },
        { Type: "84", Name: "Tanker, Hazardous category D", Color: "/icons/red.svg" },
        { Type: "85", Name: "Tanker", Color: "/icons/red.svg" },
        { Type: "86", Name: "Tanker", Color: "/icons/red.svg" },
        { Type: "87", Name: "Tanker", Color: "/icons/red.svg" },
        { Type: "88", Name: "Tanker", Color: "/icons/red.svg" },
        { Type: "89", Name: "Tanker", Color: "/icons/red.svg" },
        { Type: "90", Name: "Other Type, all ships of this type", Color: "/icons/red.svg" },
        { Type: "91", Name: "Other Type, Hazardous category A", Color: "/icons/red.svg" },
        { Type: "92", Name: "Other Type, Hazardous category B", Color: "/icons/red.svg" },
        { Type: "93", Name: "Other Type, Hazardous category C", Color: "/icons/red.svg" },
        { Type: "94", Name: "Other Type, Hazardous category D", Color: "/icons/red.svg" },
        { Type: "95", Name: "Other Type, Reserved for future use", Color: "/icons/red.svg" },
        { Type: "96", Name: "Other Type, Reserved for future use", Color: "/icons/red.svg" },
        { Type: "97", Name: "Other Type, Reserved for future use", Color: "/icons/red.svg" },
        { Type: "98", Name: "Other Type, Reserved for future use", Color: "/icons/red.svg" },
        { Type: "99", Name: "Other Type, no additional information", Color: "/icons/red.svg" }
    ];

    shipTypes.map((item)=> (
        item.Type == data ?
        iconUrl = item.Color
        :
        null
    ))

    return L.icon({
        iconSize: [18, 27],
        iconAnchor: [18, 27],
        popupAnchor: [2, -40],
        // specify the path here
        iconUrl: iconUrl ? iconUrl : "/icons/ship-solid.svg",
      });

}
