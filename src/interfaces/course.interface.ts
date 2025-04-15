import mongoose from "mongoose";

export interface ICourse  {
    title: string;
    description: string;
    teacher: mongoose.Types.ObjectId;
  }
  