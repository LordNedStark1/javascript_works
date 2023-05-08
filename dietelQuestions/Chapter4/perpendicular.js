let prompt = require(`prompt-sync`)()


const x1 = Number(prompt("Enter the x coordinate of point 1:"));
const y1 = Number(prompt("Enter the y coordinate of point 1:"));
const x2 = Number(prompt("Enter the x coordinate of point 2:"));
const y2 = Number(prompt("Enter the y coordinate of point 2:"));

if (x1 === x2) console.log("The points are on a line perpendicular to the y-axis.");
 else if (y1 === y2) console.log("The points are on a line perpendicular to the x-axis.");
else console.log("The points are not on a line perpendicular to either axis.");
