"use client";
import dynamic from "next/dynamic";
import { projects } from "../../app/data/projects";
import Marquee from "../marquee";

const ProjectCard = dynamic(() => import("./ProjectCard"), { ssr: false });

const Projects = () => {
  return (
    <div className="bg-background relative flex w-full flex-col items-center justify-center overflow-hidden py-12">
      <Marquee className="mt-8" pauseOnHover>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </Marquee>
    </div>
  );
};

export default Projects;
