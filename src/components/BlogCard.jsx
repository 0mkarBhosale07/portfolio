"use client";
import { fira_code } from "@/app/fonts";
import Link from "next/link";
import Image from "next/image";

const FeaturedProjects = (props) => {
  const { name, img, date, id } = props;
  return (
    <Link href={"/blog/" + id}>
      <div className="project-section w-[300px] my-5 mx-auto bg-[#112240] rounded-md pb-5 hover:bg-[#1122402e] hover:shadow-lg hover:shadow-teal-700 transition-all duration-200">
        <div className="image">
          <Image
            src={img}
            alt={name}
            height={100}
            width={1000}
            className="rounded-md mb-5"
          />
        </div>
        <div className="text mx-5">
          <p className="text-[#64FFDA] text-sm my-2">
            <span className={fira_code.className}>{date}</span>
          </p>
          <h1 className="text-[#CCD6F6] text-2xl font-bold mb-7">{name}</h1>
          {/* <p className="desc text-sm">{desc.slice(0, 100) + "..."}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProjects;
