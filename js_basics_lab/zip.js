function zip(arrA, arrB) {
    if (arrA.length !== arrB.length) {
        return null;
    } 
    let finalArray = [];
    for (let i = 0; i < arrA.length; i += 1) {
        finalArray[i] = [arrA[i], arrB[i]];
    }
    return finalArray;
}
    
console.log(zip([1, 2, 3], [4, 5, 6])) // returns  [[1, 4], [2, 5], [3, 6]]
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow'])) // returns [['firstName', 'Jon'], ['lastName', 'Snow']]