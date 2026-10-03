//Create a function called calculator that takes num1,num2 and opertor (+,-,*,/) if any other return error

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operator";
  }
  console.log(result);
}

calculator(3, 5, "%");
