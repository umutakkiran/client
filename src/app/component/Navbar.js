"use client"
import { useState, useEffect } from "react";

const Navbar = () => {
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
      fetchData(): null
    }, [loaded, searchWord]);

    return (
        <>
        <div className=" absolute top-0 w-screen h-12 bg-[#86B6F6] flex flex-row justify-evenly items-center z-[500]">
            <div className="">
            <a className=" text-white">Sea Tracker</a>
            </div>

            <div className=" flex justify-center items-center space-x-5">
            <a className=" text-white">MAP</a>
            <a className=" text-white">VESSELS</a>
            <a className=" text-white">PHOTOS</a>
            </div>

            <div className=" flex justify-center items-center">
            <input
                     id='name'
                     type="text"
                     placeholder='Search Ship'
                     className=' w-[75%] h-8 rounded-lg text-black p-1'
                     onChange={event => setSearchword(event.target.value)}
                     value={searchWord}
             />
            </div>
        </div>
        {   searchWord !== "" ?
                 <div className=" w-96 h-[90%] bg-white absolute top-12 right-0 z-[500] p-3">
                    {data.map((item)=> (
                        item.NAME.toLowerCase().includes(searchWord.toLowerCase()) ?
                        <a href="/shipdetails" className=" border-b-2">{item.NAME}</a>
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