//Challenge 1
// Create a function called getCelsius() that takes fahreinheit and convert to celsius

// function getCelsius(F) {
//   const celsius = ((F - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(32)}`);

//Challenge 2
// Create  function called minMax() that takes in an array o numbers and return an object with the minimum and maximum numbers in array

numbers = [1, 2, 3, 45, 65, 3, 2];

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 34, 55, 65]));

//challege 3
// create an IIFE (immediately invoked Function Expression) that takes in the length and width of a rectangle outputs it to yhe console

((length, width) => {
  const area = length * width;
  const output = `The Area is ${area}`;
  console.log(output);
})(5, 3);
