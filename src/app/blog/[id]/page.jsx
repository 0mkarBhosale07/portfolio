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

  if (loading) return <div>Loading...</div>;
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
