import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FourDecades from "@/components/fourDecades";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
const page = () => {
  return (
    <>
      <div id="heroSection">
        <Navbar />
        <Hero />
      </div>
      <StorySection />
      <FourDecades />
      <Section4 />  
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
};

export default page;
