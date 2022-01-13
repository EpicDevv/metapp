import React from "react";
import LoginAuth from "../components/LoginAuth";

function Init() {
  return (
    <div className="relative">
      <div className="w-full h-full absolute top-0 left-0 bg-gray-600 opacity-60 z-40"></div>
      <div className=" z-50 flex flex-col absolute z-1 h-4/6 items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-white drop-shadow-xl animate-pulse animate-bounce">User Authenticating...</h1>
      </div>
      <div className="z-50 flex flex-col absolute z-1 h-4/6 items-center justify-end w-full">
        <h1 className="pt-50 animate-pulse">Safe and Secure!</h1>

      </div>
      <div className="w-full h-screen ">
        <LoginAuth />
      </div>
    </div>
  );
}

export default Init;
