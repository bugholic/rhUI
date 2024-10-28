"use client";

import Image from "next/image";
import logo from "@/assets/images/riyadhHoldingsLogo.svg";
import menu from "@/assets/icons/Frame 6menu.svg";
import closeMenu from "@/assets/icons/closeMenu.svg";
import { useState } from "react";

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
            <div>About Us</div>
            <div>Sector</div>
            <div>Media Center</div>
            <div>Join Us</div>
            <div>Career</div>
            <div>Contact Us</div>
          </div>

          <div className="dropdown relative inline-block pl-20">
            <button className="dropbtn bg-transparent p-4 border-0 flex">
              العربية
              <span>
                <svg
                  className="-mr-1 h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                </svg>
              </span>
            </button>
            <div className="dropdown-content hidden absolute bg-transparent min-w-40 z-10">
              <a href="#">English</a>
            </div>
          </div>
        </aside>
        {isMenuOpen && (
          <nav className="menu text-2xl font-light">
            <aside>
              <Image
                src={closeMenu}
                className="w-[5vw] pt-5 ml-auto cursor-pointer md:hidden"
                alt="Riyadh holding"
                onClick={handleMenuClick}
              />
            </aside>
            <div>Home</div>
            <div>About Us</div>
            <div>Our Sectors</div>
            <div className="flex">
              Media Center
            </div>
            <div>Join Us</div>
            <div>Career</div>
            <div>Contact Us</div>
          </nav>
        )}
      </nav>
    </>
  );
};

export default Navbar;
