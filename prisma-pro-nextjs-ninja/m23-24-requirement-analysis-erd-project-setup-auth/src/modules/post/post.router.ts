import { auth } from "./../../lib/auth";
import { NextFunction, Request, Response } from "express";
import express, { Router } from "express";
import { postControllers } from "./post.controller";
import { success } from "better-auth";
import authMiddleware from "../../middlewares/auth";

const router = express.Router();

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
        emailVerified: boolean;
        userId: string;
      };
    }
  }
}

export enum userRoles{
  USER="USER",
  ADMIN="ADMIN",
  SUPER_ADMIN="SUPER_ADMIN"

}



router.post("/", authMiddleware(userRoles.ADMIN,userRoles.USER,userRoles.SUPER_ADMIN), postControllers.createPost);

export const postRouter: Router = router;
