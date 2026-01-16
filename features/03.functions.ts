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
