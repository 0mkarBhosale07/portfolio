"use client";
import { fira_code } from "@/app/fonts";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const FeaturedProjects = (props) => {
  const { name, desc, date } = props;
  return (
    <Link href="/">
      <div className="project-section w-[300px] my-5 mx-auto bg-[#112240] rounded-md p-5 hover:bg-[#1122407f] hover:shadow-lg transition-all duration-200">
        <p className="text-[#64FFDA] text-sm my-2">
          <span className={fira_code.className}>{date}</span>
        </p>
        <h1 className="text-[#CCD6F6] text-2xl font-bold mb-7">{name}</h1>
        <p className="desc text-sm">{desc.slice(0, 100) + "..."}</p>
      </div>
    </Link>
  );
};

export default FeaturedProjects;