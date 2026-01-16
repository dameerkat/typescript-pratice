## 📃Typescript Practice

### Purpose of Typescript Type System

- Helps us catch errors during development
- uses 'type annotations' to analyze our code
- Only active during development
- Doesn't provide any performance optimization

Typescript Code -> Typescript Compiler -> Plain old Javascript

### Installing the Typescript compiler

```bash
> npm install -g typescript ts-node
```

### Executing TS code

```bash
> npx tsx index.ts
```

### Fetching data & Using Typescript compiler

1. Fetch Data
   Fetching https://jsonplaceholder.typicode.com/todos/1

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

2. Create a new project directory

```bash
> mkdir fetch_json
> cd fetch_json
```

3. Create a package.json

```json
> npm init -y

Wrote to C:\Programming\2026-project\typescript-pratice\fetch_json\package.json:
{
  "name": "fetch_json",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

4. Install axios to make a request

```bash
> npm install axios
> npm install --save-dev @types/node`
```

5. create file fetch_json/index.ts

```js
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((res) => {
  console.log(res.data);
});
```

6. Compiling TS code to JS code
   `> tsc index.ts`
7. Running index.js
   `> node index.js`

### Using Typescript Interface

Interfaces are used to define the shape of an object

```ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

## Syntax + features

### 1. Types

`Type` : Easy way to refer to the different properties and functions that a value has

| Primitive Types | Object Types |
| --------------- | ------------ |
| number          | functions    |
| boolean         | arrays       |
| void            | classes      |
| undefined       | objects      |
| string          |
| symbol          |
| null            |

Example

```ts
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
console.log(cat.getName());
```

**Why do we care about types?**

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

### 2. type annotation with variables

`Type Annotations` : Code we add to tell Typescript what type of value a variable will refer to

```ts
let apples: number = 5;
// if you hover, you see popup says let apples: number
```

`Type Inference` : Typescript tries to figure out what type of value a variable refers to

```ts
let apples = 5;
// if you hover, you see popup says let apples: number
```

### How type inference works

If declaration and initialization are on the same line, Typescript will figure out the type of 'color' for us

| variable declaration |     | variable Initialization |
| :------------------: | :-: | :---------------------: |
|     const color      |  =  |          'red'          |

In this case, Typescript will no longer figure out the type

```ts
let apples;
apples = 5;
```

Example

```ts
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
```

### type annotation with Functions

`Type Annotations` : Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return

```ts
const add = (a: number, b: number): number => {
  return a + b;
};
```

`Type Inference` : Typescript tries to figure out what type of value a function will return

```ts
// Typescript knows we are going return number
const add = (a: number, b: number) => {
  return a + b;
};
```

Example

```ts
// although we get inference, we will add type annotations on return
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// this will not return anything
const logger = (message: string): void => {
  console.log(message);
};

const throwErrorNever = (message: string): never => {
  throw new Error();
};

// usually you handle error like this
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Destructing with Annotations
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(weather);
};
```

**although we get inference, we will add type annotations on return**

### type annotation with Objects

### When to use type annotation

1. When a function returns the 'any' type and we need to clarify the value

This function returns 'any' type

```ts
const json = '{"x":10, "y": 20}';
const coordinates = JSON.parse(json); // type is any
console.log(coordinates); // {x: 10, y: 20}
```

How to fix any type

```ts
const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
```

2. When we declare a variable on one line then initialize it later
   In this case, foundWord is 'any' type

```ts
let words = ['red', 'green', 'blue'];
let foundWord; // any type
for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}
```

Making foundWord as 'boolean' type

```ts
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // add boolean type
for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}
```

3. When we want a variable to have a type that can't be inferred

```ts
// This example is not that good example
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  }
}
```

## Design Patterns
