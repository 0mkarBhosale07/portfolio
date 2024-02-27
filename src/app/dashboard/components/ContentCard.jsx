"use client";
import { fira_code } from "@/app/fonts";
import Link from "next/link";

const ContentCard = (props) => {
  const { name, link } = props;
  return (
    <Link href={`/dashboard/` + link}>
      <div className="project-section my-5 w-fit px-10 mx-auto bg-[#112240] rounded-md p-5 text-center text-[#CCD6F6]  hover:text-teal-400 transition-all duration-200">
        <h1 className="text-2xl font-bold ">{name}</h1>
      </div>
    </Link>
  );
};

export default ContentCard;
