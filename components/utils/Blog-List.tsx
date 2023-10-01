import { cache, use, useEffect } from "react";
import BlogCard from "./BlogCard";
import mongoose, { Date } from "mongoose";

export interface BlogCardProps {
  _id: mongoose.Types.ObjectId;
  title: string;
  category: string[];
  imageUrl: string;
  notionUrl: string;
  createdAt: Date;
}

const BlogList = async ({ items }: { items: BlogCardProps[] }) => {
  return (
    <div className="h-full p-4">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items &&
          items.map((item) => (
            <BlogCard
              _id={item._id}
              key={item._id.toString()}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
              notionUrl={item.notionUrl}
              createdAt={item.createdAt}
            />
          ))}
      </div>
      {items && items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No Blogs found
        </div>
      )}
    </div>
  );
};
export default BlogList;
