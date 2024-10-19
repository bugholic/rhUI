import Heading from './Heading'
import Image from 'next/image'
import logo1 from '@/assets/images/section6/logos-43sectorLogo1.svg'
import Link from 'next/link'
import arrow from '@/assets/images/section6/Arrow.svg'
import collageImg1 from '@/assets/images/section6/collageImages/Image-1.svg'
import collageImg2 from '@/assets/images/section6/collageImages/2nd image.svg'
import collageImg3 from '@/assets/images/section6/collageImages/3rd Image.svg'
import previous from "../assets/icons/previous.svg";
import next from "../assets/icons/next.svg";



const Section6 = () => {
    return (
        <section>
            <Heading title="Diverse Industries Driving Growth through Strategic Sector Expansion and Impact" />

            <main className='p-10'>
                <div className="imgContainer">
                    <Image src={logo1} alt="image" />
                </div>
                <p className='text-[#154466] py-5'>
                    Second-hand markets hold great potential for Riyadh, fostering vibrant communities and serving public interests.
                </p>
                <Link href="#" className='flex items-center gap-2 border-b pb-2 border-[#154466] w-fit'><div>Learn More</div> <Image src={arrow} alt="image" /></Link>
            </main>
            <section className="imagesCollage">
                <div>
                    <Image src={collageImg1} className='w-full' alt="image" />
                </div>
                <div className='flex flex-row gap-5 w-full p-5'>
                    <Image src={collageImg2} alt="image" className='w-full' />
                    <Image src={collageImg3} alt="image" className='w-full' />
                </div>
            <div className="timelineSectionBtn flex p-5">
                <div className="bg-[#C2AB80] w-fit p-3 m-1 text-center"> <Image src={previous} alt="previous" /></div>
                <div className="bg-[#C2AB80] w-fit p-3 m-1 text-center"> <Image src={next} alt="next" /></div>
            </div>
            </section>
        </section>
    )
}

export default Section6
