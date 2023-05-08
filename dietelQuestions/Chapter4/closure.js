log = console.log

function average (...numbers){

    function sum (...numbers){
    let total = 0
    for (const number of numbers) {
        total += number
    }
    return total
    }

    return sum(...numbers) / numbers.length

}
log(average(2,5,3,5,5))