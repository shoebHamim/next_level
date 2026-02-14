import { prisma } from "./lib/prisma";

const createUser = async () => {
  const result = await prisma.user.create({
    data: {
      email: "hamim1@gmail.com",
    },
  });
  console.log(result);
};

const createPost = async () => {
  const result = await prisma.post.create({
    data: {
      title: "new post",
      user_id: 1,
    },
  });
  console.log(result);
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    // include: {
    //   posts: true,
    // },
    select: {
      posts: true,
      profile: true,
    },
  });
  console.dir(result, { depth: Infinity });
};

const updateUser=async()=>{
  const result= await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      email: "shoeb@gmail.com",
    },
    select: {
      email: true,
    },
  });
  console.log(result);
}

const deleteUser=async()=>{
  const result=await prisma.user.delete({
    where:{
      id:2
    }
  })
  console.log(result);
}

const updateOrCreate=async()=>{
  const result=await prisma.user.upsert({
    where:{
      email:'ham@gmail.com'
    },
    update:{
      email:"1@gamil.com"
    },
    create:{
      email:"create@gmail.com"
    }
  })
  console.log(result);
}

// await createUser()
// await createPost()
// await getAllUsers();
// await updateUser()
// await deleteUser()
await updateOrCreate()
