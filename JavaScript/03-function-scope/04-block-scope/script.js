const x = 100;
const foo = 1; //it doesn't added to window object
var bar = 2; //it is added to window object
if (true) {
  const y = 200;
  console.log(x + y);
}

// console.log(x+y);can't access y here because y is bloack varaible

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// can't access i here i is block scope

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

//we can't access a and b but we can access c because var is not block scope variable prefer (const, let)

function run() {
  var d = 100;
  console.log(d);
}
run();
// console.log(d); we ca't acess d here beacuse it is function scope
