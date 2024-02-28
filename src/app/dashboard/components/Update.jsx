"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UpdateBlog({ id, title, image, content, date }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newDate, setNewDate] = useState(date);
  const [newContent, setNewContent] = useState(content);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newImage, newDate, newContent }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                Image Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Image Link"
                type="text"
                placeholder="Image Link"
                onInput={(e) => {
                  setNewImage(e.target.value);
                }}
                value={newImage}
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
                  setNewDate(e.target.value);
                }}
                value={newDate}
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
                  setNewContent(e.target.value);
                }}
                value={newContent}
              />
            </div>
          </div>
        </div>
        <div className="button text-center mb-10">
          <button
            className="bg-yellow-400 text-black px-5 py-2 rounded-md text-center font-bold"
            type="submit"
          >
            Update Post
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
}
