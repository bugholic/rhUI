import React from "react";
import Image from "next/image";
import heroVector from "../assets/images/HeroSectionVector.svg";

const Hero = () => {
  return (
    <section className="relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-center overflow-clip">
        <Image
          src={heroVector}
          alt="hero-vector"
          className="sm:w-3/4 absolute -right-20 w-3/4 mt-5 ml-auto"
        />
      <p className="p-5 md:pl-20 pb-40 font-[700] pt-64 w-3/4 tracking-wider text-[38px] lg:text-[60px] leading-9  lg:leading-[70px] md:w-full text-white lg:text-left">
        40 YEARS <span className="font-somarLight font-thin">IN THE FIELD OF</span> DEVELOPING
        COMMERCIAL SERVICE PROJECTS <br /> & PUBLIC MARKETS.
      </p>
    </section>
  );
};

export default Hero;
