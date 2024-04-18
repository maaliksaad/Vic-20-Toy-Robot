import React from "react";
import HeroContetnt from "../sub/HeroContetnt";

const Hero = () => {
  return (
    <div className="relative top-[-90px] flex flex-col w-full ">
      <div className="min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" z-[1] w-full h-full object-cover top-0"
        >
          <source src="/video/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 w-full h-56 bg-gradient-to-b from-transparent to-[#0F051D]" />
      </div>

      <HeroContetnt />
    </div>
  );
};

export default Hero;
