// arr = [1,2,3,4,5]
// to arr = [6,5,4,3,2,1,0]

const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);

// challenge
// combine arr1 and arr2 to arr3
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//Solution1
const arr3 = arr1.slice(0, 4).concat(arr2);

//Solution2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr3);
