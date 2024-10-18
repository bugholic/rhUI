import React, { useState } from "react";

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
  return (
    <section className="p-5 lg:px-10">
      <h1 className="p-10 text-[#C2AB80] text-[32px] font-semibold">
        FOUR DECADES OF CONTINUOUS ADVANCEMENT SIGNIFY OUR UNWAVERING COMMITMENT
        TO PROGRESS, EVOLUTION, AND EXCELLENCE
      </h1>
      <div className="flex flex-row overflow-x-scroll">
        {timelineData.map((item, index) => {
          return (
            <section className="timelineSection w-[200px]">
              <h3 className="timelineHeading text-[#154466] text-[38px] font-semibold">
                {item.year}
              </h3>
              <section className="timelineBarSection">
                <div className="timelinespot"></div>
                <div className="timelineLine"></div>
              </section>
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
    </section>
  );
};

export default fourDecades;
