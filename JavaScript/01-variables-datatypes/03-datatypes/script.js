// Strings
const firstName = "Sara";

// Numbers

const age = 30;
const temp = 98.9;
console.log(age, typeof age);
console.log(temp, typeof temp);

//Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

//Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

//undefined
let score;
console.log(score, typeof score);

//Symbol
const id = Symbol("id");
console.log(id, typeof id);

//BigInt
const n = 6789009876456;

//Reference Types
const numbers = [1, 2, 3, 4];

const person = {
  name: "Brad",
};

function sayHello() {
  console.log("hello");
}

console.log(person, typeof person);
