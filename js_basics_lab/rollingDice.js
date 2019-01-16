const args = process.argv.slice(2);
const numOfDice = parseInt(args[0]);
const faces = parseInt(args[1]);

let sum = 0;

for (let i = 1; i <= numOfDice; i += 1) {
    let randomNumber = (Math.random() * faces) + 1;
    let result = Math.floor(randomNumber);
    console.log("Rolled: " + result);
    sum = sum + result;
}

const average = Math.round(sum / numOfDice);

console.log("-------------------");
console.log("Average Roll: " + average);
console.log("Total: " + sum);
