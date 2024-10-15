import Image from "next/image";
import logo from "@/assets/images/riyadhHoldingsLogo.svg"

const Navbar = () => {
  return <nav>
    <Image 
    src={logo}
    alt="Riyadh Holdings"
    />

  </nav>;
};

export default Navbar;
