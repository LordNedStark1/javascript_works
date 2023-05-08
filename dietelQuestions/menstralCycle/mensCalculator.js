let prompt = require('prompt-sync')()

function  mensCalculator(firstDate, lastDay, cycle, month, ){

    let cycleFromStartDate = firstDate + cycle
    let daysInTheMonth = daysInAMonth(month)
    if (cycleFromStartDate > 30) {
     return  daysBeyond30(cycleFromStartDate, daysInTheMonth, month)
    }
 }
 function daysBeyond30(cycleFromStartDate, daysInTheMonth , month){
     let newDay = cycleFromStartDate - daysInTheMonth

     let stringValue = "The next circle will start by " + newDay + "th of "
         + determineMonth(month ) +"\n it will most likely start by " + (newDay - 2) +
         "\nAnd will possibly end by "+ (newDay + 7)
     return stringValue
 }
function determineMonth(monthNumber) {

    let month = ["January", "February","March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December"]


    return month[monthNumber - 1]
}
function daysInAMonth(month){
    let numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 , 31]

    return numberOfDays[month -1]
}


let firstDate = Number(prompt("What is the first day: "))
let lastDay = Number(prompt("Enter the last day: "))
let cycle = Number (prompt("what is your cycle :"))
let month = Number(prompt("Enter the month in number: "))

 console.log(mensCalculator(firstDate,lastDay, cycle, month ))