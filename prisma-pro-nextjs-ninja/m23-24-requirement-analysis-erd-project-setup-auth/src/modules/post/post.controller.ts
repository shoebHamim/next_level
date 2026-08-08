import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  // console.log({body:req.body});
  try {
    const userId = req.user?.id;
    if (!userId) {
      res.status(400).send("Something went wrong here!");
    }
    const result = await postService.createPost(req.body, userId as string);
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

const getAllPost = async (req: Request, res: Response) => {
  try {
    const {search} = req.query;
    // console.log(search);
    const allPost = await postService.getAllPost(search)
    if (allPost) {
      res.status(201).json({
        message: "All post fetched successfully",
        allPost,
      });
    } else {
      res.status(500).send("Something went wrong!");
    }
  } catch (error) {
    res.status(500).send("Something Went wrong!");
  }
};

export const postControllers = { createPost, getAllPost };
