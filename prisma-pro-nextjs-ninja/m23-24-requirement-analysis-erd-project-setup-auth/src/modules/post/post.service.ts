import { Post } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma.config";

const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAT" | "authorId">,
  userId: string,
) => {
  const result = await prisma.post.create({
    data:{
      ...data,
      authorId: userId
    }
  });
  return result;
};
export const postService = {
  createPost,
};
