"use client";
import { fira_code } from "@/app/fonts";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const FeaturedProjects = ({ props }) => {
  return (
    <div className="project-section w-[300px] my-5 mx-auto bg-[#112240] rounded-md p-5">
      <p className="text-[#64FFDA] text-sm my-2">
        <span className={fira_code.className}>Featured Projects</span>
      </p>
      <h1 className="text-[#CCD6F6] text-2xl font-bold mb-7">{props.name}</h1>
      <p className="desc text-sm">{props.desc}</p>

      <div className="tech flex gap-4 text-sm my-3 text-[#CCD6F6]">
        {props.tech.map((val, ind) => (
          <h1 className="text-[#64FFDA]" key={ind}>
            {val}
          </h1>
        ))}
      </div>

      <div className="link flex gap-3 text-[#CCD6F6] mt-5">
        <Link target="_blank" href={props.githubLink}>
          <Github className="hover:text-[#64FFDA] hover:cursor-pointer" />
        </Link>
        <Link target="_blank" href={props.link}>
          <ExternalLink className="hover:text-[#64FFDA] hover:cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
