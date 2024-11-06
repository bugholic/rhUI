import React from "react";
import Image from "next/image";
import heroVector from "../assets/images/HeroSectionVector.svg";

const Hero = () => {
  return (
    <section className="relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-center ">
        <Image
          src={heroVector}
          alt="hero-vector"
          className="absolute -right-14 w-[300px] md:w-[450px] md:right-0 md:top-8 ml-auto"
        />
      <p className="p-5 md:pl-20 pb-40 font-[700] pt-64 md:pt-40 w-3/4 mr-auto tracking-wider text-[38px] lg:text-[60px] leading-9 lg:leading-[70px] text-white lg:text-left">
        40 YEARS <span className="font-somarLight font-thin">IN THE FIELD OF</span> DEVELOPING
        COMMERCIAL SERVICE PROJECTS <br /> & PUBLIC MARKETS.
      </p>
    </section>
  );
};

export default Hero;
