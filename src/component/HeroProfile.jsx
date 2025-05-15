import Socials from "./Socials";
import profileImage from "../assets/profile.jpeg";
function HeroProfile() {
  return (
    <div className="px-4">
      <div className="relative overflow-hidden border-4 border-gray-300 rounded-lg">
      
        <img
          src={profileImage}
          alt="profile picture of samuel justus"
          className="block w-full rounded-lg"
        />
      </div>
      <div className="mt-10">
        <p>
          Hi My Name is{" "}
          {/* <span class="bg-gray-300 rounded-full px-7 py-4 w-20 h-20"></span> */}
        </p>
        <h1 className="text-[#8e4aec] my-2 font-bold text-4xl mb-2 ">Justus Samuel</h1>
        <p className="mb-4">
          i'm a Software Developer and a Technical Writer based in Lagos, Nigeria
        </p>
        <Socials />
      </div>
    </div>
  );
}

export default HeroProfile;
