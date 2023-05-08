let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
let journal = [
    {events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true}]
for (let entry of journal) {
    console.log(`${entry.events.length} events.`);
}