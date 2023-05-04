log = console.log
function isDivisibleByThree(myArray){
    let emptyArray = []
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i] % 3 == 0){
            emptyArray[i] = true
        }
        else {
            emptyArray[i] = false
        }
    }
    return (emptyArray)
}
let myOtherArray = [5,6,4,6,7,8,9]


log(isDivisibleByThree(myOtherArray))