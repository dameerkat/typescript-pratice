// Array-like structure where each element presents some property of a record
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

// Example of Tuples
const pepsi: Drink = ['brown', true, 40];
//pepsi[0] = 40; // you get an error
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// it is hard to represent meaningful data with tuple
// const carSpecs: [number, number] = [400, 3354];

// instead using objects is very clear with the data
const carSpecs = {
  horsepower: 400,
  weight: 3354,
};

// Using objects is more desirable
