import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All Fields are required",
      });
    }
    const hashPass = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({
      name,
      email,
      password: hashPass,
    });

    console.log(newUser);

    return res.status(201).json({
      success: true,
      message: "User created Successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
