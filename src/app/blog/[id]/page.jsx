"use client";
import { useState, useEffect } from "react";
import { fira_code } from "@/app/fonts";
import markdownToHtml from "@/app/utils/markdownToHtml";

const SingleBlogPage = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const data =
    "# This is a title \n\n ## This is sub heading \n\n`Hello World`\n\n ```javascript \n const greeting = 'Hello, world!'; \n console.log(greeting);\n ```\n\n Python Code \n\n ```js \n print('Hello World!')\n```\n\n ### End of File";

  useEffect(() => {
    async function parseMarkdown() {
      const html = await markdownToHtml(data);
      setHtmlContent(html);
    }
    parseMarkdown();
  }, []);

  return (
    <>
      <div className="title text-center mt-5 text-white font-bold text-2xl">
        This is a title for a blog
      </div>
      <div className="date text-center mt-2 text-sm md:text-base text-[#64FFDA]">
        <p className={fira_code.className}>26 Oct 2023</p>
      </div>
      <div
        className="body mx-5 mt-5 lg:mx-40"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </>
  );
};

export default SingleBlogPage;
