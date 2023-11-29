import Image from "next/image";
import { fira_code } from "@/app/fonts";

const Skills = () => {
  return (
    <div>
      <div className="skills-section grid grid-cols-1 md:grid-cols-2">
        <div className="programing my-10">
          <h1 className="text-center text-[#64FFDA] text-lg">
            <span className={fira_code.className}>Programming Languages</span>
          </h1>
          <div className="icons mt-5 flex justify-center gap-5">
            <Image
              className="w-10"
              src="/assets/js.png"
              alt="js"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/python.png"
              alt="python"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/ts.png"
              alt="ts"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/c.png"
              alt="c"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/node.png"
              alt="node"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="frontend my-10">
          <h1 className="text-center text-[#64FFDA] text-lg">
            <span className={fira_code.className}>Frontend Development</span>
          </h1>
          <div className="icons mt-5 flex justify-center gap-5">
            <Image
              className="w-10"
              src="/assets/html.png"
              alt="html"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/css.png"
              alt="css"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/reactjs.png"
              alt="react"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/tailwind.png"
              alt="tailwind css"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/bootstrap.png"
              alt="bootstrap"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="backend my-10">
          <h1 className="text-center text-[#64FFDA] text-lg">
            <span className={fira_code.className}>Backend Development</span>
          </h1>
          <div className="icons mt-5 flex justify-center gap-5">
            <Image
              className="w-10"
              src="/assets/nextjs.png"
              alt="nextjs"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/flask.png"
              alt="flask"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/express.png"
              alt="express"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="database my-10">
          <h1 className="text-center text-[#64FFDA] text-lg">
            <span className={fira_code.className}>Database</span>
          </h1>
          <div className="icons mt-5 flex justify-center gap-5">
            <Image
              className="w-10"
              src="/assets/mongodb.png"
              alt="mongodb"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/mysql.png"
              alt="mysql"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="os my-10">
          <h1 className="text-center text-[#64FFDA] text-lg">
            <span className={fira_code.className}>Operating Systems</span>
          </h1>
          <div className="icons mt-5 flex justify-center gap-5">
            <Image
              className="w-10"
              src="/assets/windows.png"
              alt="windows"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/fedora.png"
              alt="fedora"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="other my-10">
          <h1 className="text-center text-[#64FFDA] text-lg">
            <span className={fira_code.className}>Other</span>
          </h1>
          <div className="icons mt-5 flex justify-center gap-5">
            <Image
              className="w-10"
              src="/assets/git.png"
              alt="git"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/github.png"
              alt="github"
              width={100}
              height={100}
            />
            <Image
              className="w-10"
              src="/assets/docker.png"
              alt="docker"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
