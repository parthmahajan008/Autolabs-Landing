"use client";
import Link from "next/link";
import Image from "next/image";
import { BlogCardProps } from "./Blog-List";

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  title,
  imageUrl,
  notionUrl,
  category,
  createdAt,
}) => {
  const formattedDate = new Date(createdAt.toString()).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Link href={notionUrl} className="m-1">
      <div className="relative transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300 overflow-hidden border rounded-lg pb-4 px-2 pt-2 h-full hover:shadow-2xl">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="mx-2 mt-2">
          <div className=" text-sm text-slate-400">{category.join(", ")}</div>
        </div>
        <div className="pb-4 mx-2 gap-y-4">
          <div className=" font-semibold font-sans text-xl mb-2">{title}</div>
        </div>
        <div className="absolute bottom-0 mx-2 pb-2">
          <div className=" text-sm text-slate-400">{formattedDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
