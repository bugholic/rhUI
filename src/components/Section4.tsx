import Image from "next/image"
import Heading from "./Heading"
import vector4 from "@/assets/images/ImpactImgPattern-CJKyzewL.png"

const section4Data = [
    {
        bgColor: "C2AB80",
        title: "Participate in the enhancement of the quality of life in Riyadh",
    },
    {
        bgColor: "C2AB80",
        title: "Support Riyadh municipality's strategic agenda in coordination with other strategic entities within its ecosystem",
    },
    {
        bgColor: "C2AB80",
        title: "Enhance value chains for critical sectors to contribute to Riyadh's development",
    },
]

const Section4 = () => {
    return (
        <section className="md:pt-20 md:pl-20 pl-5">
            <div className="md:relative md:flex md:flex-row-reverse overflow-x-clip">
                <div>
                    <Image src={vector4} className=" md:w-[350px] w-[40vw] ml-auto md:absolute md:-top-[200px] md:-right-14 " alt="vectoreImage" />
                </div>
                <h1 className="sm:w-[65%] mr-auto text-[#C2AB80] text-[32px] lg:text-[40px] font-semibold pr-10">
                    WE DRIVE <br className="sm:hidden" /> STRATEGIC IMPACT THAT RESONATES WITH OUR PARTNERS AND CONTRIBUTES TO A BETTER QUALITY OF LIFE.
                </h1>
            </div>

            <section className='p-5 lg:grid grid-cols-3 gap-20'>
                <div className="indexSection flex flex-row">
                    <div className='font-bold text-blue text-[32px] lg:text-[40px]'>01</div>
                    <div className='flex flex-col px-5'>
                        <div className={`bg-golden w-20 h-2 mt-6`}></div>
                        <p className='text-blue py-2 font-semibold text-[20px] lg:text-[24px]'>
                            Participate in the enhancement of the quality of life in Riyadh
                        </p>
                    </div>
                </div>
                <div className="indexSection flex flex-row">
                    <div className='font-bold text-blue text-[32px] lg:text-[40px]'>02</div>
                    <div className='flex flex-col px-5'>
                        <div className={`bg-[#609080] w-20 h-2 mt-6`}></div>
                        <p className='text-blue py-2 font-semibold text-[20px] lg:text-[24px]'>
                            Support Riyadh municipality's strategic agenda in coordination with other strategic entities within its ecosystem
                        </p>
                    </div>
                </div>
                <div className="indexSection flex flex-row">
                    <div className='font-bold text-blue text-[32px] lg:text-[40px]'>03</div>
                    <div className='flex flex-col px-5'>
                        <div className={`bg-blue w-20 h-2 mt-6`}></div>
                        <p className='text-blue py-2 font-semibold text-[20px] lg:text-[24px]'>
                            Enhance value chains for critical sectors to contribute to Riyadh's development
                        </p>
                    </div>
                </div>
            </section>


        </section>
    )
}

export default Section4