import mongoose, { Schema, Document } from 'mongoose';
import { ICourse } from '../interfaces/course.interface';


const CourseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

export default mongoose.model<ICourse>('Course', CourseSchema);
