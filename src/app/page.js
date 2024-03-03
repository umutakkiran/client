"use client"
import dynamic from 'next/dynamic'
import Sidebar from './component/Sidebar';
import { useEffect, useState } from 'react';
import CardComponent from './component/CardComponent';
import SearchComponent from './component/SearchComponent';
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../app/component/OpenStreetMap'), {
  ssr: false,
})

export default function Home() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false)

  const [selectedShip, setSelectedShip] = useState(null)
  const [selectedShipInfo, setSelectedShipInfo] = useState(null)
  const [cardVisible, setCardVisible] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const data = await response.json();
      setData(data);
      setLoaded(true)
    }

    loaded === false ?
    fetchData(): null
    console.log(JSON.stringify(data) + "msj")
  }, [loaded]);

  const handleSelectShip = (value) => {
    setSelectedShip(value)

    if (data) {
      const res =  data.filter(x => x.MMSI === value);
      setCardVisible(true)
      setSelectedShipInfo(res)
    }
  }

  return (
    <>
      <div className=' w-full h-screen flex flex-row'>
        <div className=' w-[3%] h-full'>
          <Sidebar />
        </div>
        <div className=' w-[97%] h-full relative'>
          <CardComponent selectedShip={selectedShipInfo} setCardVisible={setCardVisible} visible={cardVisible} />
          <OpenStreetMap data={data} onPressShip={(data) => handleSelectShip(data)} />
        </div>
      </div>
    </>
  );
}
