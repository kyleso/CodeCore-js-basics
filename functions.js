// Functions

// Exercise: Rude Bot

function insult(name) {
  // Variables created inside the block function will cease
  // exist outside of the block. They'll disappear after
  // the function has finished executing.
  const randNum = Math.floor(Math.random() * 3);

  if (randNum === 0) {
    return `${name}, you doofus`;
  } else if (randNum === 1) {
    return `${name}, your father smelt of elderberries`;
  } else {
    return `Your mother was a hamster, ${name}`;
  }
  // When you `return` from a function, the remaining lines
  // of code in the function's block will be ignored.
  console.log("Can you see me!?");
}

// Example
console.log(insult("Steve"));
console.log(insult("Trump"));
console.log(insult("John"));