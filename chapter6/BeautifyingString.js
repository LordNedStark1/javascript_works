log = console.log
function addFullStop(word){

    if (word.charAt(word.length-1) !== '.'){
        word  += '.'
    }
    return word
}
function makeFirstCapital(word){
    let newWord = word
    if (word[0] !== word[0].toUpperCase()){

         newWord = word[0].toUpperCase()

        for (let i = 1; i< word.length; i++){
            newWord += word[i]
        }
    }
    return newWord
}

function beatifyWord(word){
    return makeFirstCapital(addFullStop(word))
}
word = "hi"

log(beatifyWord(word))