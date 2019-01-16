function printMulti(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            console.log(arr[i][j]);
        }
    }
}

const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
printMulti(myArray);