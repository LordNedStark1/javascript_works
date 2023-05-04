const prompt = require('prompt-sync')();
let log = console.log;

class SalesPerson {
    #salePersonName;
    #itemsSold = [];

    constructor(salePersonName, itemList){
        this.#salePersonName = salePersonName;
        this.#itemsSold = itemList;
    }

    get name() {
        return this.#salePersonName;
    }

    set name(salePersonName) {
        this.#salePersonName = salePersonName;
    }

    get itemsSold() {
        return this.#itemsSold;
    }

    set itemsSold(itemsSold) {
        if (Array.isArray(itemsSold)) {
            this.#itemsSold = itemsSold;
        } else {
            console.error('Error: itemsSold must be an array of objects with itemNumber and itemValue properties!');
        }
    }
    toString(){
        return `Sales Person name : ${this.#salePersonName} 
        item sold value ${this.itemsSold[0].itemValue}
        item sold number ${this.itemsSold[0].itemNumber}`
    }

}

class Item{
    #itemNumber;
    #itemValue;

    constructor(itemNumber, itemValue){
        this.#itemNumber = itemNumber;
        this.#itemValue = itemValue;
        this._itemNumber = itemNumber;
        this._itemValue = itemValue;
    }

    get itemNumber() {
        return this._itemNumber;
    }

    set itemNumber(value) {
        this._itemNumber = value;
    }

    get itemValue() {
        return this._itemValue;
    }

    set itemValue(value) {
        this._itemValue = value;
    }
}

function addItemsSold(itemNumber, itemValue) {

    return new Item(itemNumber, itemValue);
}

function addItemToPerson(person, item){
    person.itemsSold.push(item);
    return person;
}

let salesNamesList = [];


function calculateSalesCommission(salePerson){
    let itemNumber = 1;
    let itemValueSum = 0;
    let itemValue;

    while (itemNumber != -1) {
        let name = prompt("Enter your name: ")
        let sName = new SalesPerson(name);

        itemNumber = prompt("Enter item number (-1 to exit): ");
        if (itemNumber == -1) {
            break;
        }

        itemValue = parseFloat(prompt("Enter item price: "));


        let storeNewItem = addItemsSold(itemNumber, itemValue);
        let itemToPerson = addItemToPerson(sName, storeNewItem);


        salesNamesList.push(itemToPerson);

        itemValueSum += itemValue;

        itemNumber++;
    }

    for (let index = 0; index < salesNamesList.length; index++) {
        console.log( "am here")
        log(salesNamesList[index].toString());
    }

    let fixedSalary = 200;
    let commission = 0.09 * itemValueSum;
    let earnings = fixedSalary + commission;

    return earnings;
}

let salePerson = new SalesPerson("Inem");
let earnings = calculateSalesCommission(salePerson);
log(`Total earnings for ${salePerson.name}: $${earnings}`);

