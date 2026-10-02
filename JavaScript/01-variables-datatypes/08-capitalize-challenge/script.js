const myString = "developer";

//Convert first letter to capital

let myNewString;

//solution1
myNewString =
  myString.charAt(0).toUpperCase() + myString.substring(1).toLowerCase();

//Solution2
myNewString = myString[0].toUpperCase() + myString.substring(1).toLowerCase();
//Solution3
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);
