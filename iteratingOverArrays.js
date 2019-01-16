const arr = ["Hello", "Hi", "Hola", "Allo", "Bonjour"];
// Using a regular for loop

for (let index = 0; index < arr.length; index += 1) {
  const value = arr[index];

  console.log("Index:", index, "Value:", value);
}

// Using the for..of loop
for (let value of arr) {
  // It's recommended that you use a regular for loop
  // if you need the index
  console.log("Value:", value);
}