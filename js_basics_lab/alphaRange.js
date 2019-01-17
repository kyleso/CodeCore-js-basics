function alphaRange(start, end, step) {
    
    let arr = [];
    const startNum = start.charCodeAt(0);
    const endNum = end.charCodeAt(0);
    let increment = step;

    if (step === undefined) {
        increment = 1;
    }

    if (startNum > endNum) {
        for (let k = startNum; k >= endNum; k -= increment) {
            arr.push(String.fromCharCode(k));
        }
    } else {
        for (let i = startNum; i <= endNum; i += increment) {
            arr.push(String.fromCharCode(i));
        }
    }
    return arr;
}

console.log(alphaRange('a', 'f')); // returns ['a', 'b', 'c', 'd', 'e', 'f']
console.log(alphaRange('d', 'h')); // returns ['d', 'e', 'f', 'g', 'h']
console.log(alphaRange('f', 'b')); // returns ['f', 'e', 'd', 'c', 'b']
console.log(alphaRange('a', 'k', 3)); // returns ['a', 'd', 'g', 'j']
console.log(alphaRange('z', 't', 2)); // returns ['z', 'x', 'v', 't']



