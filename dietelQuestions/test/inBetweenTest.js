function doubleThisArray(arrayToDouble) {

    for (let index = 0 ; index< arrayToDouble.length; index++ ) {
        arrayToDouble[index] = arrayToDouble[index] * 2;
    }
    return arrayToDouble;
}

numbers = [2,4,3,1,8]
console.log(doubleThisArray(numbers))