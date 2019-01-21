const myArray = [4,6,7,8,1];

function sum(array) {
  // start by the termination condition
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}

console.log(sum(myArray));

// Using destructuring

function sum([first, ...rest]) {
  // start by the termination condition
  if(first === undefined) {
    return 0;
  } else {
    return first + sum(rest);
  }
}

console.log(sum(myArray));