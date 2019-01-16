const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);
const z = parseInt(process.argv[4]);

if (x > y && x > z) {
    console.log(`The largest number is ${x}.`)
} else if ( y > x && y > z) {
    console.log(`The largest number is ${y}.`)
} else if (z > x && z > y) {
    console.log(`The largest number is ${z}.`)
} else if (x > z && x === y) {
    console.log(`${x} and ${y} are equal and larger than ${z}`)
} else if (x > y && x === z) {
    console.log(`${x} and ${z} are equal and larger than ${y}`)
} else if (y > x && y === z) {
    console.log(`${y} and ${z} are equal and larger than ${x}`)
} else {
    console.log("The three numbers are equal.");
}