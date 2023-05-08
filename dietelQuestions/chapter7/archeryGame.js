// import {random} from 'react'
class Player{
    name = ""
    firstPoint = 0
    secondPoint = 0
    thirdPoint = 0
    totalPoint = 0

}
playerNames = ["Ben", "Doris", "Legend", "Inem"]
players = []

for (let i = 0; i < 4; i++) {
    let player = new Player()
    player.name = playerNames [i]
    players.push(player)
}
    let count = 1
    let number = 1
function random(){
    count++
    if (count > 10) count = 1
    if (number > 20) number = 1
    return number *= count
}

console.log(random())
for (let i = 0; i < players.length; i++) {
    players[i].firstPoint =  random()
    players[i].secondPoint = random()
    players[i].thirdPoint =  random()
}
for (let i = 0; i < players.length; i++) {
    console.log(players[i].firstPoint)
   players[i].totalPoint = players[i].firstPoint + players[i].secondPoint + players[i].thirdPoint
}
let winner = ""
let max = ""

for (let i = 0; i < players.length; i++) {

}