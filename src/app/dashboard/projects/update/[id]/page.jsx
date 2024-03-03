"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UpdatePage = ({ params }) => {
  const [projectData, setProjectData] = useState({});
  const [newTitle, setNewTitle] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newGithubLink, setNewGithubLink] = useState("");
  const router = useRouter();
  const id = params.id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newTitle: newTitle,
          newGithub_link: newGithubLink,
          newYear: newYear,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/dashboard/projects");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/project/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchBlog()
        .then((data) => {
          console.log(data);
          // Assuming data contains the markdown content for the blog
          setProjectData(data.project);
          setNewTitle(data.project.title);
          setNewGithubLink(data.project.github_link);
          setNewYear(data.project.year);
        })
        .catch((error) => {
          console.error("Error fetching blog:", error);
        });
    }
  }, [id]);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="fields">
            <div className="fields  flex justify-center">
              <div className="mb-4 w-96">
                <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                  Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Title"
                  type="text"
                  placeholder="Title"
                  onInput={(e) => {
                    setNewTitle(e.target.value);
                  }}
                  value={newTitle}
                />
              </div>
            </div>
            <div className="fields  flex justify-center my-5">
              <div className="mb-4 w-96">
                <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                  Github Link
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="github_Link"
                  type="text"
                  placeholder="Github Link"
                  onInput={(e) => {
                    setNewGithubLink(e.target.value);
                  }}
                  value={newGithubLink}
                />
              </div>
            </div>
            <div className="fields  flex justify-center my-5">
              <div className="mb-4 w-96">
                <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                  Year
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Date"
                  type="text"
                  placeholder="Date"
                  onInput={(e) => {
                    setNewYear(e.target.value);
                  }}
                  value={newYear}
                />
              </div>
            </div>
          </div>
          <div className="button text-center mb-10">
            <button
              className="bg-yellow-400 text-black px-5 py-2 rounded-md text-center font-bold"
              type="submit"
            >
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
