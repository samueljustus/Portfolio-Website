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
        duration: 0.3,

        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    exit: {
      scaleY: 0,
      transformOrigin: "top",
      backgroundColor: "#8e4aec",
      transition: {
        duration: 0.3,

        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const listContainer = {
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
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        scale: 1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 40, scale: 0.95 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
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
      className=" fixed inset-0 top-0 left-0 bg-[#E5E7EB] z-7 flex flex-col overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#8e4aec] z-0" /> //
      <motion.div
        initial={{
          height: 0,
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
        animate={{
          height: "100%",
          borderBottomLeftRadius: "0rem",
          borderBottomRightRadius: "0rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        exit={{
          height: 0,
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
        className="absolute top-0 left-0 w-full bg-[#E5E7EB] z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        exit={{ height: 0 }}
        className="relative z-20 p-4"
      ></motion.div>
      <motion.ul
        variants={listContainer}
        initial="closed"
        animate="open"
        exit="exit"
        className="absolute right-0 top-50 px-2 text-base font-bold z-20"
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
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute bottom-0 w-screen flex justify-center my-10 py-10 z-20"
      >
        <Socials />
      </motion.div>
    </motion.div>
  );
};

export default Menu;
