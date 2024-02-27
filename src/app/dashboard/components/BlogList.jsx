import { Trash2, Pencil } from "lucide-react";
import Link from "next/link";
import DeleteBlog from "./Delete";

const BlogList = (props) => {
  const { title, date, id } = props;
  return (
    <div className="px-5 md:px-20 ">
      <div className="flex justify-center">
        <div className="bg-[#112240] py-5 px-10 rounded-md flex justify-around gap-10 my-3 w-[300px] lg:w-[500px]">
          <h1 className="year text-[#64FFDA] font-bold hidden md:block">
            {date}
          </h1>
          <h1 className="project-name text-[#CCD6F6] font-bold">{title}</h1>
          <div className="icons flex gap-5">
            <Link
              href={"/dashboard/blogs/update/" + id}
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-all duration-200"
            >
              <Pencil />
            </Link>
            {/* <Link
              href={id}
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-all duration-200"
            >
              <Trash2 />
            </Link> */}
            <DeleteBlog id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
