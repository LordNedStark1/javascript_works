let prompt = require(`prompt-sync`)()

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

if (num1 === num2) console.log(0);
else if (num1 > num2)console.log(1);
else console.log(-1)