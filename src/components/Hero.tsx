import React from "react";
import Image from "next/image";
import heroVector from "../assets/images/HeroSectionVector.svg";

const Hero = () => {
  return (
    <section className="relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
        <Image
          src={heroVector}
          alt="hero-vector"
          className="w-3/4 mt-5 ml-auto overflow-hidden"
        />
      <p className="p-5 pl-20 pb-40 font-[700] text-[38px] lg:text-[60px] leading-[45px] lg:leading-[70px] w-full text-white tracking-[-1.6px] lg:text-left">
        40 YEARS <span className="font-somarLight font-thin">IN THE FIELD OF</span> DEVELOPING
        COMMERCIAL SERVICE PROJECTS <br /> & PUBLIC MARKETS.
      </p>
    </section>
  );
};

export default Hero;
