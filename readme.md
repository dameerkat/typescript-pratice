## 📃Typescript Practice

## Purpose of Typescript Type System

- Helps us catch errors during development
- uses 'type annotations' to analyze our code
- Only active during development
- Doesn't provide any performance optimization

Typescript Code -> Typescript Compiler -> Plain old Javascript

## Installing the Typescript compiler

`> npm install -g typescript ts-node`

## Executing TS code

`> npx tsx index.ts`

## Fetching data & Using Typescript compiler

1. Fetch Data
   Fetching https://jsonplaceholder.typicode.com/todos/1

```
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

2. Create a new project directory

```
> mkdir fetch_json
> cd fetch_json
```

3. Create a package.json

```
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
   `> npm install axios`
   `> npm install --save-dev @types/node`
5. create file fetch_json/index.ts

```
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
