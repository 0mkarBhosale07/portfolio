"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="top-0 bg-opacity-70 backdrop-blur-md bg-[#0A192F] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-20 rounded-full">
            <Link
              className="hover:text-[#64FFDA] font-bold text-lg transition-all duration-200"
              href="/"
            >
              <Image alt="logo" src="/logo.png" width={100} height={100} />
            </Link>
          </div>
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Mobile Toggle Button */}
            {isSidebarOpen ? (
              <div></div>
            ) : (
              <button
                onClick={toggleSidebar}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-10 w-10"
                  color="#64FFDA"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            )}
          </div>
          <div className="hidden lg:flex items-center space-x-20 ">
            {/* Add your navigation links here */}
            <Link
              className="hover:text-[#64FFDA] font-bold text-lg transition-all duration-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-[#64FFDA] font-bold text-lg transition-all duration-200"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="hover:text-[#64FFDA] font-bold text-lg transition-all duration-200"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="hover:text-[#64FFDA] font-bold text-lg transition-all duration-200"
              href="#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0A192F] bg-opacity-90 z-50">
          <div className="flex justify-end p-4">
            {/* Close Sidebar Button */}
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-10 w-10 mt-4"
                color="#64FFDA"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* Add your sidebar content here */}
          <div className="flex flex-col gap-7 items-center">
            <Link href="/" onClick={toggleSidebar}>
              <span className="text-2xl font-bold hover:text-[#64FFDA] transition-all duration-200">
                Home
              </span>
            </Link>
            <Link href="/blog" onClick={toggleSidebar}>
              <span className="text-2xl font-bold hover:text-[#64FFDA] transition-all duration-200">
                Blog
              </span>
            </Link>
            <Link href="#projects" onClick={toggleSidebar}>
              <span className="text-2xl font-bold hover:text-[#64FFDA] transition-all duration-200">
                Projects
              </span>
            </Link>
            <Link href="#contact" onClick={toggleSidebar}>
              <span className="text-2xl font-bold hover:text-[#64FFDA] transition-all duration-200">
                Contact
              </span>
            </Link>

            <div className="resume-btn mt-10">
              <button className="bg-[#64FFDA] text-[#0A192F] px-5 py-2 rounded-lg text-2xl font-bold hover:text-white transition-all duration-200 hover:bg-[#11aa86]">
                Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
