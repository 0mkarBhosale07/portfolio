import { fira_code } from "../fonts";
import ProjectCard from "@/components/ProjectCard";
import { ProjectData } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <div className="px-16">
        <h1 className="text-center text-[#64FFDA] text-xl">
          <span className={fira_code.className}>Project List</span>
        </h1>

        <div className="projects">
          <div className="  p-5 flex justify-around my-3">
            <h1 className=" font-bold">Year</h1>
            <h1 className="project-name font-bold">Project Name</h1>
            <h1 className="font-bold">Link</h1>
          </div>

          {ProjectData.map((val, ind) => (
            // <h1 key={ind}>{val.year}</h1>
            <ProjectCard
              key={ind}
              name={val.title}
              link={val.link}
              year={val.year}
            />
            // <ProjectCard
            //   key={ind}
            //   props={{
            //     name: val.title,
            //     desc: val.para,
            //     tech: val.tech,
            //     githubLink: val.github,
            //     link: val.link,
            //   }}
            // />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
