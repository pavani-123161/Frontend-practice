let x;
const name = "John";
const age = 30;
x = "Hello, My name is " + name + " and I am " + age + " years old";

//Template Literals
x = `Hello,my name is ${name} and I am ${age} years old`;

// String Properties and methods

const s = "Hello World";
x = s.length; //length of string

x = typeof s;

// Access value by key
x = s[1];

// All methods
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("m"); //if char not extsts gives -1

x = s.substring(1, 4); // last index excluded

x = s.substring(7); //starts from 7 to end

x = s.slice(0, 5); // slice can be used from end using negative index

x = s.slice(-11, -6);

x = "     Hello World    ";
x = x.trim(); //trims white space

x = s.replace("World", "Pavani");

x = s.includes("Hello"); //true if it extsts

x = s.valueOf(); //instead of object if we need string

x = s.split(" "); //split into arrays

x = s.split(""); //each character split
console.log(x);
