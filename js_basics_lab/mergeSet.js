/* function mergeSet(arr1, arr2) {
    const newArray = [...arr1,...arr2];
    let result = newArray.filter(function(elem, index, newArray) {
        return index == newArray.indexOf(elem);
    });
    return result;
}
*/

function mergeSet(arr1, arr2) {
    const arr = [...arr1, ...arr2];
    //console.log(arr);

    let finalArray = [];
    let tempObject = {};
  
    for (let i = 0; i < arr.length; i += 1) {
      tempObject[arr[i]] = 0;
      console.log(tempObject);
    }
    for (let i in tempObject) {
      finalArray.push(i);
      console.log(finalArray);
    }
    return finalArray;
}

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(mergeSet(array1, array2));
// [1,2,3,4,5]

let array3 = [1, 2, 2, 3, 3, 4, 4, 4, 4, 6, 6, 7, 7, 8];
let array4 = [1, 1, 1, 2, 4, 6, 6, 7, 7, 8, 9, 9, 9, 10];
console.log(mergeSet(array3, array4)); 
// [ '1', '2', '3', '4', '6', '7', '8', '9', '10']




    
  
