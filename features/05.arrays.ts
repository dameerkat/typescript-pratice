const carMakers: string[] = ['ford', 'toyota', 'hyundai'];
const dates = [new Date(), new Date()]; // type inference

const carsByMake: string[][] = [['f150'], ['camry'], ['ioniq5']];

// 1. Help with inference when extracting values
const car = carMakers[0];

// 2. prevent incompatible values
// carMakers.push(100); // typescript shows an error

// 3. help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4. flexible types
const importantDates: (Date | string)[] = [new Date(), '2026-01-16'];
importantDates.push('2026-01-17');
importantDates.push(new Date());
//importantDates.push(100); // typescript shows an error
