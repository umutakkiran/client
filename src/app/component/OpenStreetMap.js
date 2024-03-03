"use client"
import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker, ZoomControl, Tooltip} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FaStar } from "react-icons/fa";


const Map2 = ({data, onPressShip}) => {
  const [center, setCenter] = useState({ lat: 39.1667, lng: 35 })

  const ZOOM_LEVEL = 3
  const mapRef = useRef()

  const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

  const markerIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    // specify the path here
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
  });

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
  return (
    <>
      <div className=' w-full h-full relative'>
       
        <MapContainer className='w-full h-full' zoomControl={false} minZoom={2} maxBounds={bounds}  maxZoom={15} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {data?.map((item, index) => (
            <Marker
            key={index}
            eventHandlers={{
              click: () => {
                onPressShip(item.MMSI)
              },
            }}
            icon={markerIcon} position={[item.LATITUDE, item.LONGITUDE]}>
              <Tooltip direction="bottom" offset={[0, 20]} opacity={1} >
                <div className=' flex flex-col bg-white w-fit h-fit'>
                  <a className=' text-xs font-bold'> {item.NAME}</a>
                  <a className=' text-xs '> {formatDate(item.TIME)}</a>
                </div>
              </Tooltip>
            </Marker>
          ))}
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>



    </>
  )
}

export default Map2