

function bars(numberOfTimes){
    
let result ="";
    for (let i = 1; i <= numberOfTimes; i++) {
        for (let j = i; j < numberOfTimes; j++) {
           result += "* "
        }
        console.log(result)
    }

}
console.log(bars(3))

