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
      {/* Wrapper div to prevent multiple root elements */}
      <div className="flex min-h-screen">
        
        {/* Fixed Sidebar */}
        <div className="w-48 fixed h-full">
          <SideNav />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 flex-1 ml-48">
          <div className="col-span-2">
            <ControlPanel />
          </div>
          <div className="col-span-3">
            <LogoPlayGround />
          </div>
          <div className="bg-green-50">kl</div>
        </div>

      </div>
    </ControllerValueContext.Provider>
  );
}
