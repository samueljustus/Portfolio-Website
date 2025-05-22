import React from "react";
import { blogData } from "./BlogData";
import { CiClock2 } from "react-icons/ci";
export default function BlogPage() {
  return (
    <div className="mt-25 p-5">
      <h1 className="mb-10 text-xl mb-8 font-Nunito uppercase">writings</h1>
      <div className="grid grid-flow-col grid-rows-5 gap-4 max-w-[500px]"> 
        {/* remove max width to scale */}
        {blogData.map((blog) => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </div>
  );
}

const BlogCard = ({ blog }) => {
  return (
    <a href={blog.link}>
      <div className="p-7 font-Nunito bg-[#E5E7EB] rounded-md text-[#374151] mb-5">
        <p className="text-sm">{blog.topic}</p>
        <div className="flex gap-5 items-center mt-2 text-xs">
          <CiClock2 />
          {blog.time}
        </div>
      </div>
    </a>
  );
};
