let i = 0;
while (i <= 20) {
  console.log("Number " + i);
  i++;
}

//Loop over arrays
const arr = [10, 20, 30, 40, 50];
i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//Nested while Loops
i = 0;
while (i <= 5) {
  console.log("number " + i);
  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
}

//do while loop
i = 0;
do {
  console.log("Number " + i);
  i++;
} while (i <= 20);
