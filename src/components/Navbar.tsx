"use client"

import Image from "next/image";
import logo from "@/assets/images/riyadhHoldingsLogo.svg";
import menu from "@/assets/icons/Frame 6menu.svg";
import closeMenu from "@/assets/icons/closeMenu.svg"
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between text-white items-center lg:px-14 p-5 lg:w-[1312px] relative">
        <div>
          <Image src={logo} className="w-[31vw] md:w-[15vw]" alt="Riyadh holding" />
        </div>
        <aside>
          <Image src={menu} className="w-[5vw] cursor-pointer md:hidden" alt="Riyadh holding" onClick={handleMenuClick} />
        </aside>
        <aside className="hidden lg:flex">
          <div className="navbarItems flex gap-[5vw] tracking-tighter text-sm font-normal">
            <div>Home</div>
            <div>About Us</div>
            <div>Sector</div>
            <div>Media Center</div>
            <div>Join Us</div>
            <div>Career</div>
            <div>Contact Us</div>
          </div>
          <select className="bg-transparent pl-20" name="language" id="lang">
            <option value="العربية">العربية</option>
            <option value="English">English</option>
          </select>
        </aside>
        {
          isMenuOpen &&
          <nav className="menu text-2xl font-light">
            <aside>
              <Image src={closeMenu} className="w-[5vw] pt-5 ml-auto cursor-pointer md:hidden" alt="Riyadh holding" onClick={handleMenuClick} />
            </aside>
            <div>Home</div>
            <div>About Us</div>
            <div>Our Sectors</div>
            <div>Media Center</div>
            <div>Join Us</div>
            <div>Career</div>
            <div>Contact Us</div>
          </nav>
        }
      </nav >
    </>
  );
};

export default Navbar;
