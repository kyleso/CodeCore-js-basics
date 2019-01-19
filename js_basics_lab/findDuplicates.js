/*

function findDuplicates(values) {
    
    console.log(values);
    let obj = {};
    let result = [];

    for (let i = 0; i < values.length; i += 1) {
        
        if (!obj[values[i]] && obj[values[i]] !== 0 ) {
            obj[values[i]] = 0;
        } else {
            obj[values[i]] += 1;
        }
            // let x = (result[iterationCounter]);
            // console.log(x);
            // finalArray.push(x); 
    } 
    for (let i in obj) {
        if(obj[i]) {
            result.push(i);
        }
    }

    return result;
}

console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9])); // returns [1, 9]
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4])); // returns ['Rob', 4]

*/

function findDuplicates(values) {

return [...new Set(values.filter(function(a){
    return values.indexOf(a) !== values.lastIndexOf(a)
}))];
}

function myFunc(arr) {
    return arr.filter(function (value, index, arr) {
        return arr.indexOf(value) !== index;
    });
}

console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9])); // returns [1, 9]
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4])); // returns ['Rob', 4]

