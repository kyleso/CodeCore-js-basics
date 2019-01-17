function closestNeighbors(n, a, b, c) {
    let result = [];

    let i = (n - 1);
    while (i < n) {
        if (i % a === 0 && i % b === 0 && i % c === 0) {
            result.push(i);
            break;
        } else {
            i -= 1;
        }
    }

    let k = n + 1;
    while (k > n) {
        if (k % a === 0 && k % b === 0 && k % c === 0) {
            result.push(k);
            break;
        } else {
            k += 1;
        }
    }
    return result;
}

console.log(closestNeighbors(20, 2, 3, 4)); // returns [12, 24]
console.log(closestNeighbors(100,3,4,5)); // returns [60, 120]
console.log(closestNeighbors(3000,7,13,31)); // returns [2821, 5642]