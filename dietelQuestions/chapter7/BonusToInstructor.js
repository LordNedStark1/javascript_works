let studentGrade = [65, 64, 65,74,56, 23, 56, 34, 43, 43]

function gradation(array){
    let a1 = 0
    let f1 = 0
    for (let i = 0; i < array.length; i++){
        if (array[i] > 50 ) a1++
        if (array[i] < 50 ) f1++
    }
    if (a1 > f1)
        return "Bonus to the instructor"

    return "CLass had low grade"
}

console.log(gradation(studentGrade))