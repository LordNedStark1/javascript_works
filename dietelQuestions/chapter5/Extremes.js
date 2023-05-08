
let prompt = require(`prompts-sync`)()

let counter = Number(prompt("How many times do you want input data"))
let max = Number.MIN_VALUE
let min = Number.MAX_VALUE

for (let i = 0; i <= counter; i++) {
    let number = Number(prompt("Enter a number"))
if (number > max) max = number;
if (number < min) min = number
}
let sum = min + max
console.log(sum)