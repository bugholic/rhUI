import Image from "next/image";
import logo from "@/assets/images/riyadhHoldingsLogo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between text-white items-center lg:px-5 w-[1312px]">
        <div>
          <Image src={logo} className="w-[14vw]" alt="Riyadh holding" />
        </div>
        <aside className="flex"> 
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
