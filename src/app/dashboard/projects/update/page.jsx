"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BlogList from "../components/BlogList";

const DashboardProjectUpdate = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch("/api/blog");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        setBlogs(data.blogs);
        setLoading(false);
      } catch (error) {
        console.log("Error loading blogs: ", error);
      }
    };

    getBlog();
  }, []);

  const SkeletonLoading = () => (
    <div className="px-5 md:px-20 animate-pulse">
      <div className="flex justify-center">
        <div className="bg-[#112240] py-5 px-10 rounded-md flex justify-around gap-10 my-3 w-[300px] lg:w-[500px]">
          <div className="bg-teal-200 h-4 w-1/2 mb-2 rounded-md"></div>
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
          href="/dashboard/blogs/add"
          className="bg-teal-400 text-black px-5 py-3 rounded-md text-center font-bold"
        >
          Add Post
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
          {blogs.map((blog) => (
            <BlogList
              key={blog._id}
              title={blog.title}
              id={blog._id}
              date={blog.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardProjectUpdate;
