

let count = 0

function sumDigit(stringToSplit, size){
    let newList = []
    let sum = 0
    let mainList = first(stringToSplit, size)
    for (let i = 0; i < mainList.length; i++) {
        if (mainList.length < 2 ) {
            sum = sum + Number(mainList[i])
        }else {
            sum+= mainList[i]
        }
    }
    newList.push(sum)
    return newList
}
function first(stringToSplit, size){
    let mainList = inMainLoop(stringToSplit, size)
    let newList = []
    for (let i = 0; i < mainList.length; i++) {
        let sum = 0

            for (let j = 0; j < mainList[i].length; j++) {
                for (let k = 0; k < mainList[i][j].length; k++) {

                    sum = sum + Number(mainList[i][j][k])
                }

                newList.push(sum + "")

            }
    }
    return newList
}
function inMainLoop(stringToSplit, size){
    let mainList = []

    while (count < stringToSplit.length) {
        let addedList = addToList(stringToSplit, size)
        mainList.push(addedList)

    }
    return mainList

}
function addToList(stringToSplit, size){
    let mainList = []

    let split = splitString(stringToSplit, size)
    mainList.push(split)
    return mainList
}
function splitString( stringToSplit, size){
    let string = ''

    while (string.length < size){
         if (stringToSplit[count] === undefined){
             break
         }
            string += stringToSplit[count]
            count++;

    }
    return string
}

let s = "11111222223"
let k = 3
console.log(sumDigit(s,k))