import mongoose from "mongoose";

export interface ITopic {
    lesson: mongoose.Types.ObjectId;
    title: string;
    content: string;
  }