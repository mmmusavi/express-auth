import mongoose from "mongoose";
import { config } from "../config";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error");
        process.exit(1);
    }
};
