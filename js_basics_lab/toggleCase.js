const args = process.argv.slice(2);
const string = args[0];
let result = "";

for (let i = 0; i < string.length; i += 1) {
    const character = string.charAt(i);
    if (character == character.toUpperCase()) {
        result = result + character.toLowerCase();
    } else if (character == character.toLowerCase()) {
        result = result + character.toUpperCase();
    } else {
        result = result + character;
    }
}
console.log(result);