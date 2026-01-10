
// create a function which will print all the user data
type TUserInfoPrinter=<T>(userInfo:T)=>undefined

const userPrinter:TUserInfoPrinter=(userInfo)=>{
  for(const key in userInfo){
    console.log(`${key} is ${userInfo[key]}`);
  }
}

const user1=userPrinter({name:'adf',favColor:'green'})

// so far good, but let's say i want input to have name and id as mandatory
// how to enforce that?
type TUser={
  name:string,
  id:number
}
type TUserInfoPrinterWConstraint=<T extends TUser>(userInfo:T)=>undefined
const userPrinter2:TUserInfoPrinterWConstraint=(userInfo)=>{
  for(const key in userInfo){
    console.log(`${key} is ${userInfo[key]}`);
  }
}
// here you must pass an object with name and id field
const user2=userPrinter({name:'adf',id:124,favColor:'red'})



export {}