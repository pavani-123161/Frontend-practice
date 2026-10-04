const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

const stringNumbers = numbers.map((number) => "Number " + number);
console.log(stringNumbers);

const companies = [
  { name: "CompanyOne", category: "Finance", start: 1981, end: 2004 },
  { name: "CompanyTwo", category: "Retail", start: 1992, end: 2008 },
  { name: "ComapnyThree", category: "Auto", start: 1999, end: 2007 },
  { name: "ComapnyFour", category: "Retail", start: 1989, end: 2010 },
  { name: "ComapnyFive", category: "Technology", start: 2009, end: 2014 },
  { name: "ComapnySix", category: "Finance", start: 1987, end: 2010 },
  { name: "ComapnySeven", category: "Auto", start: 1986, end: 1996 },
  { name: "ComapnyEight", category: "Technology", start: 2011, end: 2016 },
  { name: "CompanyNine", category: "Retail", start: 1981, end: 1989 },
];

//Create an array of company names

const companyNames = companies.map((element) => element.name);

console.log(companyNames);

//create an array with just company and category

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyInfo);

//Create an array of objects with the name and the length of each company in years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start,
  };
});

console.log(companyYears);

//chain map methods

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

//chaining different methods

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((element) => element * 2);

console.log(evenDouble);
