// type aliases
type User={
  name: string,
  age: number,
}
type Role={
  role:'user'|'admin'
}

type UserWithRole=User&Role

const user1:UserWithRole={
  name:'Mr. X',
  age:10,
  role:'user'
}

type isAdmin=boolean;
// type interface
// type interface only takes object
interface IUser{
  name:string;
  age:number;
}


interface IUserWithRole extends IUser{
  role:'admin'|'user'
}

// you could simple user interface merging

// ! when to use which?

const friends=['a','b','c']

interface IFriends{
  [index:number]:string
}








