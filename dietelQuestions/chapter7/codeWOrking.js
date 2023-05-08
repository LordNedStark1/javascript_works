log = console.log

function inBetween(array){

    let newArray = []
    for (let i = 1; i < array.length; i += 2){
        newArray.push(array[i])
    }
    return newArray
}

let arr = [1,2,3,4,5, 9, 7]

log(inBetween(arr))