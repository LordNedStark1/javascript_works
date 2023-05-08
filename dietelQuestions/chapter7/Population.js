log = console.log

class population {

    constructor(name, population, currency, temp) {
        this.name = name
        this.population = population
        this.currency = currency
        this.temp = temp
    }
}
let raw_Array = [[],[],[]]

let count = 0

function creatingNewPopulation(secondIndex, firstIndex) {
    let populationForEachArea = (count * 555) + 2 + count * 743 * 6553
    let pop = new population("ben " + count, populationForEachArea, secondIndex + 2 + count * 343 * 5453, secondIndex + firstIndex * 7)
    raw_Array[firstIndex].push(pop)
}

function populate_raw_array() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            count++
            if (isEqualZero(count, i)) continue
            creatingNewPopulation(j, i);

        }
    }
}

function isEqualZero(count, index){
    if (count % 3 === 0) {
        raw_Array[index].push(null)
        return true
    }
    return false
}
let sum = 0

function calculate_population_with_low_temperature() {
    let newArr = []
    for (let i in raw_Array) {
        for (let j in raw_Array[i]) {
            if (raw_Array[i][j] != null) {

                if (raw_Array[i][j].temp <= 10)
                    newArr.push(raw_Array[i][j])
                sum += raw_Array[i][j].population
            }
        }
    }
}

populate_raw_array();
log(raw_Array)
calculate_population_with_low_temperature();
// log(newArr)
log(sum)
