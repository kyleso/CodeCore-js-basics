function isEven(number) {
    if (number & 1) {
        return false;
    } else {
        return true;
    }
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(Infinity));
console.log(isEven(NaN));
console.log(isEven(-2));
console.log(isEven(undefined));