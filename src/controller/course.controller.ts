import { NextFunction, Request, Response } from "express";
import courseModel from "../model/course.model";

interface CustomRequest extends Request {
    user?: any; 
  }

export const createCourse = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description } = req.body;

    const newCourse = new courseModel({
      title,
      description,
      teacher: req.user._id,
    });
    await newCourse.save();

    res.status(201).json({
      success: true,
      message: "Course Create Successfully",
      data: newCourse,
    });
  } catch (err) {
    next(err);
  }
};
