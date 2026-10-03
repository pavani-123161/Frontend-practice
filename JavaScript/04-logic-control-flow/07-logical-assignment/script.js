// || = assigns the right side value only if the left is a flasy value

let a = false;
// if (!a) {
//   a = 10;
// }
// a = a || 10;
a ||= 10;
console.log(a);

//&& = assigns right side value only if the left is  atruthy value
let b = 20;
// if (b) {
//   b = 20;
// }
// b = b && 20;
b &&= 20;
console.log(b);

// ??= assigns the right side value only if te left is null or undefined

let c = null;
// if (c === null || c === undefined) {
//   c = 20;
// }

// c = c ?? 20;
c ??= 20;
console.log(c);
