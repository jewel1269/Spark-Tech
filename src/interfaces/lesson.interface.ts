import mongoose from "mongoose";

export interface ILesson {
  course: mongoose.Types.ObjectId;
  title: string;
  content: string;
}
