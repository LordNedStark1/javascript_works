

function secondHighest(arr){
    let highest = Number.MIN_VALUE
    let secondHighest = Number.MIN_VALUE
    // secondHighest =
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest ){
            secondHighest = highest
            highest = arr[i]
        }
        if (arr[i] < highest && arr[i] > secondHighest ){
            secondHighest = arr[i]
        }
    }
    return secondHighest
}

// arr = [2,3,6,-4,9,9,8]
// arr = [21, 28, 10, 4, 40, 40]     
console.log(secondHighest(arr))