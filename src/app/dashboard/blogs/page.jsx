"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BlogList from "../components/BlogList";

const DashboardBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch("/api/blog");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.log("Error loading blogs: ", error);
      }
    };

    getBlog();
  }, []);

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
    </div>
  );
};

export default DashboardBlog;
