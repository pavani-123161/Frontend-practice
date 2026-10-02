//Create an array of objects called Library. Add 3 objects with a property of title,author,statuss. Title and author should be stringsand status should be another object with the properties of own,reading and read set own to true and reading and read to false

const library = [
  {
    title: "The Road Ahead",
    author: "Bill gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Steve Jobs",
    author: "Walteir",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mockingjay",
    author: "Suzzanne",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

//set read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//destructuring the title from the first book and rename the variable to firstBook
const { title: firstBook } = library[0];
console.log(firstBook);

//Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
