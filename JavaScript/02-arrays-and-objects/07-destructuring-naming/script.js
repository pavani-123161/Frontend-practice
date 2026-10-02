const firstName = "John";
const lastName = "Doe";
const age = 30;
const Person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

x = Person.age;
console.log(x);

//Destructuring

const todo = {
  id: 1,
  title: "Take Out Trash",
  user: {
    name: "John",
  },
};

//when you are using {} means destructuring
const {
  id,
  title,
  user: { name },
} = todo;
console.log(id, title);

//Destructuring arrays
const numbers = [23, 65, 33, 49];

const [first, second, ...rest] = numbers;
console.log(first, second, rest);
