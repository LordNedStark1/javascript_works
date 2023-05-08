let invalid = 4388576018402626
let valid = 4388576018410707

function validateMultiple(multiple, sum) {
    if (multiple > 9) {
        let stringMultiple = "" + multiple

        multiple = 1 + Number(stringMultiple[1])
        sum += multiple
    } else {
        sum += multiple
    }
    return sum;
}

function sumSecondNumberBackWard(value){
    let stringValue = "" + value
    let sum = 0;
    for (let i = stringValue.length-2; i >= 0; i -= 2){
        let multiple = 2 * Number(stringValue[i])
        sum = validateMultiple(multiple, sum);
    }
    return sum
}

function sumOddNumbers(value) {
    let stringValue = "" + value
    let sum = 0;
    for (let i = stringValue.length - 1; i >= 0; i -= 2) {
        sum += Number(stringValue[i])
    }
    return sum
}
function sumResult(value){
    return sumSecondNumberBackWard(value) + sumOddNumbers(value)
}
function validateResult(value) {
    let toValidate = sumResult(value)
    if (toValidate % 10 === 0) return "Valid"
        return "Invalid"
}


console.log(validateResult(valid))