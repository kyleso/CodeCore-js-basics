const args = process.argv.slice(2)
const x = parseInt(args[0]);
const y = parseInt(args[1]);

    for (let i = 1; i <= 100; i += 1) {
        if (i % x === 0 && i % y === 0) {
            console.log("FizzBuzz");
        } else if (i % x === 0 && i % y !== 0) {
            console.log("Fizz");
        } else if (i % y === 0 && i % x !== 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }


