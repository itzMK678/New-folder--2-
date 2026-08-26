import React from "react";
import Me from "../assets/Me.png";
import { CircleUser } from "lucide-react";

const AboutCards = () => {
  return (
    <div className="m-15 border border-2 relative w-[300px] h-[380px] rounded-[35px] overflow-hidden p-6   bg-blue-400/20 
  backdrop-blur-xl 
  border border-blue-200/40 ">

     
    

      {/* Title */}
      <h2 className="relative z-20 mt-30 text-[22px] font-bold pl-2 leading-tight">
      Mamoon 
        <br />
        Khaliq
      </h2>
  <div className="relative mt-3 z-20 bg-white w-fit px-6 py-2 rounded-full text-sm font-medium shadow-sm">
        Founder
      </div>
      {/* Image */}
      <img
        src={Me}
        alt="Fashion"
        className="absolute z-10 w-[230px] h-[300px] object-cover object-top right-[-15px] top-[25px]"
      />

      {/* Bottom price section */}
      <div className=" mx-3  absolute z-20 bottom-2 left-0 w-full h-[55px] bg-black backdrop-blur-lg rounded-l-[35px] flex items-center justify-between px-7">

        <p className=" text-2xl font-bold text-white shadow-">
          Connect
        </p>

        {/* Cart Button */}
        <button className="w-[45px] h-[45px] bg-black  rounded-full flex items-center justify-center text-white hover:scale-105 transition">
          <CircleUser  size={28} />
        </button>

      </div>

    </div>
  );
};

export default AboutCards;