const args = process.argv.slice(2);

const num = parseFloat(args[0]);
const power = parseFloat(args[1]);

let product = num;
for (let i = 1; i < power; i += 1) {
    product *= num;
}

console.log(product);

