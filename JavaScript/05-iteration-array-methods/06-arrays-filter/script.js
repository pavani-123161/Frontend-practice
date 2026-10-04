const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

//Short Version

const evenNumbers = numbers.filter((element) => element % 2 == 0);

//Same with forEach
numbers.forEach(function (element) {
  if (element % 2 === 0) {
    console.log(element);
  }
});

console.log(evenNumbers);
