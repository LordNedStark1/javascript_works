let log = console.log

function addToString(a, stringToSplit, count) {

    if (a.length < 3) {
        a += stringToSplit[count + 1]
        return a += addToString(a, stringToSplit, count);
    }

    return a
}

function addingToList( count, stringToSplit) {
    let storageList = []
    let list = []
    let a = ""


    a = addToString(a, stringToSplit, count += 1 );

    list.push(a)

    if (list.length === 3){
        storageList.push(list)

        return storageList
    }
    if (list.length < 3){
        return addingToList(count,stringToSplit)
    }

}

function sumDigit(stringToSplit, size, count = -1){
    let length = stringToSplit.length


    if (length <= 3)return

    if(length > 3 ){

        if(count +1 < length) {

            return addingToList( count, stringToSplit);

        }
    }

}

let s = "11111222223"
let k = 3
sumDigit(s,k)
// console.log(sumDigit(s, k));