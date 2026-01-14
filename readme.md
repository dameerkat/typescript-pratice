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

**Example**

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

**Where do we use types?**

### 2. Type Annotations & Type Inference

`Type Annotations` : Code we add to tell Typescript what type of value a variable will refer to

`Type Inference` : Typescript tries to figure out what type of value a variable refers to
Variables
Functions
Objects

## Design Patterns
