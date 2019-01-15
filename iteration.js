let num = 0;
// Use `while` to execute block of code multiple times.
// It is followed by condition surround by brackets (i.e ())
// just a like a if-statement. For as long as expression
// inside brackets is `true`, the block of code that follows
// will keep executing.
while (num <= 100) {
    console.log("At num:", num);
  
    // AND operator
    true && true; // true
    true && false; // false
    false && true; // false
    false && false; // false
  
    // OR operator
    true || true; // true
    true || false; // true
    false || true; // true
    false || false; // false
  
    if (process.argv[2] === "half" && num >= 50) {
      break;
    }
  
    num += 1;
  // The above does same thing as the line below
  // num = num + 1;

  // When expression can be written in multiple different
  // ways and they functionally exactly same, the simple express
  // is called "syntax sugar"

  // Example:
  // num += 1 is syntax sugar for num = num + 1

  // num = num - 1
  // num -= 1;
  // num = num * 2
  // num *= 2;
  // num /= 2;

  // I do not recommend using this of incrementation
  // num++;
  // ++num;
}

// The `for` loop can be used to represent any loop.
// Following `for` keyword are brackets that contain
// 3 parts seperated by semi-colons (;):
// - Variable declarations. This is usually a variable that will
//   change over the course of iteration.
// - The Condition. This would be same condition that would write
//   for a `while` loop.
// - Code that runs after block is finished. We write code that
//   will usually change the variable in the first part. This eventually
//   leads to the loop ending.
for (let i = 0; i <= 100; i += 1) {
    if (process.argv[2] === "even") {
      if (i % 2 === 0) {
        // Use `continue` keyword in the block of
        // loop to skip the remaining lines of code in block
        // and go immediately to the next iteration.
        continue;
      }
    }
  
    console.log(`Mambo No. ${i}`);

    // The third part (i += 1 in this case) executes
    // here after all of the code in the block is complete.
  }
  