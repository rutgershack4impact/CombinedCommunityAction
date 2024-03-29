import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import endpoint from "./endpoints.config";

dotenv.config();

const dbName = "cca";
const DB_URI: string = endpoint.MONGODB_URI;
console.log(endpoint.MONGODB_URI);

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    } as ConnectOptions);
    console.log("🚨🚨🚨 DATABASE INITIALIZING NYOOOM 🚨🚨🚨");
  } catch (err: any) {
    console.log(err.message);
  }
};

module.exports = { connectDB };