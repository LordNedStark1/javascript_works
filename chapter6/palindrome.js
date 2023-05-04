
let palWord = "llawall"

function palidrome(pal){
    let newPal = ""
    for (let i = pal.length-1; i >= 0; i--){
        newPal += pal[i]
    }

    if (newPal === pal) return  true
    return false
}

console.log(palidrome(palWord))
