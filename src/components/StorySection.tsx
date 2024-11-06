import React from "react";
import storyImage from "../assets/images/storyImage.svg";
import Image from "next/image";
const StorySection = () => {
  return (
    <>
      <section className="w-full pr-10 pt-10">
        <h1 className="p-10 text-[#C2AB80] text-[32px] font-semibold lg:hidden">
          Foundation: <br /> Our Story
        </h1>
        <main className="lg:flex lg:flex-row-reverse w-full">
        <div className="p-10 pt-5 text-[#154466] text-[16px] font-normal w-full lg:w-[700px]">
        <h1 className="py-10 text-[#C2AB80] text-5xl tracking-wider font-semibold hidden lg:block">
        Our Story : Foundation
        </h1>
          <p>
            In the heart of Riyadh, a vision was born; to revitalize and
            regenerate the urban landscape and to redefine the role of
            public-private partnerships for sustainable impact. Riyadh Holding
            Company was established to bring this vision to life, and so, for
            the past 40 years, we have been instrumental in regenerating central
            Riyadh. Our pioneering commercial developments and significant
            public-good projects have not only transformed the city but also set
            new standards for urban development.
          </p>
          <br />
          <p>
            As we enter a new strategic era, we are poised for transformative
            growth, prioritizing ecosystem development to empower key sectors
            and enhance citizen experiences. Our commitment to sustainable urban
            growth and citizen-centric solutions is a manifestation of our
            determination to build a prosperous & sustainable future for our
            people.
          </p>
        </div>
        <div className="py-10 lg:w-1/2 lg:mr-auto">
          <Image src={storyImage} className="w-[600px]" alt="story-image" />
        </div>
        </main>
      </section>
    </>
  );
};

export default StorySection;
