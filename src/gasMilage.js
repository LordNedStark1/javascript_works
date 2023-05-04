

let milesDriven = [4,4,5,6,7]
let gallonsUsed = [4,5,7,8,7]
let avrg = 0
let total = 0
for (let i = 0; i <gallonsUsed.length; i++) {
    avrg = milesDriven[i] / gallonsUsed[i]
    total += avrg
}
console.log(total)
