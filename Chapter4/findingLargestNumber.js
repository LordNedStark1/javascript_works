
let prompt = require(`prompt-sync`)();
let log = console.log;

function largestNumber (){
    let largest = Number.MIN_VALUE
    let number = 0
    for (let i = 0; i < 11; i++) {
        number = Number( prompt("Enter a number "))
        if (largest < number) largest = number
    }
    return largest
}
log(largestNumber())