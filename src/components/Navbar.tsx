"use client";

import Image from "next/image";
import logo from "@/assets/images/riyadhHoldingsLogo.svg";
import menu from "@/assets/icons/Frame 6menu.svg";
import closeMenu from "@/assets/icons/closeMenu.svg";
import { useState } from "react";
import downArrow from "@/assets/icons/dropDownArrow.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between text-white items-center lg:px-14 p-5 lg:w-[1312px]">
        <div>
          <Image
            src={logo}
            className="w-[31vw] md:w-[13vw]"
            alt="Riyadh holding"
          />
        </div>
        <aside>
          <Image
            src={menu}
            className="w-[5vw] cursor-pointer md:hidden"
            alt="menu"
            onClick={handleMenuClick}
          />
        </aside>
        <aside className="hidden lg:flex items-center">
          <div className="navbarItems text-nowrap flex w-full gap-[5vw] tracking-tighter text-sm font-normal">
            <div>Home</div>
            <div className="flex items-center">
              <div>About Us </div><div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
            </div>
            <div className="flex items-center">
              <div>Sector</div><div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
            </div>
            <div className="flex items-center">
              <div>Media Center</div><div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
            </div>
            <div>Join Us</div>
            <div>Career</div>
            <div>Contact Us</div>
          </div>

          <div className="dropdown relative inline-block pl-20">
            <div className="dropbtn cursor-pointer bg-transparent p-4 border-0 flex">
              <div className="flex items-center">
                <div>العربية</div><Image src={downArrow} width={16} alt="dropDown" /> 
              </div>
            </div>
            <div className="dropdown-content hidden absolute bg-transparent min-w-40 z-10">
              <a href="#">English</a>
            </div>
          </div>
          <div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
        </aside>
        {isMenuOpen && (
          <nav className="mobile-nav-view text-2xl">
            <aside>
              <Image
                src={closeMenu}
                className="w-[5vw] pt-5 ml-auto cursor-pointer md:hidden"
                alt="Riyadh holding"
                onClick={handleMenuClick}
              />
            </aside>
            <div>Home</div>
            <div className="flex items-center">
              <div>About Us </div><div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
            </div>
            <div className="flex items-center">
              <div>Sector</div><div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
            </div>
            <div className="flex items-center">
              <div>Media Center</div><div className="pl-2"><Image src={downArrow} width={16} alt="dropDown" /> </div>
            </div>
            <div>Join Us</div>
            <div>Career</div>
            <div>Contact Us</div>
            <div className="dropdown relative inline-block">
              <div className="dropbtn cursor-pointer bg-transparent p-4 border-0 flex">
                <div className="flex">
                  <div>العربية </div><Image src={downArrow} width={16} alt="dropDown" /> 
                </div>
              </div>
              <div className="dropdown-content hidden absolute bg-transparent min-w-40 z-10">
                <a href="#">English</a>
              </div>
            </div>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navbar;
