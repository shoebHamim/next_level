
class BankAccount{
  userName:string;
  readonly accountNumber:number;
  protected balance:number=0;

  constructor(userName:string,accountNumber:number){
    this.userName=userName
    this.accountNumber=accountNumber
  }
  deposit(depositAmount:number){

    this.balance+=depositAmount
  }
  getBalance(){
    return this.balance
  }


}


const myAcc=new BankAccount('hamim',232)

console.log(myAcc.getBalance());
myAcc.deposit(100)
// myAcc.balance=100;
console.log(myAcc.getBalance());