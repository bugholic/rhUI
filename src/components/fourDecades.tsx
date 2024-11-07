"use client";

import React, { useState, useEffect } from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleNextClick = () => {
      const container = document.querySelector(".timelineContainer");
      if (container) {
        const newPosition = Math.min(
          scrollPosition + container.clientWidth,
          container.scrollWidth - container.clientWidth
        );
        setScrollPosition(newPosition);
        container.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }
    };

    const handlePreviousClick = () => {
      const container = document.querySelector(".timelineContainer");
      if (container) {
        const newPosition = Math.max(scrollPosition - container.clientWidth, 0);
        setScrollPosition(newPosition);
        container.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }
    };

    const nextButton = document.getElementById("nextButton");
    const previousButton = document.getElementById("previousButton");

    if (nextButton && previousButton) {
      nextButton.addEventListener("click", handleNextClick);
      previousButton.addEventListener("click", handlePreviousClick);
    }

    return () => {
      if (nextButton && previousButton) {
        nextButton.removeEventListener("click", handleNextClick);
        previousButton.removeEventListener("click", handlePreviousClick);
      }
    };
  }, [scrollPosition]);

  let index = timelineData.length - timelineData.length

  return (
    <section className="p-5 md:px-10 pt-10" aria-readonly>
      <div className="md:w-4/5">
      <Heading title="FOUR DECADES OF CONTINUOUS ADVANCEMENT SIGNIFY OUR UNWAVERING COMMITMENT TO PROGRESS, EVOLUTION, AND EXCELLENCE" />
      </div>
      {/* Mobile View */}
      <div
        className="flex flex-row overflow-x-scroll timelineContainer md:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {timelineData.map((item, index) => {
          return (
            <section className="timelineSection" key={index}>
              <h3 className="timelineHeading md:hidden text-blue text-[38px] font-semibold">
                {item.year}
              </h3>
              <section className="timelineBarSection">
                <div className="h-9 w-9 rounded-full bg-golden timelinespot"></div>
                <div className="timelineLine"></div>
              </section>
              <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
                {item.year}
              </h3>
              <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
                {item.infoHeading}
              </h5>
              <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
                {item.info}
              </p>
            </section>
          );
        })}
      </div>
      <div className="timelineSectionBtn flex md:hidden">
        <div
          id="previousButton"
          className="cursor-pointer bg-gray-400 w-fit p-3 m-1 text-center"
        >
          <Image src={previous} alt="previous" />
        </div>
        <div
          id="nextButton"
          className="cursor-pointer bg-[#C2AB80] w-fit p-3 m-1 text-center"
        >
          <Image src={next} alt="next" />
        </div>
      </div>
      {/* Mobile View */}

      {/* Desktop View */}
      <div
        className="md:flex flex-row overflow-x-scroll timelineContainer hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* upper section */}
        <section className="timelineSection ml-[500px]">
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            {/* RIYADH HOLDING COMPANY ESTABLISHMENT */}
            {timelineData[index + 1].infoHeading}

          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            {/* The transformation into Riyadh Holding Company and the launch of Scrap Metal City as a Public Good Project. */}
            {timelineData[index + 1].info}
          </p>
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            {/* 2012 */}
            {timelineData[index + 1].year}
          </h3>
        </section>

        <section className="timelineSection ml-[130px]">
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            {/* INNOVATIVE VENTURES */}
            {timelineData[index + 3].infoHeading}
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            {timelineData[index + 3].info}
          </p>
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            {timelineData[index + 3].year}
          </h3>
        </section>

        {/* upper section */}
      </div>

      {/* btn and line area */}
      <section className="hidden md:flex items-center">
        <div
          id="previousButton"
          className="cursor-pointer bg-gray-400 w-fit p-3 text-center"
        >
          <Image src={previous} width={50} alt="previous" />
        </div>

        <div className="timelineLine"></div>
        <div className="h-5 w-28 rounded-full bg-golden"></div>
        <div className="timelineLine"></div>
        <div className="h-5 w-28 rounded-full bg-golden"></div>
        <div className="timelineLine"></div>
        <div className="h-5 w-28 rounded-full bg-golden"></div>
        <div className="timelineLine"></div>
        <div className="h-5 w-28 rounded-full bg-golden"></div>
        <div className="timelineLine"></div>
        <div
          // id="nextButton"
          className="cursor-pointer bg-[#C2AB80] w-fit p-2 text-center"
          onClick={() => { index++ }}
        >
          <Image src={next} width={50} alt="next" />
        </div>
      </section>

      {/* btn and line area */}
      <div
        className="md:flex hidden flex-row overflow-x-scroll timelineContainer"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >

        {/* bottom section */}
        <section className="timelineSection ml-[220px]">
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            {timelineData[index + 0].year}
          </h3>
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            {timelineData[index + 0].infoHeading}
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            {timelineData[index + 0].info}
            {/* Foundations in the Al Malgliah and Al Deira Markets */}
          </p>
        </section>


        <section className="timelineSection ml-[100px]">
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            {timelineData[index + 2].year}
          </h3>
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            {timelineData[index + 2].infoHeading}
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            {timelineData[index + 2].info}
          </p>
        </section>

        <section className="timelineSection ml-[400px]">
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            2019
          </h3>
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            URBAN COMMERCIAL DEVELOPMENT
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            Launched Arriyadh Gate, a shopping complex for international brands
          </p>
        </section>


        {/* bottom section */}
      </div>

      {/* Desktop View */}
    </section>
  );
};

export default fourDecades;
