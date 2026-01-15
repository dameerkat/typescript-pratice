let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 2, 3, 4, 5];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// annotation part : (i:number) => void
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use type annotation
// 1. When a function returns the 'any' type and we need to clarify the value
const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2. When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

// 3. When we want a variable to have a type that can't be inferred
// This example is not that good example
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  }
}
