import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
const CardComponent = ({selectedShip, visible, setCardVisible}) => {

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
        {type:37, name:"Pleasure Craft"},
        {type:52, name:"52. Koda Karşılık Gelen bilgi"},
        {type:60, name:"60. Koda Karşılık Gelen bilgi"},
        {type:70, name:"70. Koda Karşılık Gelen bilgi"},
        {type:80, name:"80. Koda Karşılık Gelen bilgi"},
      ]

    return (
        <>
        { visible === true ?
            <div className=' absolute w-72 h-fit left-0 top-12 z-[500] bg-white transition-all ease-in-out duration-700 pb-10'>
                <div className=" flex flex-row w-full justify-between px-3 bg-blue-300">
                <button className=" hover:bg-orange-300" onClick={() => setCardVisible(false)}>
                <IoCloseSharp />
                </button>
                
                <a href="/shipdetails">{selectedShip[0].NAME}</a>
                </div>
                <div className=" w-full h-48 relative">
                <Image fill src={"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"} />
                </div>
                <div className=" w-full px-3">
                    <ul>
                        <li>Destination: {selectedShip[0].DEST ? selectedShip[0].DEST : "Bilgi Bulunamadı" }</li>
                        <li>ETA: {selectedShip[0].ETA ? formatDate(selectedShip[0].ETA) : "Bilgi Bulunamadı" }</li>
                        <li>Speed: {selectedShip[0].SOG ? selectedShip[0].SOG : "Bilgi Bulunamadı" }</li>
                        <li>Course: {selectedShip[0].COG ? selectedShip[0].COG : "Bilgi Bulunamadı" }</li>
                        <li>Draught: {selectedShip[0].DRAUGHT ? selectedShip[0].DRAUGHT : "Bilgi Bulunamadı" }</li>
                        <li>Nav Status: {selectedShip[0].NAVSTAT ? selectedShip[0].NAVSTAT : "Bilgi Bulunamadı" }</li>
                        <li>Last Report: {selectedShip[0].TIME ? selectedShip[0].TIME : "Bilgi Bulunamadı" }</li>
                        <li>Position: {selectedShip[0].LONGITUDE && selectedShip[0].LATITUDE ? <p> LAT: {selectedShip[0].LATITUDE} , LONG: {selectedShip[0].LONGITUDE} </p>   : "Bilgi Bulunamadı" }</li>
                    </ul>
                    <h2 className=" w-full h-8 bg-red-400 justify-center items-center flex">Vessel Particulars</h2>
                    <ul>
                        <li>Type: {selectedShip[0].TYPE ? shipTypes.filter(x => x.type === selectedShip[0].TYPE )[0].name : "Bilgi Bulunamadı" }</li>
                        <li>IMO: {selectedShip[0].IMO ? selectedShip[0].IMO : "Bilgi Bulunamadı" }</li>
                        <li>MMSI: {selectedShip[0].MMSI ? selectedShip[0].MMSI : "Bilgi Bulunamadı" }</li>
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