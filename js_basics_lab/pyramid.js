// using .repeat method

/*
const args = process.argv.slice(2);
const rows = args[0];

let finalString = "";

for (let i = 1; i <= rows; i += 1) {
    // create string for each row
    let rowString = "";
    rowString = rowString + " ".repeat(rows - i) + "# ".repeat(i); // + " ".repeat(rows - i);   don't need spaces on right
    
    // add each row to finalString
    finalString = finalString + rowString + "\n";
}
// trim last line break
finalString = finalString.trimEnd();
// log finalString
console.log(finalString);
*/


// using for loops

const args = process.argv.slice(2);
const rows = args[0];

let finalString = "";

for (let i = 0; i < rows; i += 1) {
    // create string for each row
    let rowString = "";
    for (let j = 0; j < rows - i; j += 1) {
        rowString += " ";
    }
    for (let k = 0; k <= i; k += 1) {
        rowString += "# ";
    }
    
    // add each row to finalString
    finalString = finalString + rowString + "\n";
}
// trim last line break
finalString = finalString.trimEnd();
// log finalString
console.log(finalString);

