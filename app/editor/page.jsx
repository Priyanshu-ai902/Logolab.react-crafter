"use client";

import ControlPanel from "../custom/_components/ControlPanel";
import LogoPlayGround from "../custom/_components/LogoPlayGround";
import { useState, useEffect } from "react";
import { ControllerValueContext } from "../custom/_context/ControllerValue";
import SideNav from "../custom/_components/SideNav";

export default function Editor() {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem("value")) || {
      bgRounded: 250,
      bgPadding: 250,
      bgColor: "#000",
    };
  });

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value));
  }, [value]);

  return (
    <ControllerValueContext.Provider value={{ value, setValue }}>

      <div className="w-full flex min-h-screen  text-white">
        <div className="w-56 h-full mt-6 bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-lg border-r border-gray-800 rounded-xl">
          <SideNav />
        </div>

        <div className="flex-1 p-6 flex gap-6">

          <div className="w-1/3 bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
            <ControlPanel />
          </div>

          <div className="flex-1 bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
            <LogoPlayGround />
          </div>
        </div>
      </div>




    </ControllerValueContext.Provider>
  )
}
