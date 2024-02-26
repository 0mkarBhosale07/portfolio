import React from "react";
import BlogCard from "@/components/BlogCard";

const page = () => {
  return (
    <>
      <header className="mb-5">
        <h1 className="text-center text-2xl font-bold text-white">
          Blog Section
        </h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <BlogCard
          name="Omkar is op"
          link="op"
          desc="Popularity & Versatility Ease of Learning Job Opportunities Community Support applications: Web Dev, DS, AI/ML, Game Dev, Automation, Data Mining "
          date="26 OCT 2023"
        />
        <BlogCard
          name="Omkar is op"
          link="op"
          desc="Popularity & Versatility Ease of Learning Job Opportunities Community Support applications: Web Dev, DS, AI/ML, Game Dev, Automation, Data Mining "
          date="26 OCT 2023"
        />
      </main>
    </>
  );
};

export default page;
