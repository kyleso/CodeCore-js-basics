// The first two values of `process.argv` are the arguments to
// the script therefore we skip them.
const mood = process.argv[2];

// Code wrapped by an opening brace ({) and a closing
// brace (}) is called a "block"

// In a if-statement with multiple conditions, only the first
// block where its condition evaluates to true is executed.
// All the following blocks are skipped.
if (mood === "happy") {
  console.log("Yay!");
} else if (mood === "angry") {
  console.log("Calm down...");
} else if (mood === "hangry") {
  console.log("Have a donut");
} else {
  // In a if-statement, using the `else` keyword allows
  // to provide a default block that will execute if none of the
  // conditions are true.
  console.log("Ok.");
}

if (0) {
  console.log("Will I be executed?");
}

// When using boolean expression (e.g. conditions in a if),
// you do not need to provide a boolean value. JavaScript will
// attempt to convert any value you give it into a boolean.
// This is called "type coercion"

// A value that converts to `true` is considered "truthy".
// A value that converts to `false` is considered "falsy"

// The best to check the truthiness of a value is by using
// two bangs (!!) in front of value and looking at its return.

!!1; // true
!!0; // false
!!"false"; // true
!!""; // false
!!Infinity; // true
!!NaN; // false
!!undefined; // false
!![]; // true
!!{}; //true