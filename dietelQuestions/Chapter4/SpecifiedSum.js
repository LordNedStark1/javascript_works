let prompt = require(`prompt-sync`)()

const num = Number(prompt("Enter a number:"));
let sum = 0;

while (sum < num) {
    const input = Number(prompt("Enter an integer:"));
    sum += input;
}
console.log(sum)