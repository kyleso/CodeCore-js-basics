function matchingSet(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i += 1) {
         if (arr2.includes(arr1[i])) {
             newArray.push(arr1[i])
         }
    }
    return newArray;
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])); // returns [3, 4]
console.log((matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']))); // returns ['j', 'n']