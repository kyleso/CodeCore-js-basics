// Objects

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