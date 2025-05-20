import React from "react";
import { projectData } from "./ProjectData";
export default function PortfolioPage() {
  console.log(projectData);
  return (
    <div>
      <h1>Projects</h1>
      <Project />
    </div>
  );
}

//all thus happening inside project then rendered inside portfolioPage

const Project = () => {
  return (
    <div>
      <div>
        <h1>{projectData.title}</h1>
        <p>{projectData.description}</p>
      </div>
      <div>
        {projectData.tools.map((tool) => (
          <p>{tool}</p>
        ))}
      </div>
      <div>
        <a ref={projectData.links[0]}>icon</a>
        <a href={projectData.links[1]}>icon</a>
      </div>
      <div>
        <img src={projectData.screenshot} alt="screenshot of project" />
      </div>
    </div>
  );
};
