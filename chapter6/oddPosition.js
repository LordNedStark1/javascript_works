log = console.log


// let arr = [2,3,45,6,7,4]

// for (let i = 1; i < arr.length; i+=2 ){
//     log(arr[i])
// }
// for(let i in arr){
//     log(arr[i])
// }
// for(let i of arr){
//     process.stdout.write(`${i}`)
// }
// arr.forEach((elem) =>{
//     console.log(elem * 2);
// })
let arr = []
let count = 1
for(let i =0 ; i < 3; i++ ){
    let secondArr = []
    for (let j = 0; j< 3; j++){
        secondArr.push(count)
        count++
    }
    arr.push(secondArr)
}
// for (let i in arr){
//     for (let j in arr[i]) {
//         console.log(arr[i][j])
//     }
// }
for (let i in arr){
    for (let j in arr[i]) {
        for (let k = 0; k <arr[1] ; k++) {

        }
        process.stdout.write("*")
    }
    console.log()
}
// console.log(arr)