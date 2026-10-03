const age = 19;

//Using an if
if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You can't Vote");
}

//using a ternary Operator
age >= 18 ? console.log("You can Vote") : console.log("You can't Vote");

//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 =
  age >= 18 ? console.log("You can Vote") : console.log("You can't Vote");

//Multiple Statements
const auth = false;
// let redirect;
// if (auth) {
//   alert("Welcome to dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Access denied");
//   redirect = "/login";
// }
const redirect = auth
  ? (alert("Welcome to dashboard"), "/dashboard")
  : (alert("Access denied"), "/login");
console.log(redirect);
