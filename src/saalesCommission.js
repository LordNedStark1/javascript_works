

let weekSales = [239.99, 129.75, 99.95, 350.89]

const percentageCalculator = sale => (9/100) * sale

const commission = sales => {
    for (const sale of sales) {
    console.log(percentageCalculator(sale) + 200)
    }
}

console.log(commission(weekSales))
