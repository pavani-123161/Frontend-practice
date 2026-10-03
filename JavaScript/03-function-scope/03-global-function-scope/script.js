// alert('Hello');
// console.log(innerWidth);

const x = 100; //global
console.log(x, "in global");
function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}
run();
if (true) {
  console.log(x, "in block");
}
function add() {
  const y = 50;
  console.log(y);
  const x = 100; //overrride global variable
  console.log(x + y); //150
}

add();
//we cant access y here
// console.log(y);
