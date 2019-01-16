/* 

function merge(objA, objB) {
    return {...objA, ...objB};
}

console.log(merge({a: 1, b: 2}, {c: 3, d: 4})); // return {a: 1, b: 2, c: 3, d: 4})
console.log(merge(
    {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
    {firstName: 'Harry', lastName: 'Potter'}
  )); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}

*/

function merge(objA, objB) {
    let finalObject = {};
    for (let i in objA) {
        finalObject[i] = objA[i];
    }
    for (let j in objB) {
        finalObject[j] = objB[j];
    }
    return finalObject;
}

console.log(merge({a: 1, b: 2}, {c: 3, d: 4})); // return {a: 1, b: 2, c: 3, d: 4})
console.log(merge(
    {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
    {firstName: 'Harry', lastName: 'Potter'}
  )); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}

