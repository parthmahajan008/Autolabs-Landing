import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import mongoose, { Schema } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
// const blogSchema = new Schema({
//   title: { type: String, required: true },
//   category: { type: Array<string>, required: true },
//   imageUrl: { type: String, required: true },
//   notionUrl: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });
type ResponseData = {
  message: string;
};
export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
  try {
    const { title, category, imageUrl, notionUrl } = await req.json();
    await connectMongoDB();
    await Blog.create({
      title,
      category,
      imageUrl,
      notionUrl,
    });
    return NextResponse.json(
      { message: "Blog created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Blog created failed" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json(blogs, { status: 201 });
}

// export async function DELETE(
//   req: NextRequest,
//   res: NextResponse<ResponseData>
// ) {
//   const id = req.nextUrl.searchParams.get("id");
//   if (!id) {
//     return NextResponse.json({ message: "Blog not found" }, { status: 404 });
//   }
//   await connectMongoDB();
//   await Blog.findByIdAndDelete(id);
//   return NextResponse.json(
//     { message: "Blog deleted successfully" },
//     { status: 201 }
//   );
// }
