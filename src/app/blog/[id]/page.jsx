"use client";
import { useEffect, useState } from "react";
import { fira_code } from "@/app/fonts";
import markdownToHtml from "@/app/utils/markdownToHtml";

const SingleBlogPage = ({ params }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = params.id;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        // console.log(data);
        return data;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    setLoading(false);

    if (id) {
      fetchBlog()
        .then((data) => {
          // Assuming data contains the markdown content for the blog
          parseMarkdown(data.blog.content);
          setTitle(data.blog.title);
          setDate(data.blog.date);
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
          setError(error);
        });
    }
  }, [id]);

  const parseMarkdown = async (data) => {
    try {
      const html = await markdownToHtml(data);
      setHtmlContent(html);
    } catch (error) {
      console.error("Error parsing markdown:", error);
      setError(error);
    }
  };

  if (loading)
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="animate-pulse">
          {/* Placeholder for title */}
          <div className="h-8 bg-gray-300 w-3/4 mb-4 rounded"></div>
          {/* Placeholder for date */}
          <div className="h-6 bg-gray-300 w-1/4 mb-6 rounded"></div>
          {/* Placeholder for image */}
          <div className="h-64 bg-gray-300 mb-8 rounded"></div>
          {/* Placeholder for content */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-full rounded"></div>
            <div className="h-4 bg-gray-300 w-3/4 rounded"></div>
          </div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="">
      <div className="title text-center mt-5 text-white font-bold text-2xl">
        {/* Render blog title here */}
        <h1>{title}</h1>
      </div>
      <div className="date text-center mt-2 text-sm md:text-base text-[#64FFDA]">
        <p className={fira_code.className}>{date}</p>
      </div>
      <div
        className="body mx-5 mt-5 lg:mx-40"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default SingleBlogPage;
