"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectList from "../components/ProjectList";

const DashboardPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch("/api/project");

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();
        setProjects(data.projects);
        setLoading(false);
      } catch (error) {
        console.log("Error loading projects: ", error);
      }
    };

    getBlog();
  }, []);

  const SkeletonLoading = () => (
    <div className="px-5 md:px-20 animate-pulse">
      <div className="flex justify-center">
        <div className="bg-[#112240] py-5 px-10 rounded-md flex justify-around gap-10 my-3 w-[300px] lg:w-[500px]">
          <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-5 mb-2 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-5 mb-2 rounded-md"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-5">
      <header className="flex justify-center">
        <Link
          href="/dashboard/projects/add"
          className="bg-teal-400 text-black px-5 py-3 rounded-md text-center font-bold"
        >
          Add Project
        </Link>
      </header>
      {loading ? (
        <div className="blogContents mt-10">
          {/* Render skeleton loading if data is still loading */}
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
          <SkeletonLoading />
        </div>
      ) : (
        <div className="blogContents mt-10">
          {projects.map((project) => (
            <ProjectList
              key={project._id}
              id={project._id}
              title={project.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
