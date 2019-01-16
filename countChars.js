function countChars(str) {
    let charCounts = {};
  
    for (let i = 0; i < str.length; i += 1) {
      const char = str[i].toLowerCase();
  
      // When reading a key that doesn't exist in an
      // object, "undefined" is returned. In the condition
      // with use the falsiness of that behavior test whether
      // a character as already been encountered.
      if (charCounts[char]) {
        charCounts[char] += 1;
      } else {
        charCounts[char] = 1;
      }
    }
  
    return charCounts;
  }
  
  console.log(countChars("This is some kind of text"));