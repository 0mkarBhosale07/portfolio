"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UpdateBlog from "@/app/dashboard/components/Update";

const UpdatePage = ({ params }) => {
  const [blogData, setBlogData] = useState({});
  const router = useRouter();
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
        console.log(error);
      }
    };

    if (id) {
      fetchBlog()
        .then((data) => {
          // Assuming data contains the markdown content for the blog
          setBlogData(data.blog);
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
        });
    }
  }, [id]);
  return (
    <div>
      <UpdateBlog
        id={id}
        title={blogData.title}
        date={blogData.date}
        image={blogData.image}
        content={blogData.content}
      />
    </div>
  );
};

export default UpdatePage;
