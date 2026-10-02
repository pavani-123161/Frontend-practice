let x;
const num = new Number(5);

//to convert to string
x = num.toString();
x = num.toString().length;

//to fixe to decimals and type is string
x = num.toFixed(2);

//fixed number of digits of all including after decimal and after decimal
x = num.toPrecision(2);

x = num.toExponential(2);

//converts number to their local
x = num.toLocaleString("ar-EG");

x = num.valueOf(); //object to num

//Max and Min Values
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x);
