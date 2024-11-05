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

  return (
    <section className="p-5 lg:px-10">
      <Heading title="FOUR DECADES OF CONTINUOUS ADVANCEMENT SIGNIFY OUR UNWAVERING COMMITMENT TO PROGRESS, EVOLUTION, AND EXCELLENCE" />
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
        className="flex flex-row overflow-x-scroll timelineContainer"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section className="timelineSection ml-[500px]">
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            RIYADH HOLDING COMPANY ESTABLISHMENT
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            The transformation into Riyadh Holding Company and the launch of Scrap Metal City as a Public Good Project.
          </p>
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            2012
          </h3>
        </section>

        <section className="timelineSection ml-[130px]">
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
          INNOVATIVE VENTURES
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
          Opening East Center for Spare Parts, the only official center authorized to sell used car spare parts in Riyadh
          </p>
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
          2018
          </h3>
        </section>
        
      </div>


      <section className="timelineBarSection flex">
        <div
          id="previousButton"
          className="cursor-pointer bg-gray-400 w-fit p-3 m-1 text-center"
        >
          <Image src={previous} alt="previous" />
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
          id="nextButton"
          className="cursor-pointer bg-[#C2AB80] w-fit p-3 m-1 text-center"
        >
          <Image src={next} alt="next" />
        </div>
      </section>
      <div
        className="flex flex-row overflow-x-scroll timelineContainer"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section className="timelineSection ml-[220px]">
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            1985
          </h3>
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            Pioneering Engineering
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            Foundations in the Al Malgliah and Al Deira Markets
          </p>
        </section>


        <section className="timelineSection ml-[100px]">
          <h3 className="timelineHeading text-blue text-[38px] font-semibold hidden md:block">
            2015
          </h3>
          <h5 className="timelineInfo text-blue text-[20px] font-semibold tracking-tighter">
            URBAN REVITALIZATION
          </h5>
          <p className="timelineInfo text-blue text-[16px] font-normal py-5 tracking-tighter">
            Transformation of Haraj Ibn Qasim with a new visitor experience, increased security, and new operational standards.
          </p>
        </section>



      </div>

      {/* Desktop View */}
    </section>
  );
};

export default fourDecades;
