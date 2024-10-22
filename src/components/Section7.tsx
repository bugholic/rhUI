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
    return (
        <main>
            <Heading title="news and updates" />
            <main className='md:grid grid-cols-3 gap-2'>
                {newsData.map((item, index) => (
                    <section className="newsCard w-full" key={index}>
                        <Image src={item.img} alt="image" className='w-[343px] h-[429px] m-auto object-cover' />
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
            <div className="timelineSectionBtn flex p-5 w-fit ml-auto">
                <div className="bg-[#C2AB80] w-fit p-3 m-1 text-center"> <Image src={previous} alt="previous" /></div>
                <div className="bg-[#C2AB80] w-fit p-3 m-1 text-center"> <Image src={next} alt="next" /></div>
            </div>
        </main>
    )
}

export default Section7
