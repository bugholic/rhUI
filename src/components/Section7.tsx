"use client";

import { useState, useEffect } from "react";
import Heading from "./Heading";
import newsImg from "@/assets/images/section7/Image-1.svg";
import Image from "next/image";
import previous from "@/assets/icons/previous.svg";
import next from "@/assets/icons/next.svg";

const newsData = [
  {
    img: newsImg,
    date: "19/10/2024",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: newsImg,
    date: "19/10/2024",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: newsImg,
    date: "19/10/2024",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: newsImg,
    date: "19/10/2024",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: newsImg,
    date: "19/10/2024",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    img: newsImg,
    date: "19/10/2024",
    title: "Lorem ipsum dolor sit amet.",
  },
];

const Section7 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNextClick = () => {
    const container = document.querySelector(".sectionContainer");
    if (container) {
      const newPosition = Math.min(
        scrollPosition + 450,
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
    const container = document.querySelector(".sectionContainer");
    if (container) {
      const newPosition = Math.max(scrollPosition - 450, 0);
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="md:px-10">
      <h1 className="md:p-10 p-10 text-[#C2AB80] text-[32px] lg:text-[40px] font-semibold">
        NEWS AND UPDATES
      </h1>
      <main className="flex w-full m-auto overflow-scroll sectionContainer" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {newsData.map((item, index) => (
          <section className="newsCard min-w-[430px]" key={index}>
            <Image
              src={item.img}
              alt="image"
              className="w-[427px] h-[415px
            ] m-auto object-contain"
            />
            <div className="content p-10">
              <p className="date text-[#C2AB80]">
                <span>19</span>/<span>10</span>/<span>2024</span>
              </p>
              <p className="title font-bold text-xl text-[#154466] py-2">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-[#154466] py-2 w-full pr-14">
                Lorem ipsum dilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus
              </p>
            </div>
          </section>
        ))}
      </main>

      <div className="timelineSectionBtn flex p-5 py-20 relative w-[200px] ml-auto">
        <div
          onClick={handlePreviousClick}
          className="bg-[#C2AB80] w-fit py-4 px-6  m-1 text-center cursor-pointer"
          id="previousButton"
        >
          <Image src={previous} alt="previous" />
        </div>
        <div
          onClick={handleNextClick}

          className="bg-[#C2AB80] w-fit py-4 px-6 m-1 text-center cursor-pointer"
          id="nextButton"
        >
          <Image src={next} alt="next" />
        </div>
      </div>
    </main>
  );
};

export default Section7;
