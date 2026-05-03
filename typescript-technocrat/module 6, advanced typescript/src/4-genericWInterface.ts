
interface Box<T,TDimension=null>{
  value:T;
  getValue:()=>T;
  dimension?:TDimension

}
const numberBox:Box<number,{length:number,width:number}>={
  value:1,
  getValue:()=>100,
  dimension:{length:10,width:20}
}

const stringBox:Box<string>={
  value:'boxxxx',
  getValue(){return this.value}
}

// you can use generic type in type alias as well
