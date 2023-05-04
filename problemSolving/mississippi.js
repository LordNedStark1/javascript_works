let mississippi = "Mississipi"

let s = 0
let i = 0
for (let j = 0; j < mississippi.length; j++) {
    if (mississippi[j] === 'i') i++
    if (mississippi[j] === 's') s++
}
console.log("The number of i is: " + i)
console.log("The number of s is: " + s)