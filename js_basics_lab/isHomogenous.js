function isHomogenous(arr) {

  const baseType = typeof arr[0];

  for (let i in arr) {
    if (typeof arr[i] !== baseType) {
      return false;
    }
  }
  return true;
}

console.log(isHomogenous([1,2,3])); // returns true
console.log(isHomogenous(['a', 'b', 'c'])); // returns true
console.log(isHomogenous([{name: 'Charles'}, 'Xavier'])); // returns false
console.log(isHomogenous([1, '2', 3])); // returns false