//Problem Statement

//You are given two large arrays, listA and listB. Each array contains user objects.
//A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name.

//Your task is to write an efficient function that takes both lists as input
//and returns the total count of users that are present in both lists.

//! Do not change anything in data setup part

//----------Data setup block---------------//
const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25,000 common users)
//----------Data setup block---------------//

// --- ALGORITHMS --- //


// console.log(usersA);
// console.log(usersB);

// const userASet=new Set([usersA])

// console.log(userASet);1  


const findMutualFriendCountDumbApproach=(usersA,usersB)=>{
  const mutualFriends=[]
  usersA.forEach((userA)=>{
    usersB.forEach(userB=>{
      if(userA.id===userB.id){
        mutualFriends.push(userA)
      }
    })
  })
  return mutualFriends.length
}

const createUserIdSet=(users)=>{
  const usersSet=new Set()
  users.forEach((user)=>{
    usersSet.add(user.id)
  })
  return usersSet
}


const findMutualFriendCountNotDumbApproach=(usersA,usersB)=>{
  const userASet=createUserIdSet(usersA)
  const mutualFriends=[]
  usersB.forEach((user)=>{
    if(userASet.has(user.id)){
      mutualFriends.push(user)
    }
  })
  return mutualFriends.length
}

const startTime=performance.now()
const mutualFriendCount=findMutualFriendCountDumbApproach(usersA,usersB)
// const mutualFriendCount=findMutualFriendCountNotDumbApproach(usersA,usersB)

const endTime=performance.now()

console.log(mutualFriendCount);
console.log('Time taken',(endTime-startTime)/1000,'seconds');





