const myArray = [4,6,9,1];

// Approach one
const firstElement = myArray[0];
const restOfArray = myArray.slice(1);

// Destructuring approach
[firstElement, ...restOfArray] = myArray;

