import Image from "next/image";
import logo from "@/assets/images/riyadhHoldingsLogo.svg";
import menu from "@/assets/icons/Frame 6menu.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between text-white items-center lg:px-5 p-5 lg:w-[1312px]">
        <div>
          <Image src={logo} className="w-[31vw]" alt="Riyadh holding" />
        </div>
        <aside>
          <Image src={menu} className="w-[5vw] cursor-pointer" alt="Riyadh holding"/>
        </aside>
        <aside className="hidden lg:flex"> 
          <div className="flex gap-[5vw] tracking-tighter text-sm font-normal">
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
      </nav>
    </>
  );
};

export default Navbar;
