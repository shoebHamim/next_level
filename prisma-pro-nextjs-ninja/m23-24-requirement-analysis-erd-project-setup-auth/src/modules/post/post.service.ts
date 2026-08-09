import { equal } from "node:assert";
import { Post, PostStatus } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma.config";

const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAT" | "authorId">,
  userId: string,
) => {
  const result = await prisma.post.create({
    data: {
      ...data,
      authorId: userId,
    },
  });
  return result;
};

const getAllPost = async (
  searchVal: string,
  tags: string[],
  status?: PostStatus,
  isFeatured?: boolean,
  page?: number,
  limit?: number,
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
    ...(limit !== undefined && { take: limit }),
    ...(page !== undefined && { skip: (page - 1) * (limit || 0) }),
  });
  return result;
};

const getPostById = async (postId: string) => {
  const result = await prisma.$transaction(async (tx) => {
    // find the post
    const post = await tx.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return null;
    }

    // increase view count
    const updatedPost = await tx.post.update({
      where: {
        id: post.id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return updatedPost;
  });

  return result;
};

export const postService = {
  createPost,
  getAllPost,
  getPostById,
};
