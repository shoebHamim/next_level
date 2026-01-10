// Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)

const twoSum=(arr,sum)=>{
  const arrMap=new Map()
  // arr.forEach((value,idx)=>{
  //   arrMap.set(value,idx)
  // })
  for(let idx=0;idx<=arr.length;idx+=1){
    const currentVal=arr[idx]
    const complementVal=sum-currentVal
    const complementIdx=arrMap.get(complementVal)
    if(complementIdx!==undefined && idx!==complementIdx){
      return [idx,complementIdx]
    }
    arrMap.set(currentVal,idx)
  }
  return undefined
}

const result=twoSum([2, 11, 7, 15],9)
console.log(result);