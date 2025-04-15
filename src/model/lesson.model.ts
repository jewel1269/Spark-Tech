import mongoose, { Schema, Document } from "mongoose";
import { ILesson } from "../interfaces/lesson.interface";

const LessonSchema: Schema = new Schema<ILesson>(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ILesson>("Lesson", LessonSchema);
