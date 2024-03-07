"use client"
import dynamic from 'next/dynamic'
import Sidebar from './component/Sidebar';
import { useEffect, useState } from 'react';
import CardComponent from './component/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getShipsDataThunk } from '../../services/slices/allships-slice';
// import OpenStreetMap from '../component/OpenStreetMap'
const OpenStreetMap = dynamic(() => import('../app/component/OpenStreetMap'), {
  ssr: false,
})

export default function Home() {
  const dispatch = useDispatch();
  const allShips = useSelector(state => state.allShips)

  const [selectedShip, setSelectedShip] = useState(null)
  const [selectedShipInfo, setSelectedShipInfo] = useState(null)
  const [cardVisible, setCardVisible] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
       dispatch(getShipsDataThunk(0,100,-81,81));
    };

    fetchData();
  }, [dispatch]);

 


  const handleSelectShip = (value) => {
    setSelectedShip(value)

    if (allShips?.data) {
      const res =  allShips?.data?.filter(x => x.MMSI === value);
      setCardVisible(true)
      setSelectedShipInfo(res)
    }
  }

  const refreshData = async () => {
    setLoaded(false)
    alert("Veriler Yenilendi")
  }

  return (
    <>
      <div className=' w-full h-screen flex flex-row'>
        <div className=' w-[3%] h-full'>
          <Sidebar />
        </div>
        <div className=' w-[97%] h-full relative'>
          <CardComponent selectedShip={selectedShipInfo} setCardVisible={setCardVisible} visible={cardVisible} />
          { allShips ?
            <OpenStreetMap onPressShip={(data) => handleSelectShip(data)} />
            :
            null
          }
        </div>
      </div>
    </>
  );
}
