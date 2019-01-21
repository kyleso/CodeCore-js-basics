function factorial(num) {

  if (num === 0) {
    return 1;
  } else if (num < 0) {
    return "impossible";
  } else {
    return num * factorial((num - 1));
  }
}

console.log(factorial(4));
// expected output --> 24

console.log(factorial(0));
// expected output --> 1

console.log(factorial(-1));
// expectd output --> "impossible"

console.log(factorial(1));
// expected output --> 1