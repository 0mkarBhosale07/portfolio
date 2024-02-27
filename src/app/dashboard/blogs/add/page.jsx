"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BlogAddPage = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !date || !content) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, image, date, content }),
      });

      if (res.ok) {
        router.push("/dashboard/blogs");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className=" mb-10">
        <h1 className=" text-white text-center font-bold text-xl">Add Post</h1>
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
                Image Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Image Link"
                type="text"
                placeholder="Image Link"
                onInput={(e) => {
                  setImage(e.target.value);
                }}
                value={image}
              />
            </div>
          </div>
          <div className="fields  flex justify-center my-5">
            <div className="mb-4 w-96">
              <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Date"
                type="date"
                placeholder="Date"
                onInput={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
            </div>
          </div>
          <div className="fields  flex justify-center my-5">
            <div className="mb-4 w-96">
              <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                Body Content
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y "
                id="Image Link"
                type="text"
                placeholder="Markdown Content"
                onInput={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
              />
            </div>
          </div>
        </div>
        <div className="button text-center mb-10">
          <button
            className="bg-teal-400 text-black px-5 py-2 rounded-md text-center font-bold"
            type="submit"
          >
            Add Post
          </button>
        </div>
      </form>
      <div className="table mx-auto">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Header</td>
              <td>#,##,###</td>
            </tr>
            <tr>
              <td>Emphasis </td>
              <td>*italic*, **bold**, __bold__</td>
            </tr>
            <tr>
              <td>Header</td>
              <td>#,##,###</td>
            </tr>
            <tr>
              <td>Lists</td>
              <td>Unordered List: -, +, *</td>
            </tr>
            <tr>
              <td>Links </td>
              <td>{"[text](url)"}</td>
            </tr>
            <tr>
              <td>Blockquotes</td>
              <td>{">"}</td>
            </tr>
            <tr>
              <td>Code Blocks</td>
              <td>{"`inline code`, ```code block```"}</td>
            </tr>
            <tr>
              <td>Horizontal Rules</td>
              <td>{"---, ***, ___"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogAddPage;
