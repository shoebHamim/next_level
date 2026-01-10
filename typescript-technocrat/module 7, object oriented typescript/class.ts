
class Animal{
  name:string;
  private species:string;
  static customVal:string="hello";
  constructor(name:string,species:string){
    this.name=name
    this.species=species
  }

  makeSound() {
    if(this.species==='dog'){
      console.log('Ghew Ghew');
    }
    if(this.species=='cat'){
      console.log('Mew Mew');
    }
  
  }

}

const dog=new Animal('dog','dog')
dog.name='Dogesh'


console.log(dog.name);


dog.makeSound()