import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constant";
import User from "../model/user.model";
import { NextFunction, Request, Response } from "express";

interface CustomRequest extends Request {
  user?: any;
}

interface JwtPayloadWithUserId extends jwt.JwtPayload {
  userId: string;
}

export const protect = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, JWT_SECRET) as JwtPayloadWithUserId;
      req.user = await User.findById(decoded.userId);

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      next();
    } catch (error) {
      res
        .status(401)
        .json({ success: false, message: "Not authorized, token failed" });
    }
  } else {
    res
      .status(401)
      .json({ success: false, message: "Not authorized, no token" });
  }
};
