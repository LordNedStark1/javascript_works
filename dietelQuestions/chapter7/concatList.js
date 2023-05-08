
let first = ['a','b','c']
let second = [1,2,3]

function listConcat(arr1, arr2 ){
    let newArr = []

    for (let i =0; i < arr1.length; i++)
        newArr.push(''+arr1[i])

    for (let i =0; i < arr2.length; i++)
        newArr.push(''+arr2[i])

    return newArr

}


console.log(listConcat(second, first))