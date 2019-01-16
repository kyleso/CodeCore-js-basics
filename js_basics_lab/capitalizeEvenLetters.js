const word = process.argv[2];
let finishedWord = "";

for (let i = 0; i < word.length; i += 1) {
    if (i % 2 === 1) {
        const letterUppercase = word.charAt(i).toUpperCase();
        finishedWord += letterUppercase;
    } else {
        const letterLowercase = word.charAt(i).toLowerCase();
        finishedWord += letterLowercase;
    }   
}

console.log(finishedWord);