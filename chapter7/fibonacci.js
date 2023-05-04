
function fibonacci(){

}
let first = 0
let  second = 1
let temp = NaN

console.log(first)
console.log(second)

for(let  i = 0; i < 20; i++) {
    temp = second;
    second = first + second
    first = temp
    console.log(second)
}