import Socials from "./Socials";
import profileImage from "../assets/profile.jpeg";
import { motion } from "framer-motion";

function HeroProfile() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        scale: 1,
        ease: "easeOut"
      },
    },
  };
  return (
    <div className="px-4 md:flex gap-5 items-start md:mt-40">
      <div className="relative overflow-hidden border-4 border-gray-300 rounded-lg mt-20 md:mt-0 md:w-[50%]">
        <img
          src={profileImage}
          alt="profile picture of samuel justus"
          className="block w-full rounded-lg"
        />
      </div>
      <motion.div
        variant={container}
        initial="hidden"
        animate="show"
        className="mt-10 md:mt-0"
      >
        <motion.div variants={fadeIn} className="">
          <p>
            Hi My Name is{" "}
            {/* <span class="bg-gray-300 rounded-full px-7 py-4 w-20 h-20"></span> */}
          </p>
          <h1 className="text-[#8e4aec] my-2 font-bold text-4xl md:text-5xl mb-2 ">
            Samuel Justus
          </h1>
          <p className="mb-4">
            i'm a Software Developer and a Technical Writer based in Lagos,
            Nigeria
          </p>
        </motion.div>
        <Socials  />
      </motion.div>
    </div>
  );
}

export default HeroProfile;
