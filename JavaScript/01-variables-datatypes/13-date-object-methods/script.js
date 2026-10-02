let x;
let d = new Date();

x = d.toString(); //string representation of date

x = d.getTime(); //timestamp in milliseconds

x = d.getFullYear(); //only year

x = d.getMonth() + 1; //month

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

//Calling API
x = Intl.DateTimeFormat("en-US").format(d);
x = Intl.DateTimeFormat("en-GB", { month: "long" }).format(d);

//without calling API
x = d.toLocaleDateString("default", { month: "short" });

x = d.toLocaleDateString("deafult", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});
console.log(x);
