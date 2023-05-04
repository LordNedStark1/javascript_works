
let names =["Mark","John", "Luke", "Anna", "Ester"]
let earnings =[30_000, 45_000, 38_900, 50_540, 30_000]
function taxCalculator(peopleNames, earnings){
    let result = ""
    let totalTax = 0
    for (let i = 0; i < peopleNames.length; i++) {
        result +="\t" + peopleNames[i] + " |\t" + ceiling(earnings[i])
        totalTax += earnings[i]
    }
    result += "\nThe total tax is :"
}
function ceiling (earning){
    if(earning > 30_000) return (20/100)* earning
    else if(earning === 30_000) return (15/100)* earning
}