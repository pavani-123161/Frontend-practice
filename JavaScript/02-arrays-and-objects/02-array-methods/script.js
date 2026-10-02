let x;
const arr = [34, 55, 65, 43, 45];
arr.push(100); //adds element at last

arr.pop(); //removes last element

arr.unshift(99); //ads at first index

arr.shift(); //removes shifted element

arr.reverse();

x = arr.includes(20); //true if exists

x = arr.indexOf(34);

const arr2 = [23, 34, 45, 65, 23];

x = arr2.slice(1, 4);

x = arr2.splice(1, 3); //change original array starting index-number of elements

console.log(arr2);
