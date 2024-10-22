import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FourDecades from "@/components/fourDecades";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Footer from "@/components/Footer";
import Image from "next/image";
import Sec4Vector from "@/assets/images/section4vector.svg"

const page = () => {
  return (
    <>
      <div id="heroSection">
        <Navbar />
        <Hero />
      </div>
      <StorySection />
      <FourDecades />
      {/* <div className="relative">
      <Image src={Sec4Vector}  className="w-1/2 ml-auto mt-3" alt="vector"/>
      </div> */}
      <Section4 />  
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  );
};

export default page;
