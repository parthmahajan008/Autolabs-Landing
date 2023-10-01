import mongoose, { Schema } from "mongoose";
const blogSchema = new Schema({
  title: { type: String, required: true },
  category: { type: Array<string>, required: true },
  imageUrl: { type: String, required: true },
  notionUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
