import { Request, Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../generated/prisma/enums";

const isPostStatus = (value: string): value is PostStatus =>
  (Object.values(PostStatus) as string[]).includes(value);

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
    const { search } = req.query;
    const { tags } = req.query;
    const { isFeatured } = req.query;
    const { status } = req.query;
    const { page, limit } = req.query;

    const searchVal = typeof search === "string" ? search : "";
    const tagsVal =
      typeof tags === "string"
        ? tags.split(",")
        : Array.isArray(tags) && tags.every((tag) => typeof tag === "string")
          ? tags
          : [];

    const statusVal =
      typeof status === "string" && isPostStatus(status) ? status : undefined;

    const isFeaturedVal =
      isFeatured === "true" ? true : isFeatured === "false" ? false : undefined;

    const pageVal = Number.isNaN(Number(page)) ? undefined : Number(page);
    const limitVal = Number.isNaN(Number(limit)) ? undefined : Number(limit);

    const allPost = await postService.getAllPost(
      searchVal,
      tagsVal,
      statusVal,
      isFeaturedVal,
      pageVal,
      limitVal,
    );
    if (allPost) {
      res.status(201).json({
        message: "All post fetched successfully",
        data: allPost,
      });
    } else {
      res.status(500).send("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something Went wrong!");
  }
};

const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (typeof id !== "string") {
      return res.status(400).send({
        success: false,
        message: "id is required for this request!",
      });
    }
    const fetchedPost = await postService.getPostById(id);
    if (fetchedPost === null) {
      res.status(404).json({
        message: "No post found with the given ID",
        data: fetchedPost,
      });
    }
    res.status(200).json({
      message: "Post fetched successfully",
      data: fetchedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something Went wrong!");
  }
};

export const postControllers = { createPost, getAllPost, getPostById };
