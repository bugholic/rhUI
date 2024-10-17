import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FourDecades from "@/components/fourDecades";
const page = () => {
  return (
    <>
      <div id="heroSection">
        <Navbar />
        <Hero />
      </div>
      <StorySection />
      <FourDecades />
    </>
  );
};

export default page;
