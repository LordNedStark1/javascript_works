log = console.log

let word = "word"
let allLetters ="zwzxoasarsdsd"
let counter = 0

let newWord = ""
for (let i = 0; i< word.length; i ++){
    for (let j = 0; j< word.length; j++) {

        if (word[i] === allLetters[j]) {
            counter ++
            newWord += word[i]
        }
    }
}

log(counter)