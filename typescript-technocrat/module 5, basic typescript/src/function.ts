
// function
// arrow function
// not arrow function

const poorUser={
  name:'hamim',
  balance:0,
  donate(this){
    this.balance+=1
  }
}

poorUser.donate()
console.log(poorUser);


