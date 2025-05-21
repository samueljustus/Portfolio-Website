import React from "react";
import { projectData } from "./ProjectData";
import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { motion } from "motion/react";
// import screenshot from  '../assets/Screenshot .png'
export default function PortfolioPage() {

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-8 font-Nunito">Projects</h1>
      <motion.div
        whileHover={{ scale: 1.05}}
        // whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className=""
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div className="bg-[#E5E7EB] px-5 mb-5 pb-10 rounded-md font-sans max-w-[1000px] hover:border-1 border-[#8e4aec]">
      <div>
        <h1 className="text-2xl font-bold pt-10 pb-4 text-[#111827]">
          {project.title}
        </h1>
        <p className="text-[.75rem] pb-4 text-[#374151]">
          {project.description}
        </p>
      </div>
      <div className="flex gap-3 text-xs ">
        {project.tools.map((tool, i) => (
          <p className="text-[#6B7280]" key={i}>
            {tool}
          </p>
        ))}
      </div>
      <div className="flex gap-3 py-4">
        <a href={project.github}>
          <FaGithub />
        </a>
        <a href={project.liveLink}>
          <CiLink />
        </a>
      </div>
      <div className="max-w-[250px] m-auto">
        <img src={project.screenshot} alt="screenshot of project" />
      </div>
    </motion.div>
  );
};
