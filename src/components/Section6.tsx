'use client'

import Heading from './Heading'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '@/assets/images/section6/Arrow.svg'
import previous from "@/assets/icons/previous.svg";
import next from "@/assets/icons/next.svg";
import logo1 from "@/assets/images/section6/collageImages/1st/logo.svg";
import c1img1 from "@/assets/images/section6/collageImages/1st/1.svg";
import c1img2 from "@/assets/images/section6/collageImages/1st/2.svg";
import c1img3 from "@/assets/images/section6/collageImages/1st/3.svg";
import logo2 from "@/assets/images/section6/collageImages/2nd/logo.svg";
import c2img1 from "@/assets/images/section6/collageImages/2nd/1.svg";
import c2img2 from "@/assets/images/section6/collageImages/2nd/2.svg";
import c2img3 from "@/assets/images/section6/collageImages/2nd/3.svg";
import logo3 from "@/assets/images/section6/collageImages/3rd/logo.svg";
import c3img1 from "@/assets/images/section6/collageImages/3rd/1.svg";
import c3img2 from "@/assets/images/section6/collageImages/3rd/2.svg";
import c3img3 from "@/assets/images/section6/collageImages/3rd/3.svg";
import logo4 from "@/assets/images/section6/collageImages/4th/logo.svg";
import c4img1 from "@/assets/images/section6/collageImages/4th/1.svg";
import c4img2 from "@/assets/images/section6/collageImages/4th/2.svg";
import c4img3 from "@/assets/images/section6/collageImages/4th/3.svg";
import logo5 from "@/assets/images/section6/collageImages/5th/logo.svg";
import c5img1 from "@/assets/images/section6/collageImages/5th/1.svg";
import c5img2 from "@/assets/images/section6/collageImages/5th/2.svg";
import c5img3 from "@/assets/images/section6/collageImages/5th/3.svg";
import { useEffect, useState } from 'react'


const section6Data = [
    {
        logo: logo1,
        img1: c1img1,
        img2: c1img2,
        img3: c1img3,
        content: 'Second-hand markets hold great potential for Riyadh, fostering vibrant communities and serving public interests.'
    },
    {
        logo: logo2,
        img1: c2img1,
        img2: c2img2,
        img3: c2img3,
        content: "Riyadh Holding develops industrial clusters, ensuring safety and supporting local SMEs, and aligning with Riyadh's vision and Riyadh municipality's agenda."
    },
    {
        logo: logo3,
        img1: c3img1,
        img2: c3img2,
        img3: c3img3,
        content: "Riyadh Holding enhances public spaces with attractions and retail options, improving Riyadh residents' quality of life in the Amusement & Recreation sector."
    },
    {
        logo: logo4,
        img1: c4img1,
        img2: c4img2,
        img3: c4img3,
        content: "These projects align with Riyadh municipality's agenda, showcasing Riyadh Holding's commitment to sustainable growth and innovative problem-solving approaches."
    },
    {
        logo: logo5,
        img1: c5img1,
        img2: c5img2,
        img3: c5img3,
        content: "Riyadh Holding develops Grade A infrastructure that ensures high safety standards in food and healthcare, upgrades smart parking, and enhances mobility in Riyadh."
    }
]



const Section6 = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleNextClick = () => {
        const container = document.querySelector('.sectionContainer');
        if (container) {
            const newPosition = Math.min(scrollPosition + container.clientWidth, container.scrollWidth - container.clientWidth);
            setScrollPosition(newPosition);
            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };

    
  const handlePreviousClick = () => {
    const container = document.querySelector('.sectionContainer');
    if (container) {
      const newPosition = Math.max(scrollPosition - container.clientWidth,0);
      setScrollPosition(newPosition);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };


  setInterval(() => {
    handleNextClick()
  }, 5000);
    return (
        <section className='w-full relative h-full'>
            {/* Mobile Ui */}
            <div className='md:w-3/4'>
                <Heading title="Diverse Industries Driving Growth through Strategic Sector Expansion and Impact" />
            </div>
            <main className='flex flex-row md:hidden overflow-scroll sectionContainer'>
                {section6Data.map((item, index) => (
                    <section key={index} className='min-w-full'>
                        <main className='p-10'>
                            <div className="imgContainer">
                                <Image src={item.logo} alt="image" />
                            </div>
                            <p className='text-[#154466] py-5'>
                                {item.content}
                            </p>
                            <Link href="#" className='flex items-center gap-2 border-b pb-2 border-[#154466] w-fit'><div>Learn More</div> <Image src={arrow} alt="image" /></Link>
                        </main>
                        <section className="imagesCollage">
                            <div>
                                <Image src={item.img1} className='w-full' alt="image" />
                            </div>
                            <div className='flex flex-row gap-5 w-full p-5'>
                                <Image src={item.img2} alt="image" className='w-1/2' />
                                <Image src={item.img3} alt="image" className='w-1/2' />
                            </div>
                        </section>
                    </section>
                ))}
            </main>



            {/* Desktop Ui */}
            <main className='hidden md:flex flex-row overflow-scroll sectionContainer'>
                {section6Data.map((item, index) => (
                    <section className='w-screen flex flex-shrink-0 snap-center' key={index}>
                        <section className="left pr-2 w-1/2">
                            <div className="contentTopPart w-3/4 m-auto">
                                <div className="imgContainer">
                                    <Image src={item.logo} className='w-[294px] h-[99px]' alt="Service Partners Logo" />
                                </div>
                                <p className='text-[#154466] py-5 w-5/6'>
                                    {item.content}
                                </p>
                                <Link href="#" className='flex items-center gap-2 border-b pb-2 border-[#154466] text-[#154466] w-fit'><div>Learn More</div> <Image src={arrow} alt="image" /></Link>
                            </div>

                            <div className="images grid grid-cols-2 gap-1 mt-20">
                                <Image src={item.img2} className='w-[50vw]' alt='img1' width={100} height={100} />
                                <Image src={item.img3} className='w-[50vw] mt-20' alt='img2' width={100} height={100} />
                            </div>
                        </section>
                        <section className="right w-1/2">
                            <Image src={item.img1} className='w-full' alt='img1' width={100} height={100} />
                        </section>
                    </section>
                ))}
            </main>

            <div className="timelineSectionBtn flex p-5 px relative w-[200px] md:ml-auto">
                <div className="bg-[#C2AB80] w-fit py-4 px-6  m-1 text-center cursor-pointer" onClick={handlePreviousClick}> <Image src={previous} alt="previous" /></div>
                <div className="bg-[#C2AB80] w-fit py-4 px-6 m-1 text-center cursor-pointer" onClick={handleNextClick}> <Image src={next} alt="next" /></div>
            </div>
        </section>
    )
}

export default Section6
