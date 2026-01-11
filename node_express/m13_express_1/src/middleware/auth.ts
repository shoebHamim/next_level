import jwt, { JwtPayload } from "jsonwebtoken";
// higher order function = HOF
// what is it, khay, pinde na mathay day?

import { NextFunction, Request, Response } from "express";
import config from "../config";

//  higher order function is a function that
// 1. takes one or more functions as arguments
// OR
// 2. returns a function as its result

const auth = (...roles:string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({
          success: false,
          message: "No authorization token provided!",
        });
      }
      const decoded:any = jwt.verify(token, config.jwt_secret as string);
      if(!roles.includes(decoded.role)){
        return res.status(403).json({
          success: false,
          message: "You are not authorized to access this resource",
        });
      }
      req.user = decoded as JwtPayload;
      next();
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default auth;
