import mongoose, { Schema, Document } from "mongoose";
import { ITopic } from "../interfaces/topic.interface";

const TopicSchema: Schema = new Schema<ITopic>(
  {
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ITopic>("Topic", TopicSchema);
