// function add(a, b){
//     return a+b;
// }

//Arrow function syntax
const add = (a, b) => {
  return a + b;
};

//Implicit Return
const subtract = (a, b) => a - b;

//for one parameter no need of ()
const double = (a) => a * 2;

//Returning an Object (needs to surround with ())
const createObj = () => ({
  name: "Brad",
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

//Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(2, 3));
console.log(sub(5, 2));
console.log(double(3));
console.log(createObj());
