"use client";
import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await fetch("/api/blog");

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        // console.log(data); // Log the response data
        setBlogs(data.blogs);
        setLoading(false);
      } catch (error) {
        console.log("Error loading blogs: ", error);
      }
    };

    getBlog();
  }, []);

  const SkeletonLoading = () => (
    <div className="project-section w-[300px] my-5 mx-auto bg-[#112240] rounded-md pb-5 animate-pulse">
      <div className="image">
        <div className="bg-gray-400 h-40 rounded-md mb-5"></div>{" "}
        {/* Placeholder for image */}
      </div>
      <div className="text mx-5">
        <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded-md"></div>{" "}
        {/* Placeholder for date */}
        <div className="bg-gray-300 h-8 mb-7 rounded-md"></div>{" "}
      </div>
    </div>
  );

  return (
    <>
      <header className="mb-5">
        <h1 className="text-center text-2xl font-bold text-white">
          Blog Section
        </h1>
      </header>
      <main>
        {/* {blogs.map((blog) => (
          <BlogCard
            key={blog._id} // Ensure each item has a unique key
            name={blog.title}
            img={blog.image}
            date={blog.date}
            id={blog._id}
          />
        ))} */}

        {/* Skeleton Loading */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Render skeleton loading if data is still loading */}
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id} // Ensure each item has a unique key
                name={blog.title}
                img={blog.image}
                date={blog.date}
                id={blog._id}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default BlogPage;
