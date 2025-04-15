import mongoose from "mongoose";


const ConnectDB = async (uri): Promise<void> => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default ConnectDB;