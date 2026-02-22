import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const result = await postService.createPost(req.body);
    if (result) {
      res.status(201).json({
        message: "post created successfully",
        result,
      });
    } else {
      res.status(500).send("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong here!");
  }
};

export const postControllers = { createPost };
