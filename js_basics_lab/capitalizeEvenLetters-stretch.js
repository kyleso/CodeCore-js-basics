// takes input from console in the form of a sentence
// even-numbered characters are capitalized, 
// and most importantly (and annoyingly) ignoring spaces

const args = process.argv.slice(2);
const string = args[0];

// create array of words in string without spaces
const arrayOfWords = string.split(" ");
let arrayOfWordLength = [];
// console.log(arrayOfWords)

// determine length of each word
for (let i = 0; i < arrayOfWords.length; i += 1) {
    let x = arrayOfWords[i].length
    arrayOfWordLength.push(x)
}
// console.log(arrayOfWordLength);

// turn array of words into one continuous string
let stringOfWords = "";
for (let i = 0; i < arrayOfWords.length; i+= 1) {
    stringOfWords += arrayOfWords[i];
}
// console.log(stringOfWords);

// change letters in concatenated string so that even numbers are uppercase
let capitalizedString = "";
for (let i = 0; i < stringOfWords.length; i += 1) {
    if (i % 2 === 0) {
        capitalizedString += stringOfWords.charAt(i).toLowerCase();  
    } else {
        capitalizedString += stringOfWords.charAt(i).toUpperCase();
    }
}
// console.log(capitalizedString);

// rebuild original string by re-adding spaces 
let finalString = "";

const numOfSpaces = arrayOfWords.length - 1;
const totalChars = arrayOfWordLength.reduce((a, b) => a + b, 0) + numOfSpaces;

let spaceCounter = 0;
let charCounter = 0;
// create mutable array of words while keeping old array immutable
let arr = [...arrayOfWordLength];
let sum = arr.reduce((a, b) => a + b, 0) + numOfSpaces; 

for (let i = 0; i < (capitalizedString.length + (arrayOfWords.length - 1)); i += 1) {
    if (charCounter == arrayOfWordLength[spaceCounter] + (totalChars - sum + spaceCounter)) {
        finalString += " ";
        spaceCounter += 1;
        charCounter += 1;
        arr.shift();
        sum = arr.reduce((a, b) => a + b, 0) + numOfSpaces;
        //console.log(arr);
    } else {
        finalString += capitalizedString.charAt(i - spaceCounter);
        charCounter += 1;
    }
    //console.log("Char Count: " + charCounter);
    //console.log("Spaces Written: " + spaceCounter);
    //console.log("Sum is " + sum);
}

console.log(finalString);

// formulae for if condition
// charCounter = arrayOfWordLength[spaceCounter] = 0  == 5   + 0 = totalChars 25 - sum 25 + spaceCounter 0;
// charCounter = arrayOfWordLength[spaceCounter] = 1  == 6   + 6 = totalChars 25 - sum 20 + spaceCounter 1;
// charCounter = arrayOfWordLength[spaceCounter] = 2  == 5   + 13 = totalChars 25 - sum 14 + spaceCounter 2;
// charCounter = arrayOfWordLength[spaceCounter] = 3  == 6   + 19 = totalChars 25 - sum 9 + spaceCounter 3;

