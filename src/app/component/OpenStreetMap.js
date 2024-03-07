"use client"
import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, ZoomControl, Tooltip} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { IconGenerator } from './IconGenerator';
import { ZoomComponent } from './ZoomComponent';
import { useSelector } from 'react-redux';
const Map2 = ({ onPressShip}) => {
  const [center, setCenter] = useState({ lat: 39.1667, lng: 35 })
  const allShips = useSelector(state => state.allShips)
  const [loaded, setLoaded] = useState(false)

  const ZOOM_LEVEL = 3
  const mapRef = useRef()

  const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));

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

  useEffect(()=>{
    allShips?.data.length > 50 ?
    setLoaded(true)
    :
    setLoaded(false)

  },[allShips])

  return (
    <>
      <div className=' w-full h-full relative'>
        { loaded ?
          null
          :
          <div className=' absolute top-0 left-0 h-screen w-screen bg-slate-500 bg-opacity-0 flex items-center justify-center' >
            <p>Loading...</p>
          </div>

        }
       
        <MapContainer className='w-full h-full' zoomControl={false} minZoom={3} maxBounds={bounds}  maxZoom={15} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {allShips?.data?.map((item, index) => (
            <Marker
            key={index}
            eventHandlers={{
              click: () => {
                onPressShip(item.MMSI)
              },
            }}
            icon={IconGenerator(item.TYPE) } position={[item.LATITUDE, item.LONGITUDE]}>
              <Tooltip direction="bottom" offset={[0, 20]} opacity={1} >
                <div className=' flex flex-col bg-white w-fit h-fit'>
                  <a className=' text-xs font-bold'> {item.NAME}</a>
                  <a className=' text-xs '> {formatDate(item.TIME)}</a>
                </div>
              </Tooltip>
            </Marker>
          ))}
          <ZoomComponent />
          <ZoomControl position="bottomright" />
        </MapContainer>
      </div>
    </>
  )
}

export default Map2
