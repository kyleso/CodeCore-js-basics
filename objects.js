// Objects

// Creating an object

const keyName = "title";

// prettier-ignore
const daeny = {
  // ð a key
  firstName: "Daenerys",
  //            ð a value
  "lastName": "Targaryen",
  // Keys are always string even if they do not look like it
  // Values can be any type (e.g. number, string, object, function, etc)
  [keyName + "s"]: [
  // To get the key from expression, surround the expression
  // with []
    "Queen of Mereen",
    "Khaleesi of the Great Grass Sea"
  ]
};

console.log(daeny);

// Reading keys of an object

daeny.firstName; // 'Daenerys'
daeny.titles; // [ 'Queen of Mereen', 'Khaleesi of the Great Grass Sea' ]
daeny["lastName"]; // 'Targaryen'
daeny["last" + "Name"]; // 'Targaryen'

// Write key-value pairs to an object

// You can create new key-value on a object by assigning
// a value to a key using the dot notation:
daeny.royalHouse = "House Targaryen"; // 'House Targaryen'

// As shown below, the "royalHouse" key-pair was added.
daeny;
// { firstName: 'Daenerys',
//   lastName: 'Targaryen',
//   titles: [ 'Queen of Mereen', 'Khaleesi of the Great Grass Sea' ],
//   royalHouse: 'House Targaryen' }

// You can also add new keys using the bracket notation. This allows
// you to create keys that have special characters and allows you
// to use expression to create the key (e.g. variables, function calls,
// additions, etc) as long as they evaluate to a string.
daeny["Played by"] = "Emilia Clarke"; // 'Emilia Clarke'
daeny;
// { firstName: 'Daenerys',
//   lastName: 'Targaryen',
//   titles: [ 'Queen of Mereen', 'Khaleesi of the Great Grass Sea' ],
//   royalHouse: 'House Targaryen',
//   'Played by': 'Emilia Clarke' }

// To read key containing special characters, you must use
// square brackets.
daeny["Played by"]; // 'Emilia Clarke'