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
        <section>
            <div className="relative md:flex md:flex-row-reverse">
                <div>
                    <Image src={vector4} className=" md:w-[300px] w-[40vw] absolute -top-28 right-0" alt="vectoreImage" />
                </div>
                <h1 className="sm:w-3/4 mr-auto p-10 text-[#C2AB80] text-[32px] lg:text-[40px] font-semibold">
                    WE DRIVE <br className="sm:hidden" /> STRATEGIC IMPACT THAT RESONATES WITH OUR PARTNERS AND CONTRIBUTES TO A BETTER QUALITY OF LIFE.
                </h1>
            </div>

            <section className='p-10 lg:grid grid-cols-3 gap-20'>
                {section4Data.map((item, index) => (
                    <div key={index} className="indexSection flex flex-row">
                        <div className='font-bold text-[#154466] text-[32px] lg:text-[40px]'>0{index + 1}</div>
                        <div className='flex flex-col px-5'>
                            <div className={`bg-[#${item.bgColor}] w-20 h-2 mt-6`}></div>
                            <p className='text-[#154466] py-2 font-semibold text-[20px] lg:text-[24px]'>
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </section>


        </section>
    )
}

export default Section4