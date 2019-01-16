function largestNumber(arr) {
    let largestNum = arr[0]
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

console.log(largestNumber([40, 2, 13, 34, 42])) // returns 42
console.log(largestNumber([1, 2, 3, 4, 5, 6])) // returns 6
console.log(largestNumber([99, 77, 55, 33, 22, 11])) // returns 99

//alternative and much quicker way to do this problem
// const array1 = arr
// console.log(Math.max(...array1));