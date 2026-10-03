//definitng a function
function sayHello() {
  console.log("Hello World");
}

//calling a function
sayHello();

//parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

//arguments
add(5, 10);

function subtract(num1, num2) {
  return num1 - num2;
  //after return doesnt execute in this scope
}

console.log(subtract(10, 4));
