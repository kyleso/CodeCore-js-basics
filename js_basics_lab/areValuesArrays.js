function areValuesArrays(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        if (!Array.isArray(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(areValuesArrays([[1], [2], [4, 5]])) // returns true
console.log(areValuesArrays([1, [2], [6, 7, 8]])) // returns false
console.log(areValuesArrays(['true', 'false'])) // returns false