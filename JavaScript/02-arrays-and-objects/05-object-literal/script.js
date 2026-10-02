const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.hobbies[0];

person.name = "Jane Doe";
person["isAdmin"] = false;

//remove properties completely
delete person.age;
x = person;

//add properties
person.hasChildren = true;

person.greet = function () {
  console.log(`Hell0, my name is ${this.name}`);
};

console.log(x);
