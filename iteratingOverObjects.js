// Iterating over Objects

const obj = { a: 1, b: 2, c: 3, d: 4 };
// Use the for..in loop

for (let key in obj) {
    const value = obj[key];
  
    console.log("Key:", key, "Value:", value);
  }