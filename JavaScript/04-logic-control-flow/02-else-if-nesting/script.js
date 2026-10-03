const d = new Date(10, 30, 2022, 13, 0, 0);
const hour = d.getHours();

//Else if
if (hour < 12) {
  console.log("Good Moring");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
}

//Nested if
if (hour < 12) {
  console.log("Good Moring");
  if (hour === 6) {
    console.log("Wake Up");
  }
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");
  if (hour >= 20) {
    console.log("zzzz");
  }
}

//and both have to be true
if (hour >= 7 && hour < 15) {
  console.log("Its work time");
}

// or any one should be true
if (hour === 6 || hour === 20) {
  console.log("Brush your teeth");
}
