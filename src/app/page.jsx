"use client";
import Image from "next/image";
import { fira_code } from "./fonts";
import {
  Terminal,
  FileTerminal,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ChevronRight,
  SendHorizontal,
} from "lucide-react";
import FeaturedProjects from "@/components/FeaturedProjects";
import Link from "next/link";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="px-16">
        <div className="hero-section mt-24 grid grid-cols-1 lg:grid-cols-2">
          <div className="info mx-auto">
            <p className={fira_code.className}>
              <span className="text-[#64FFDA] text-lg ml-1 flex gap-2">
                <Terminal />
                Hello, my name is
              </span>
            </p>
            <h1 className="text-[#CCD6F6] text-6xl font-bold mt-3">
              Omkar Bhosale
            </h1>
            <h1 className="text-[#8892B0] text-5xl font-bold mt-3 ml-1">
              I build websites!
            </h1>

            <p className="mt-5">
              I'm a computer science student with a passion for developing
              scalable web applications and working across the full stack. I am
              looking to join as a web developer to continue to grow my skill
              set while contributing to the positive outcome.
            </p>
            <a download="/resume.pdf">
              <button className="hidden lg:flex mt-10 border-2 py-4 px-8 rounded-lg border-[#64FFDA]  gap-2 items-center text-[#64FFDA] text-lg hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors duration-200">
                <FileTerminal />

                <span className={fira_code.className}>Checkout my resume</span>
              </button>
            </a>
          </div>
          <div className="photo mx-auto hidden lg:block border-2 border-[#64FFDA] rounded-lg p-2">
            <Image
              priority={true}
              className="rounded-2xl "
              src="/photo.jpg"
              alt="image"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="skills mt-20" id="skills">
          <p className="text-center font-bold text-2xl text-[#CCD6F6]">
            Skills
          </p>
          <Skills />
        </div>

        <div id="projects" className="projects mt-20">
          <p className="text-center font-bold text-2xl text-[#CCD6F6]">
            Featured Projects
          </p>
          <div className="projects mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <FeaturedProjects
              props={{
                name: "Movies Log Pro",
                desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum nemo enim omnis, iste laboriosam cumque illo ducimus hic velit magni aliquam natus! Non incidunt blanditiis assumenda laudantium ipsum natus?",
                tech: ["Vs Code", "HTML", "CSS", "Javascript"],
                githubLink: "https://github.com",
                link: "/",
              }}
            />
            <FeaturedProjects
              props={{
                name: "AI Chat Model",
                desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum nemo enim omnis, iste laboriosam cumque illo ducimus hic velit magni aliquam natus! Non incidunt blanditiis assumenda laudantium ipsum natus?",
                tech: ["Python", "NTKL", "PyTorch"],
                githubLink: "https://github.com",
                link: "/",
              }}
            />
            <FeaturedProjects
              props={{
                name: "Spotify Clone",
                desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatum nemo enim omnis, iste laboriosam cumque illo ducimus hic velit magni aliquam natus! Non incidunt blanditiis assumenda laudantium ipsum natus?",
                tech: ["NextJs", "Spotify API", "React"],
                githubLink: "https://github.com",
                link: "/",
              }}
            />
          </div>
          <div className="my-2">
            <Link href="/projects" className="underline underline-offset-1">
              <span className=" text-lg font-bold hover:text-[#64FFDA] flex gap-1 items-center justify-center">
                View More <ChevronRight />
              </span>
            </Link>
          </div>
        </div>
        <div
          id="contact"
          className="contact-me mt-20 bg-[#112240] w-80 mx-auto rounded-md p-5"
        >
          <p className="text-center font-bold text-2xl text-[#CCD6F6]">
            Get In Touch
          </p>
          <p className="text-center mt-4 w-fit mx-auto">
            I’m currently looking for new opportunities and, my inbox is always
            open. Whether you have a question or just want to say hi, I’ll try
            my best to get back to you!
          </p>
          <div className="flex justify-center">
            <Link href="mailto:omkarbhosale0770@gmail.com" target="_blank">
              <button className="mt-20 border-2 py-3 px-6 rounded-lg border-[#64FFDA] flex gap-2 items-center text-[#64FFDA] hover:bg-[#64FFDA] hover:text-[#0A192F] transition-colors duration-200">
                <SendHorizontal />

                <span className={fira_code.className}>Say Hi!</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="social-links mt-16">
          <p className="text-center font-semibold text-[#CCD6F6]">
            Connect With Me
          </p>
          <div className="links flex items-center justify-center gap-5 mt-4">
            <Link
              href="https://github.com/0mkarBhosale07"
              target="_blank"
              className="hover:text-[#64FFDA] transition-all duration-150"
            >
              <span>
                {" "}
                <Github size={32} />
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/omkar-bhosale-70795a24b/"
              target="_blank"
              className="hover:text-[#64FFDA] transition-all duration-150"
            >
              <span>
                {" "}
                <Linkedin size={32} />
              </span>
            </Link>

            <Link
              href="https://www.instagram.com/techomkar"
              target="_blank"
              className="hover:text-[#64FFDA] transition-all duration-150"
            >
              <span>
                {" "}
                <Instagram size={32} />
              </span>
            </Link>

            <Link
              href="https://twitter.com/TechOmkar"
              target="_blank"
              className="hover:text-[#64FFDA] transition-all duration-150"
            >
              <span>
                {" "}
                <Twitter size={32} />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <footer className="text-center mt-20 mb-5">
        <h1>Designed and Developed by</h1>
        <p className="text-[#64FFDA] mt-2">
          <span className={fira_code.className}>Omkar Bhosale</span>
        </p>
      </footer>
    </>
  );
}
