let x;

//Array Literal
const numbers = [12, 33, 45, 43, 54];
const mixed = [12, "Hello", true, null];

//Array Constructor
const fruits = new Array("apple", "banana", "guava");

x = numbers[0];
x = numbers[0] + numbers[3];

x = `My favourite fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = "orange";

fruits.length = 2;
fruits[fruits.length] = "strawberry";
console.log(fruits);
