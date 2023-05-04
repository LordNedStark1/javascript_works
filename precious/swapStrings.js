let name = "you are so fried today and malik what have you done that you are requesting for brain break"

let body = name.slice(0, 32)
let first = name.slice(32, 56)
let second = name.slice(56)

let swap = body + second + first
console.log(swap)