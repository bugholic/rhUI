import Image from "next/image"
import mail from "@/assets/icons/mail.svg"
import phone from "@/assets/icons/phone.svg"
import X from "@/assets/icons/X.svg"
import arrow from "@/assets/icons/Arrow.svg"
import footerVector from "@/assets/images/footer/footerVector.svg"

const projects = [
    "Al Maigliah Market Center",
    "Dirah Markets",
    "Haraj Ibn Qasim",
    "Scrap Metal City",
    "Arriyadh Gate",
    "East Center",
    "Aloraiyja Industrial",
    "King salman oasis",
]


const Footer = () => {
    return (
        <footer className="bg-[#154466] md:flex md:items-center">
            <main className=' p-5 pb-0 md:flex md:flex-row-reverse w-full'>
                <div className="contact-Information w-1/2">

                    <h1 className="py-5 text-[#C2AB80] text-2xl font-semibold">
                        CONTACT US
                    </h1>

                    <p className='text-white text-left opacity-50 font-light md:w-2/5'>
                        Kingdom of Saudi Arabia
                        Riyadh - Dira District
                        Imam Turki Ibn Abdullah Bin Mohammed St.
                        Al- Moaiqliah Trading Centre
                        4th floor - Office #413
                    </p>
                    <div className="contacts text-white font-light pt-5 leading-10">
                        <div className='mail flex items-center gap-2'>
                            <Image src={mail} alt="mail" />
                            <p>riyadhholding.sa</p>
                        </div>
                        <div className='phone flex items-center gap-2'>
                            <Image src={phone} alt="phone" />
                            <p>92 001 3357</p>
                        </div>
                        <div className='X flex items-center gap-2'>
                            <Image src={X} alt="X" />
                            <p>@Riyadh_Holding</p>
                        </div>
                    </div>

                </div>
                <div className="projects md:w-1/2">
                    <h1 className="py-5 text-[#C2AB80] text-2xl font-semibold">
                        OUR PROJECTS
                    </h1>
                    <div className="leading-10 text-white font-light text-lg">
                        {projects.map((project, index) => (
                            <p key={index}>{project}</p>
                        ))}
                    </div>
                    <p className='text-white text-left opacity-50 font-light py-5'>
                        Apply to rent a unit at one of our projects
                    </p>
                    <div className="flex items-center gap-2 bg-[#C4AD81] px-5 py-2 rounded-sm text-[#154466] text-center w-[180px]">
                        <div>Rental Request</div>
                        <Image src={arrow} alt="arrow" />
                    </div>
                    <p className='text-[#C4AD81] text-left opacity-50 font-light py-5'>
                        @2024 All rights reserved to Riyadh Holding Company
                        <br />
                        Terms and Conditions
                    </p>
                </div>
            </main>
            <div className="image-container">
                <Image src={footerVector} alt="logo" className="w-[200px]  ml-auto md:w-[680px] md:h-[630px]" />
            </div>
        </footer>
    )
}

export default Footer
