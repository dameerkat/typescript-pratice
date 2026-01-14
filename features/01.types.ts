// Date
const today = new Date();
console.log(today.getMonth());

// Object
const person = {
  age: 20,
  name: 'Julia',
};

// Class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const cat = new Animal('Kitty');
console.log(cat);
console.log(cat.getName());
