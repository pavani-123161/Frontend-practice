// for ([inititalExpression]; [conditionExpression]; [incrementExpression]) statement;

//INITIAL EXPRESSION - Inititalizes a variable/container
//CONDITION EXPRESSION - Consition that the loop will continue to run as long as it is met or nitl the condition is false
//INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually incremnets the varaible
//STATEMENT - Code that will be executed each time the loop is run.
// To execute a 'block' of code use the '{}'  syntax

for (let i = 0; i <= 11; i++) {
  if (i === 3) {
    console.log("3 is my lucky number");
  } else console.log(i);
}

//Nest Loops
for (let i = 1; i <= 10; i++) {
  console.log("Number " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i}*${j} = ${i * j} `);
  }
}

//Loop through an array
const names = ["Brad", "Sam", "Sara", "John", "Tim"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//Break
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking...");
    break;
  }
  console.log(i);
}

//Continue
for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("Skipping 13...");
    continue;
  }
  console.log(i);
}
