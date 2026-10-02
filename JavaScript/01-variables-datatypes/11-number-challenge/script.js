// Create a variable x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50 and sum,product

//between 1 and 100
const x = Math.floor(Math.random() * 100 + 1);

//between 1 and 50
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the Product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get the quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder
const rem = x % y;
const remOutput = `${x} % ${y} = ${rem}`;
console.log(remOutput);

console.log(y);
