const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

//using a for loop
const sum2 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};

console.log(sum2);

const cart = [
  { id: 1, name: "Product1", price: 130 },
  { id: 2, name: "Product2", price: 150 },
  { id: 3, name: "Product1", price: 175 },
];

const total = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(total);
