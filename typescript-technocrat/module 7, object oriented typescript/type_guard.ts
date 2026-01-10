
// type guards
//! 1. type of
const unknown=2
console.log(typeof unknown);

type User={
  name:string;
  age:number
}
const user1:User={
  name:'mr x',
  age:10
}

// ! 2. in operator
const isAdmin='role' in user1?true:false;

console.log({isAdmin});


//! 3. instance of
class Person{
  name:string;
  constructor(name:string){
    this.name=name
  }
}
class Student extends Person{
  roll:number;
  constructor(name:string,roll:number){
    super(name)
    this.roll=roll
  }
}

class Teacher extends Person{
  id:number;
  constructor(name:string,id:number){
    super(name)
    this.id=id
  }
}

const st1= new Student('Student 1',1)
const t1= new Teacher('Teacher 1',1)

const isTeacher=st1 instanceof(Teacher)
console.log({isTeacher});
