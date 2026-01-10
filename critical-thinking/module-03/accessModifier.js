

class Greeting{
  constructor(name){
    this.greet(name)
  }

  greet(name) {
    console.log('hello',name);
  }

}

const greeting1=new Greeting('hamim')

greeting1.greet('gamim')

// console.log(greeting1);

// greeting1.#greet('hamim')