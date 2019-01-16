function clone(objA) {
    let objB = {};
    for (let i in objA) {
        objB[i] = objA[i];
    }
    return objB;
}

const ObjectA = {a: 1, b: 2};

ObjectB = clone(ObjectA);

console.log(ObjectB === ObjectA);


