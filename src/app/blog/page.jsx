"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch("/api/blog");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        console.log(data); // Log the response data
        setBlogs(data.blogs);
      } catch (error) {
        console.log("Error loading blogs: ", error);
      }
    };

    getBlog();
  }, []);

  return (
    <>
      <header className="mb-5">
        <h1 className="text-center text-2xl font-bold text-white">
          Blog Section
        </h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id} // Ensure each item has a unique key
            name={blog.title}
            img={blog.image}
            date={blog.date}
            id={blog._id}
          />
        ))}
      </main>
    </>
  );
};

export default BlogPage;
