import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

// User schema definition
const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['student', 'teacher'] }
}, { timestamps: true }); // Fixed closing of the schema definition

// User model creation
const User = mongoose.model<IUser>("User", userSchema);

export default User;
