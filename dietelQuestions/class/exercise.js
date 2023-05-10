

class Shape{
    constructor(name) {
        let _name = name
        this.getName = () => _name
    }
}
class Rectangle extends Shape{
    constructor(name, side1, side2) {
        super(name);
        this._side1 = side1
        this._side2 = side2
    }
    get getArea(){
        return this._side1 * this._side2
    }
    isSquare(){
        return this._side1 === this._side2
    }
}

let rectangle = new Rectangle("Rectangle", 5, 5)

console.log(rectangle.getName())
console.log(rectangle.getArea)
console.log(rectangle.isSquare())
