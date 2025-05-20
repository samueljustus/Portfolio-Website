import Socials from "./Socials";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Menu = ({ closeMenu }) => {
  const MotionLink = motion(Link);
  const menuVariant = {
    closed: {
      opacity: 0,
      scaleY: 0,
      y: -20,
      transformOrigin: "top",
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      scaleY: 1,
      transformOrigin: "top",
      y: 0,
      transition: {
        duration: 0.7,
        // when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1,
        //   ease: "easeOut",
      },
    },
    exit: {
      scaleY: 0,
      transformOrigin: "top",
      transition: {
        duration: 0.7,
        // ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  rgitconst listContainer = {
    closed: {},

    open: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },

    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20, scale: 0.95 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={menuVariant}
      initial="closed"
      animate="open"
      exit="exit"
      // style={{ transformOrigin: "top" }}
      className="w-screen h-screen fixed top-0 left-0 bg-[#F3F4F6] z-7 flex flex-col"
    >
      <motion.ul
        variants={listContainer}
        initial="closed"
        animate="open"
        exit="exit"
        className="absolute right-0 top-50 px-2 text-base"
      >
        <motion.li variants={itemVariants}>
          <MotionLink to="/about" className="block" onClick={closeMenu}>
            About
          </MotionLink>
        </motion.li>

        <motion.li variants={itemVariants}>
          <MotionLink
            to="/portfolio"
            className="block my-5"
            onClick={closeMenu}
          >
            Portfolio
          </MotionLink>
        </motion.li>

        <motion.li variants={itemVariants}>
          <MotionLink to="/blogs" className="block" onClick={closeMenu}>
            Blogs
          </MotionLink>
        </motion.li>
      </motion.ul>
      <div className="absolute bottom-0 w-screen px-10 flex justify-center my-10 py-10 border-t border-black-300">
        <Socials />
      </div>
    </motion.div>
  );
};

export default Menu;
