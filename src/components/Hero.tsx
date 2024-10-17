import React from "react";
import Image from "next/image";
import heroVector from "../assets/images/HeroSectionVector.svg";

const Hero = () => {
  return (
    <section className="relative lg:">
        <Image
          src={heroVector}
          alt="hero-vector"
          className="w-1/2 ml-auto overflow-hidden"
        />
      <p className="p-5 pb-40 font-[700] text-[40px] leading-[45px] w-full text-white tracking-[-1.6px]">
        40 YEARS <span className="font-[200]">IN THE FIELD OF</span> DEVELOPING
        COMMERCIAL, SERVICE PROJECTS <br /> & PUBLIC MARKETS.
      </p>
    </section>
  );
};

export default Hero;
