import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function Socials() {
  return (
    <div className="flex gap-5 text-xl">
      <a href="https://github.com/samueljustus" aria-label="GitHub" target="_blank">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/justus-samuel/" target="_blank">
        <FaLinkedin aria-label="LinkedIn" />
      </a>
      <a href="https://medium.com/@samueljustus" aria-label="Medium" target="_blank">
        <FaMedium />
      </a>
      <a href="mailto:olaoluwajustus@gmail.com?subject=Hello&body=I%20wanted%20to%20contact%20you" aria-label="Mail">
        <CiMail />
      </a>
    </div>
  );
}

export default Socials;
