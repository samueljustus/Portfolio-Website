import Socials from "./Socials";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Menu = ({ closeMenu }) => {
  
const menuVariant = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3, ease: "easeInOut"
    }
  },
  open: {
    height: "auto",
    opacity: 1,
    transition : {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
}

  return (
    <motion.div variants={menuVariant} className="w-screen h-screen fixed top-0 left-0 bg-[#F3F4F6] z-7 flex flex-col ">
      <ul className="absolute right-0 top-50 px-2 text-base">
        <Link to="/about" onClick={closeMenu}>
          <li>About</li>
        </Link>

        <Link to="/portfolio" className="" onClick={closeMenu}>
          <li className="my-5">Portfolio</li>
        </Link>

        <Link to="/blogs" onClick={closeMenu}>
          <li>Blogs</li>
        </Link>
      </ul>
      <div className="absolute bottom-0 w-screen px-10 flex justify-center my-10 py-10 border-t border-black-300">
        <Socials />
      </div>
    </motion.div>
  );
};

export default Menu;
