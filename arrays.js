// Arrays

// Creating arrays

// Arrays are created with square brackets
// where each value inside is seperated by commas
let a = [1, 2, 3, 4, 5];

// Use .length to get the count of values in the array
a.length; // 5
[].length; // 0

// To read a value at a position in an array, use []
// like strings
a[0]; // 1
a[1]; // 2

// If there are no values at the position, "undefined"
// is returned
a[90]; // undefined
a["jdaklsdjlas"]; // undefined
a[-1]; // undefined

// The following is how we get the last value of an array
a[a.length - 1]; // 5

// To combine arrays together, don't use +. Use concat.
a; // [ 1, 2, 3, 4, 5 ]
a + [1, 2]; // '1,2,3,4,51,2'

// When using concat, a new array will be returned
// that is combination first and second array.
a.concat([1, 2]); // [ 1, 2, 3, 4, 5, 1, 2 ]

// Use .slice to extract parts of an array

a; // [ 1, 2, 3, 4, 5 ]

// When using slice, the original is not changed (not mutated).
// We instead always get a new array.
a.slice(0, 2); // [ 1, 2 ]
a.slice(1); // [ 2, 3, 4, 5 ]
a.slice(2); // [ 3, 4, 5 ]

// For starting and ending positions of slice, we
// can give negative values which means that the
// position will be counted from the end of the array
// in reverse.
a.slice(-1); // [ 5 ]
a; // [ 1, 2, 3, 4, 5 ]
a.slice(-2); // [ 4, 5 ]
a.slice(-3); // [ 3, 4, 5 ]
a.slice(-3, -2); // [ 3 ]

// You can't slice in reverse. The beginning position
// must always be smaller than the ending position.
a.slice(4, 1); // []

a.slice(100); // []

// To transform into strings, use the join method

a; // [ 1, 2, 3, 4, 5 ]
a.join(); // '1,2,3,4,5'
a.join(", "); // '1, 2, 3, 4, 5'
a.join(" ð¥ "); // '1 ð¥ 2 ð¥ 3 ð¥ 4 ð¥ 5'
a.join(" ðº "); // '1 ðº 2 ðº 3 ðº 4 ðº 5'

// To return and remove the first value, use .shift.
> a
[ 1, 2, 3, 4, 5, 6, 7 ]
> a.shift()
1
> a
[ 2, 3, 4, 5, 6, 7 ]
// To return and remove the last value, use .pop.
> a.pop()
7
> a
[ 2, 3, 4, 5, 6 ]


> a.unshift("BEGIN")
6
> a
[ 'BEGIN', 2, 3, 4, 5, 6 ]
> a.push("END")
7
> a
[ 'BEGIN', 2, 3, 4, 5, 6, 'END' ]

> [[1,2], [3,4]]
[ [ 1, 2 ], [ 3, 4 ] ]


Array.isArray(1) // false
Array.isArray([1,2,3]) // true
Array.isArray({a: 2}) // false