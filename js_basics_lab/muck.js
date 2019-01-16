let word = process.argv[2];
let array = word.split(" ")
console.log(array);
function wordLowerUpper (array) {
   let emptyString = ""
   for (let i in array) {
       emptyString += " ";
       // i is the position
       // array[i] is the word

       let wordInSentence = array[i];
       for (let i in wordInSentence) {
       //i is the position
       //wordInSentence[i] is the letter
           if (i%2===0) {
               emptyString += wordInSentence[i].toUpperCase();
           } else {
               emptyString += wordInSentence[i].toLowerCase();
           }
       }
   }
   console.log(emptyString);
};

wordLowerUpper(array);