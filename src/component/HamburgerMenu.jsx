import { useState } from "react";
import { RxHalf1, RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Menu from "./Menu";
import { AnimatePresence, motion } from "framer-motion";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center item-center">
      <div>{/* <p className="text-[#8e4aec]">menu</p> */}</div>
      <div className="text-[#8e4aec] z-10" onClick={toggleMenu}>
        {open ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
      <div>
        <AnimatePresence>
          {open && <Menu closeMenu={closeMenu} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HamburgerMenu;

// export hamburger inside navbar
// if is opened is true i want to render menu else render homepage on my screen
