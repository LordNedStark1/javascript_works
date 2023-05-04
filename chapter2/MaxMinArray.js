let log = console.log
function Max(myArray){
    let max = Number.MIN_VALUE


    for (let i = 0; i <= myArray.length; i++){

        if (myArray[i] > max ){
            max = myArray[i]
        }

    }
    return max
}
function Min(myArray){
    let min = Number.MAX_VALUE
    for (let i = 0; i <= myArray.length; i++){

        if (myArray[i] < min){
            min = myArray[i]
        }
    }
    return min
}
let myArrayNew = [3, 4, 5, 5,6, 6,7]


log("Max is " + Max(myArrayNew))
log("Min is " + Min(myArrayNew))

