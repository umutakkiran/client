"use client"

import { useEffect, useState } from "react";
import Table from "./component/table";

export default function Home() {

  const [tabState, setTabState] = useState([0,8])
  const [isDeparture, setIsDeparture] = useState(false)

  const handleChangeTabState = (value) => {
    if (value === "expected") {
      const res = [0,8];
      setTabState(res)
      setIsDeparture(false)
    }

    if (value === "arrival") {
      const res = [1];
      setTabState(res)
      setIsDeparture(false)
    }

    if (value === "departure") {
      const res = [0,8];
      setTabState(res)
      setIsDeparture(true)
    }

    if (value === "inport") {
      const res = [5];
      setTabState(res)
      setIsDeparture(false)
    }
  }

  return (
    <>
      <div className=' w-full h-screen flex flex-col  py-10 px-5'>
        <div className=" flex justify-center items-center">
          <ul className="flex flex-wrap text-sm font-medium text-center">
            <li className="me-2">
              <button onClick={() => handleChangeTabState("expected")} className="inline-block p-4 border-b-2 rounded-t-lg font-mono hover:text-gray-600 focus:border-black hover:border-gray-300 dark:hover:text-gray-300">Expected</button>
            </li>
            <li className="me-2">
              <button onClick={() => handleChangeTabState("arrival")} className="inline-block p-4 border-b-2 rounded-t-lg font-mono hover:text-gray-600 focus:border-black hover:border-gray-300 dark:hover:text-gray-300">Arrivals</button>
            </li>
            <li className="me-2">
              <button onClick={() => handleChangeTabState("departure")} className="inline-block p-4 border-b-2 rounded-t-lg font-mono hover:text-gray-600 focus:border-black hover:border-gray-300 dark:hover:text-gray-300">Departures</button>
            </li>
            <li>
              <button onClick={() => handleChangeTabState("inport")} className="inline-block p-4 border-b-2 rounded-t-lg font-mono hover:text-gray-600 focus:border-black hover:border-gray-300 dark:hover:text-gray-300">In Port</button>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center ">
          <Table value={tabState} isDeparture={isDeparture} />
        </div>
      </div>
    </>
  );
}
