import React from 'react'
import Image from 'next/image'
import thumbnail1 from '@/assets/images/section5/1.svg'
import thumbnail2 from '@/assets/images/section5/2.svg'
import thumbnail3 from '@/assets/images/section5/3.svg'
import thumbnail4 from '@/assets/images/section5/4.svg'
import Heading from './Heading'
const cardData = [
  {
    img: thumbnail1,
    imgTitle:"Ecosystem Design & Management",
    title: "Business Viability Analysis, Strategy, and Planning",
    keyPoints: [
      "Business Viability Analysis, Strategy, and Planning",
      "Customer Experience Evaluation & Assessment",
      "Stakeholder Engagement Workshops for partnership alignment",
      "Initiative Design & Development aligned with organizational goals",
    ]
  },
  {
    img: thumbnail2,
    imgTitle:"Sustainable development",
    title: "Sustainable urban transformation through eco-conscious initiatives, fiscal planning and stakeholder management.",
    keyPoints: [
      "Integrated Tenant Mix Strategy ",
      "Building Plans & Comprehensive Environmental Impact Assessments",
      "Holistic Sustainability Programs and Carbon Footprint Analysis ",
      "Financial Sustainability Models and Supply Chain Management",
      "Relationship management",
    ]
  },
  {
    img: thumbnail3,
    imgTitle:"Operational excellence",
    title: "Operational excellence ensures efficient service delivery and enhances community well-being.",
    keyPoints: [
      "Process Optimization and Efficiency Analysis",
      "Quality Control and Performance Monitoring",
      "Continuous Improvement and Resource Allocation",
      "Risk Management and Compliance Monitoring",
      "Training Programs"
    ]
  },
  {
    img: thumbnail4,
    imgTitle:"Public engagement",
    title: "We value public engagement, involving the community in decision-making for transparency and trust.",
    keyPoints: [
      "Community Outreach and Engagement Programs",
      "Stakeholder Consultation Services",
      "Public Opinion Surveys and Feedback Mechanisms",
      "Community Events and Workshops",
      "Public Relations and Communication Strategies",
    ]
  }
]



const Section5 = () => {
  return (
    <section>
      <div className='md:w-[700px]'>
      <Heading title="PIONEERING URBAN EXCELLENCE AND COMMUNITY REVITALIZATION" />
      </div>

      <main className='flex flex-col lg:flex-row items-center justify-center px-10 leading-6'>

        {cardData.map((card, index) => (
          <div key={index} className='flip-card'>
            
          <section className='p-5 mt-10 w-full rounded-xl bg-[#F5F4F4] md:bg-transparent flip-card-inner'>
            <div className="relative thumbnail flex flex-col items-center justify-center flip-card-front">
              <div className='absolute text-white text-2xl md:text-3xl px-10 sm:px-5 font-semibold text-center md:block'>
              {card.imgTitle.toUpperCase()}
              </div>
              <Image src={card.img} alt="thumbnail1" className=' md:h-[80vh] object-cover' />
            </div>
            <div className='flip-card-back text-[#154466]'>
            <div className='text-xl py-5 font-semibold text-center md:block hidden'>
              {card.imgTitle.toUpperCase()}
              </div>
              <h3 className=' p-3 md:text-sm font-semibold'>  
                {card.title}
              </h3>
              <ul className='font-light md:text-sm pl-3'>
                {card.keyPoints.map((point, index) => (
                  <li key={index} className='mx-5 my-2 list-disc'>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          </div>
        ))}
      </main>
    </section>
  )
}

export default Section5
