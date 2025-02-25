import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce-kriti`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
