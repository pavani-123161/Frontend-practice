console.log(addDollarSign(100)); //it works here also

//Function Declaration
function addDollarSign(value) {
  return "$" + value;
}
console.log(addDollarSign(100));

// console.log(addPlusSign(200));can't access here

//Function Expression
const addPlusSign = function (value) {
  return "+" + value;
};

console.log(addPlusSign(200));
