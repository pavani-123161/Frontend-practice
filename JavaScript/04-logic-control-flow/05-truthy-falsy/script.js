//falsy Values
// - false
// - 0
// - "" or ''(Empty String)
// - null
// -undefined
// -NaN

//Truthy Values
// -Everything else that is not falsy
// - true
// -'0'(0 in a string)
// -' '(space in a string)
// -'false' (false in a string)
// -[] (empty array)
// -{}(empty object)
// - function() {} (empty function)

const x = false;
if (x) {
  console.log("This is Truthy");
} else {
  console.log("This is falsy");
}

//truthy and falsy caveats

const children = 0;
if (children !== undefined) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

//checking for empty array
const posts = ["Post1", "Post2"];
if (posts.length != 0) {
  console.log("List Post");
} else {
  console.log("No Posts");
}

//checking for empty objects
const user = {
  name: "Brad",
};
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

//Loose Equality (==)
console.log(false == 0);
console.log(null == undefined);
console.log("" == 0);
