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

const getAllPost=async(search?:
  string | Record<string,unknown> | 
  (Record<string,unknown>|string)[])=>{
  const searchVal=typeof(search)=='string'?search: '';  
  const result=await prisma.post.findMany({
    where:{
      title: {
        contains: searchVal,
        mode: "insensitive"
      }
    }
  })
  return result;
  
}
export const postService = {
  createPost,
  getAllPost
};