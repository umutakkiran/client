"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
const Navbar = () => {
  const router = useRouter();
  const [searchWord, setSearchword] = useState("")
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const data = await response.json();
      setData(data);
      setLoaded(true)
    }

    loaded === false ?
      fetchData() : null
  }, [loaded, searchWord]);

  return (
    <>
      <div className=" px-10 absolute top-0 w-screen h-12 bg-[#435585] flex flex-row justify-between items-center z-[500] shadow-lg border-b-2 border-b-stone-950">
        <div className="">
          <a className=" text-white font-mono hover:cursor-pointer ">Sea Tracker</a>
        </div>

        <div className=" flex justify-center items-center space-x-5">
          <button onClick={() => router.push("/")} className=" text-white font-mono hover:cursor-pointer ">MAP</button>
          <button onClick={() => router.push("/harbors")} className=" text-white font-mono hover:cursor-pointer ">HARBORS</button>
        </div>


        <div className=" flex justify-end items-center">
          <div className=" flex flex-row justify-center items-center px-3 w-[75%] h-8 rounded-lg text-black bg-white">
            <CiSearch />
            <input
              id='name'
              type="text"
              placeholder='Search Ship'
              className=' w-[75%] h-8 rounded-lg text-black p-1 outline-none'
              onChange={event => setSearchword(event.target.value)}
              value={searchWord}
            />
          </div>
        </div>
      </div>
      {searchWord !== "" ?
        <div className=" w-96 h-[90%] bg-white absolute top-12 right-0 z-[500] p-3 shadow-lg rounded-br-lg rounded-bl-lg">
          {data.map((item, index) => (
            item.NAME.toLowerCase().includes(searchWord.toLowerCase()) ?
              <a key={index} href={`/shipdetails/${item.MMSI}`} className=" border-b-2 font-bold font-mono text-sm flex flex-row justify-between items-center">{item.NAME}<span className=" ml-3"><FaArrowRight /></span></a>
              :
              null
          ))
          }
        </div>
        :
        null
      }
    </>
  )

}

export default Navbar;