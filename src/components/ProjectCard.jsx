import { Github } from "lucide-react";
import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <>
      <div className="bg-[#112240] p-5 rounded-md flex justify-around my-3">
        <h1 className="year text-[#64FFDA] font-bold">{props.year}</h1>
        <h1 className="project-name text-[#CCD6F6] font-bold">{props.name}</h1>
        <Link
          href={props.link}
          className="text-[#CCD6F6] hover:text-[#64FFDA] transition-all duration-200"
        >
          <Github />
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
