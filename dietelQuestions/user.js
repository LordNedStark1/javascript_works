
let log = console.log

guestlist = ["mark", "ned", "ben", "legend", "inem"]

while(true){
    let userName = prompt("Enter your name ")
    let message = ""
    for(let j = 0; j < guestlist.length; i++){
        if (userName == guestlist[j]){
           message = "welcome"
        }else
            message = "You are not invited here"
    }
    alert("Welcome!!! ")
}