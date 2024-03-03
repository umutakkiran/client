import { FaStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {

    return (
        <>
        <div className=" w-full h-full bg-[#B4D4FF] flex flex-col justify-evenly items-center">
          <div className=" w-full h-96 flex flex-col justify-start items-center space-y-10">
          <FaStar className=" text-white" />
          <FaFilter  className=" text-white"/>
          <FaLocationDot className=" text-white"/>
          <IoMdSettings className=" text-white"/>
          </div>
         
        </div>
        </>
    )

}

export default Sidebar;