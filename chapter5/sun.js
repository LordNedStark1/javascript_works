

console.log(sum(range(1, 10)))

function range(start, end){
    let arr = []
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}
function sum (numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum
}

const f = function (){
    console.log("Yes")
}
f()
