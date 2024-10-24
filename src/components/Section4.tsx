import Image from "next/image"
import Heading from "./Heading"
import vector4 from "@/assets/images/ImpactImgPattern-CJKyzewL.png"

const section4Data = [
    {
        borderColor: "#C2AB80",
        title: "Participate in the enhancement of the quality of life in Riyadh",
    },
    {
        borderColor: "teal",
        title: "Support Riyadh municipality's strategic agenda in coordination with other strategic entities within its ecosystem",
    },
    {
        borderColor: "midnightblue",
        title: "Enhance value chains for critical sectors to contribute to Riyadh's development",
    },
]

const Section4 = () => {
    return (
        <section>
            <div className="flex">
        <Heading title="WE DRIVE STRATEGIC IMPACT THAT RESONATES WITH OUR PARTNERS AND CONTRIBUTES TO A BETTER QUALITY OF LIFE." />
        <div>
            <Image src={vector4} alt="vectoreImage"/>
        </div>
                </div>   

            <section className='p-10 lg:grid grid-cols-3 gap-20'>
                {section4Data.map((item, index) => (
                    <div key={index} className="indexSection flex flex-row">
                        <div className='font-bold text-[#154466] text-[32px] lg:text-[40px]'>0{index + 1}</div>
                        <div className='flex flex-col px-5'>
                            <div className={`border-2 bg-[${item.borderColor}] border-[${item.borderColor}] w-20 h-2 mt-6`}></div>
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