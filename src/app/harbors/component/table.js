import { DepartureFinder } from "@/app/component/DepartureFinder";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaVialVirus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
const Table = ({ value, departure }) => {
    const [data, setData] = useState(null);
    const [loaded, setLoaded] = useState(false)

    const [filteredData, setFilteredData] = useState([]);

    function formatDate(dateString) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const date = new Date(dateString);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        const formattedDate = `${month},${day < 10 ? '0' + day : day} ${hours < 10 ? '0' + hours : hours}-${minutes < 10 ? '0' + minutes : minutes}`;

        return formattedDate;
    }

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
        const res = [];

        data?.map((item) => (
            value?.some((dataItem) => dataItem === item.NAVSTAT ) ?
                res.push(item)
                :
                null
        ))
        
        if (departure === false) {
             setFilteredData(res)
        }else{
           handleGetDepartures(res);
        }

        console.log(JSON.stringify(res))
    }, [data, value, departure]);

    const handleGetDepartures = async (data) => {
        const departures = [];

    for (const item of data) {
        const departure = await DepartureFinder(item);
        if (departure !== null) {
            departures.push(departure);
        }
    }

    console.log(departures + "departures")
    setFilteredData(departures)
    }

    return (
        <>
            <div className='  transition-all ease-in-out duration-700 pb-10 shadow-lg w-[90%] h-48'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold font-mono text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Port Informations
                    </caption>
                    <thead className="text-xs font-bold font-mono text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ETA By AIS
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Vessel
                            </th>
                            <th scope="col" className="px-6 py-3">
                               { departure === true ? "Last Port" : "Distance"}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Destination
                            </th>
                            <th scope="col" className="px-6 py-3">
                                GT
                            </th>
                            <th scope="col" className="px-6 py-3">
                                DWT
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Size
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" h-36 overflow-scroll">
                        {filteredData.map((item, index) => (
                             <tr key={index} className=" border-b bg-[#818FB4]">
                                  <th scope="row" className="px-6 py-4 font-medium font-mono whitespace-nowrap text-white">
                                    {formatDate(item.ETA)}
                                  </th>
                                  <td className="px-6 py-4 text-white font-mono">
                                    {item.NAME}
                                  </td>
                                  <td className="px-6 py-4 text-white font-mono">
                                    { departure === true ? item.LASTPORT : item.A}
                                  </td>
                                  <td className="px-6 py-4 text-white font-mono">
                                    {item.DEST}
                                  </td>
                                  <td className="px-6 py-4 text-white font-mono">
                                    {item.B}
                                  </td>
                                  <td className="px-6 py-4 text-white font-mono text-right">
                                     {item.C}
                                  </td>
                                  <td className="px-6 py-4 text-white font-mono text-right">
                                     {item.D}
                                  </td>
                              </tr>
                             ))
                          }
                       
                    </tbody>
                </table>
                
            </div>
        </>

    )

}

export default Table;