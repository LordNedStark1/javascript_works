let num = 23456

function convert(numb){
    let toWord = "" + numb
    let myList = []
    for (let i = 0; i < toWord.length; i++ ){
        myList.push( Number(toWord[i]))
    }
    return myList
}

console.log(convert(num))