import React from "react";
import storyImage from "../assets/images/storyImage.svg";
import Image from "next/image";
const StorySection = () => {
  return (
    <>
      <section>
        <h1 className="p-10 text-[#C2AB80] text-[32px] font-semibold">
          Foundation: <br /> Our Story
        </h1>
        <div className="p-10 pt-0 text-[#154466] text-[16px] font-normal">
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
        <div className="py-10">
          <Image src={storyImage} alt="story-image" />
        </div>
      </section>
    </>
  );
};

export default StorySection;
