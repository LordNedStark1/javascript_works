
let first = ['a','b','c']
let second = [1,2,3]

function alternatingList(arr1, arr2 ) {
    let newArr = []


    for (let i = 0; i < arr1.length; i++) {
            newArr.push('' + arr1[i])
            newArr.push('' + arr2[i])
    }
    return newArr
}

console.log(alternatingList(first,second))
