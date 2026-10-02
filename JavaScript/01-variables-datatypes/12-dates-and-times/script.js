let d;
d = new Date(); //type object

d = d.toString();

d = new Date(2021, 6, 10, 12, 30, 60); //month 0-based year - month- date-hours-min-second

d = new Date("2021-07-10T12:30:00"); //same as in string

d = new Date("07/10/2021 12:30:00");

d = new Date("2022-07-10");
d = new Date("07-10-2022");

d = Date.now(); //exact millisecond in time

d = new Date("07-10-2022 12:30:00");
d = d.getTime(); //timestamp

d = Math.floor(Date.now() / 1000); //convert to seconds

console.log(d);
