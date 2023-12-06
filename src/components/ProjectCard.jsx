import { Github } from "lucide-react";
import Link from "next/link";

const ProjectCard = (props) => {
  const { name, link, year } = props;
  console.log(link);
  return (
    <>
      <div className="bg-[#112240] py-5 px-10 md:px-32 rounded-md flex justify-between my-3">
        <h1 className="year text-[#64FFDA] font-bold">{year}</h1>
        <h1 className="project-name text-[#CCD6F6] font-bold">{name}</h1>
        <Link
          href={link}
          className="text-[#CCD6F6] hover:text-[#64FFDA] transition-all duration-200"
        >
          <Github />
        </Link>
      </div>
    </>
  );
};
export default ProjectCard;
