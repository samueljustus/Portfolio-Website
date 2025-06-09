import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { motion, MotionConfig } from "framer-motion";
function Socials({}) {

  const fadeIn = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        scale: 1,
        ease: "easeOut"
      },
    },
  };
  return (
    <motion.div variants={fadeIn} className="flex gap-5 text-xl">
      <MotionConfig
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <motion.a
          href="https://github.com/samueljustus"
          aria-label="GitHub"
          target="_blank"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/justus-samuel/"
          target="_blank"
        >
          <FaLinkedin aria-label="LinkedIn" />
        </motion.a>
        <motion.a
          href="https://medium.com/@samueljustus"
          aria-label="Medium"
          target="_blank"
        >
          <FaMedium />
        </motion.a>
        <motion.a
          href="mailto:olaoluwajustus@gmail.com?subject=Hello&body=I%20wanted%20to%20contact%20you"
          aria-label="Mail"
        >
          <CiMail />
        </motion.a>
      </MotionConfig>
    </motion.div>
  );
}

export default Socials;
