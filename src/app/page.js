"use client"
import dynamic from 'next/dynamic'
import Sidebar from './component/Sidebar';
import { useEffect, useState } from 'react';
import CardComponent from './component/CardComponent';
import { IoMdRefresh } from "react-icons/io";
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../app/component/OpenStreetMap'), {
  ssr: false,
})

export default function Home() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false)
  const [allDestsStore, setAllDestsStore] = useState([])

  const [selectedShip, setSelectedShip] = useState(null)
  const [selectedShipInfo, setSelectedShipInfo] = useState(null)
  const [cardVisible, setCardVisible] = useState(false)


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const data = await response.json();
      setData(data);
      setLoaded(true);
    }

    if (!loaded) {
      fetchData();
    }
  }, [loaded]);

  useEffect(() => {
    if (data) {
      const allDests = data.map((item) => ({
        id: item.MMSI,
        destination: item.DEST
      }));
      setAllDestsStore((prevDests) => [...prevDests, ...allDests]);
    }

    console.log(JSON.stringify(allDestsStore) + "STORE")
  }, [data]);

  const handleSelectShip = (value) => {
    setSelectedShip(value)

    if (data) {
      const res =  data.filter(x => x.MMSI === value);
      setCardVisible(true)
      setSelectedShipInfo(res)
    }
  }

  const refreshData = async () => {
    setLoaded(false)
    alert("Veriler Yeniledni")
  }

  return (
    <>
      <div className=' w-full h-screen flex flex-row'>
        <div className=' w-[3%] h-full'>
          <Sidebar />
        </div>
        <div className=' w-[97%] h-full relative'>
          <CardComponent selectedShip={selectedShipInfo} setCardVisible={setCardVisible} visible={cardVisible} destStore={allDestsStore} />
          <OpenStreetMap data={data} onPressShip={(data) => handleSelectShip(data)} />
          <button onClick={() => refreshData()} className=' w-8 h-8 bg-red-600 absolute bottom-10 left-[50%] z-[500] rounded-full flex justify-center items-center'>
            <IoMdRefresh />
          </button>
        </div>
      </div>
    </>
  );
}
