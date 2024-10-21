'use client'

import React, { useState } from "react";
import previous from "../assets/icons/previous.svg";
import next from "../assets/icons/next.svg";
import Image from "next/image";
import Heading from "./Heading";

const timelineData = [
  {
    year: 1985,
    infoHeading: "Pioneering Engineering",
    info: "Foundations in the Al Malgliah and Al Deira Markets",
  },
  {
    year: 2012,
    infoHeading: "RIYADH HOLDING COMPANY ESTABLISHMENT",
    info: "The transformation into Riyadh Holding Company and the launch of Scrap Metal City as a Public Good Project.",
  },
  {
    year: 2015,
    infoHeading: "URBAN REVITALIZATION",
    info: "Transformation of Haraj Ibn Qasim with a new visitor experience, increased security, and new operational standards.",
  },
  {
    year: 2018,
    infoHeading: "INNOVATIVE VENTURES",
    info: "Opening East Center for Spare Parts, the only official center authorized to sell used car spare parts in Riyadh",
  },
  {
    year: 2019,
    infoHeading: "URBAN COMMERCIAL DEVELOPMENT ",
    info: "Launched Arriyadh Gate, a shopping complex for international brands",
  },
  {
    year: 2023,
    infoHeading: "Strategic Expansion",
    info: "Launched our five-year strategy, emphasizing citizen-centric solutions and Riyadh's ecosystem. Agreements with Riyadh municipality were signed to develop Aloraiyja Industrial City and activate King Salman Oasis",
  },
];

const fourDecades = () => {


  const handleNextClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.scrollLeft += 100;
  }

  const handlePreviousClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.scrollLeft -= 100;
  }

  return (
    <section className="p-5 lg:px-10">
      <Heading title="FOUR DECADES OF CONTINUOUS ADVANCEMENT SIGNIFY OUR UNWAVERING COMMITMENT TO PROGRESS, EVOLUTION, AND EXCELLENCE" />
      <div className="flex flex-row overflow-x-scroll">
        {timelineData.map((item, index) => {
          return (
              <section className="timelineSection" key={index}>
                <h3 className="timelineHeading md:hidden text-[#154466] text-[38px] font-semibold">
                  {item.year}
                </h3>
                <section className="timelineBarSection">
                  <div className="timelinespot"></div>
                  <div className="timelineLine"></div>
                </section>
                <h3 className="timelineHeading text-[#154466] text-[38px] font-semibold hidden md:block">
                  {item.year}
                </h3>
                <h5 className="timelineInfo text-[#154466] text-[20px] font-semibold tracking-tighter">
                  {item.infoHeading}
                </h5>
                <p className="timelineInfo text-[#154466] text-[16px] font-normal py-5 tracking-tighter">
                  {item.info}
                </p>
              </section>
          );
        })}
      </div>
      <div className="timelineSectionBtn flex">
        <div onClick={handlePreviousClick} className="cursor-pointer bg-gray-400 w-fit p-3 m-1 text-center"> <Image src={previous} alt="previous" /></div>
        <div onClick={handleNextClick} className="cursor-pointer bg-[#C2AB80] w-fit p-3 m-1 text-center"> <Image src={next} alt="next" /></div>
      </div>
    </section>
  );
};

export default fourDecades;
