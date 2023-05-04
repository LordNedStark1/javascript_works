let prompt = require('prompt-sync')()
let max = 0
let secondMax = 0
let input = 0
for (let i = 0; i < 5; i++) {
    input = Number(prompt("Enter a number"))
    if (input > max) {
        secondMax = max
        max =input
    }
    if (input < max && secondMax < input) secondMax = input
}
console.log(secondMax)