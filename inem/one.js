let prompt = require(`prompt-sync`)();


class Distance{
    constructor() {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
    }

    pointOne(){
        this.x1 = parseFloat(prompt("Enter the x-coordinate of point one: "))
        this.y1 = parseFloat(prompt("Enter the y-coordinate of point one: "))
    }

    pointTwo(){
        this.x2 = parseFloat(prompt("Enter the x-coordinate of point two: "))
        this.y2 = parseFloat(prompt("Enter the y-coordinate of point two: "))
    }
}

function distanceBetweenTwoPoints(distance){
    distance.pointOne();
    distance.pointTwo();

    if (distance.x1 === distance.x2 && distance.y1 !== distance.y2) {
        log("The points are located on a line perpendicular to the x-axis.");
    }
    else if (distance.x1 !== distance.x2 && distance.y1 === distance.y2) {
        log("The points are located on a line perpendicular to the y-axis.");
    }
    else{
        log("The points are not located on a line perpendicular to an axis.")
    }
}


let distance = new Distance();
distanceBetweenTwoPoints(distance);