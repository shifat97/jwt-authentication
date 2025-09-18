import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_CONN = process.env.MONGO_CONN;
const DB_NAME = process.env.DB_NAME;

const connectDB = async () => {
  try {
    const mongoURI = MONGO_CONN;
    mongoose.connect(mongoURI, {
      dbName: DB_NAME,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed");
  }
};

export default connectDB;
