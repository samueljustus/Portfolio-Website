import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Socials() {
  return (
    <div className="flex gap-4">
      <a href="" aria-label="GitHub">
        <FaGithub />
      </a>

      <a href="">
        <FaLinkedin aria-label="LinkedIn" />
      </a>
      <a href="" aria-label="Medium">
        <FaMedium />
      </a>
      <a href="" aria-label="Mail">
        <CiMail />
      </a>
    </div>
  );
}

export default Socials;
