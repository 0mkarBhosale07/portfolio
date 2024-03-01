"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BlogAddPage = () => {
  const [title, setTitle] = useState("");
  const [github_Link, setGithub_Link] = useState("");
  const [year, setYear] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !github_Link || !year) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("/api/project", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, github_Link, year }),
      });

      if (res.ok) {
        router.push("/dashboard/projects");
      } else {
        throw new Error("Failed to create a project");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className=" mb-10">
        <h1 className=" text-white text-center font-bold text-xl">
          Add Project
        </h1>
      </header>
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
                  setTitle(e.target.value);
                }}
                value={title}
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
                  setGithub_Link(e.target.value);
                }}
                value={github_Link}
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
                  setYear(e.target.value);
                }}
                value={year}
              />
            </div>
          </div>
        </div>
        <div className="button text-center mb-10">
          <button
            className="bg-teal-400 text-black px-5 py-2 rounded-md text-center font-bold"
            type="submit"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogAddPage;
