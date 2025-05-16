import { useState } from "react";
import { RxHalf1, RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Menu from "./Menu";
import Socials from "./Socials";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-center item-center">
      <div>{/* <p className="text-[#8e4aec]">menu</p> */}</div>
      <div className="text-[#8e4aec] z-10" onClick={toggleMenu}>
        {open ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
      <div>
        {open && (
          <div className="">
            <ul className="">
              <a href="">
                <li>About</li>
              </a>

              <a href="">
                <li>Portfolio</li>
              </a>

              <a href="">
                <li>Blogs</li>
              </a>
            </ul>
            <div>
              <Socials />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerMenu;

// export hamburger inside navbar
// if is opened is true i want to render menu else render homepage on my screen
