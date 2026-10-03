//Executes
if (true) {
  console.log("This is true");
}

//Not Executes
if (false) {
  console.log("This is false");
}

const x = 10;
const y = 5;
if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not  equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

//Shorthand IF
if (x >= y) console.log(`${x} is greater than or equal to ${y}`);
else console.log(`This is false`);
