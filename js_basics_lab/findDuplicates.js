/*
function findDuplicates(values) {
    
    console.log(values);
    let obj = {};
    let result = [];
    let finalArray = [];
    let iterationCounter = 0;

    for (let i = 0; i < values.length; i += 1) {
        obj[values[i]] = 0;
        iterationCounter += 1;
        //console.log(iterationCounter);
        console.log(obj);
        if (obj.length !== result.length) {
            let x = (result[iterationCounter]);
            console.log(x);
            finalArray.push(x);
        }   
    } 
    for (let i in obj) {
        result.push(i);
        console.log(result);
    }
    return finalArray;
}

console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9])); // returns [1, 9]
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4])); // returns ['Rob', 4]

*/