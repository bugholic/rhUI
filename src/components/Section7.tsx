'use client'

import { useState } from "react";
import Heading from "./Heading";
import newsImg from '@/assets/images/section7/Image-1.svg'
import Image from 'next/image';
import previous from "@/assets/icons/previous.svg";
import next from "@/assets/icons/next.svg";

const newsData = [
    {
        img: newsImg,
        date: '19/10/2024',
        title: 'Lorem ipsum dolor sit amet.',
    },
    {
        img: newsImg,
        date: '19/10/2024',
        title: 'Lorem ipsum dolor sit amet.',
    },
    {
        img: newsImg,
        date: '19/10/2024',
        title: 'Lorem ipsum dolor sit amet.',
    }
]


const Section7 = () => {
    
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleNextClick = () => {
        const container = document.querySelector('.sectionContainer');
        if (container) {
            const newPosition = Math.min(scrollPosition + 500, container.scrollWidth - container.clientWidth);
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
      const newPosition = Math.max(scrollPosition - 500, container.scrollWidth + container.clientWidth);
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
        <main>
            <Heading title="news and updates" />
            <main className='md:grid grid-cols-3 gap-2 flex overflow-x-scroll sectionContainer'>
                {newsData.map((item, index) => (
                    <section className="newsCard min-w-full" key={index}>
                        <Image src={item.img} alt="image" className='w-[340px] h-[340px] m-auto object-contain' />
                        <div className="content p-10">
                            <p className="date text-[#C2AB80]">
                                <span>19</span>/
                                <span>10</span>/
                                <span>2024</span>
                            </p>
                            <p className="title font-bold text-xl text-[#154466] py-2">
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p className="text-[#154466] py-2">
                                Lorem ipsum dilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus
                            </p>
                        </div>
                    </section>
                ))}
            </main>
            <div className="timelineSectionBtn flex p-5 px relative w-[200px] md:ml-auto">
                <div className="bg-[#C2AB80] w-fit py-4 px-6  m-1 text-center cursor-pointer" onClick={handlePreviousClick}> <Image src={previous} alt="previous" /></div>
                <div className="bg-[#C2AB80] w-fit py-4 px-6 m-1 text-center cursor-pointer" onClick={handleNextClick}> <Image src={next} alt="next" /></div>
            </div>
        </main>
    )
}

export default Section7
