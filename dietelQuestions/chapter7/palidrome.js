log = console.log

function isPalidrome(letters){
    let newWord = ""
    letters += ""
    for (let i = letters.length-1; i >= 0; i--) {
        newWord += letters.charAt(i)
    }
    if (newWord === letters){
        return true// "is palidrome"
    }
    return "is not palidrome"
}

let word = "lhawal"
log(isPalidrome(word))

