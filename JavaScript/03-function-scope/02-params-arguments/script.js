function registerUser(user = "Bot") {
  //   if (!user) {
  //     user = "Bot";
  //   }
  return user + " is registered";
}
console.log(registerUser());

//Rest Params
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// objects as Params

function loginUser(user) {
  return `The User ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
  id: 1,
  name: "John",
};
console.log(loginUser(user));

//Arrays as Params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  console.log(item);
}

getRandom([12, 34, 56, 21, 34, 56]);
