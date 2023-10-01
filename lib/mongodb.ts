import mongoose from "mongoose";
const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
};
export default connectMongoDB;
