let inputString = "someiclon"
let inputArray = [0,3,2,4,5,1,6,7,8]

let inputStringTwo = "codeleet"
let inputArrayTwo = [4,5,6,7,0,1,2,3]

function rearrange(inputString, inputArray){
    let newString = ""
    for (const index of inputArray) {
        newString += inputString[index]
    }
    return newString

}
function rearrangeTwo(inputString, inputArray, index = 0){
    let newString = ""
    newString += inputString[inputArray[index]]

    if (index + 1 < inputArray.length) {
         return newString + rearrangeTwo(inputString, inputArray, index + 1)
    }
    return newString

}
console.log(rearrangeTwo(inputString, inputArray))
console.log(rearrangeTwo(inputStringTwo, inputArrayTwo))


// console.log(rearrange(inputString, inputArray))
// console.log(rearrange(inputStringTwo, inputArrayTwo))