import { Post, PostStatus } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma.config";

const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAT" | "authorId">,
  userId: string,
) => {
  const result = await prisma.post.create({
    data: {
      ...data,
      author_id: userId,
    },
  });
  return result;
};

const getAllPost = async (
  searchVal: string,
  tags: string[],
  status: PostStatus | undefined,
  isFeatured?: boolean,
) => {
  const result = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchVal,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: searchVal,
            mode: "insensitive",
          },
        },
        {
          tags: {
            has: searchVal,
          },
        },
      ],
      tags: {
        hasEvery: tags,
      },
      // isFeatured: true, / isFeatured: false,
      ...(isFeatured !== undefined && { isFeatured }),
      ...(status != undefined && {
        status: { equals: status },
      }),
    },
  });
  return result;
};
export const postService = {
  createPost,
  getAllPost,
};
