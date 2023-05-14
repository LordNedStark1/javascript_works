// console.log(navigator.geolocation)
// console.log(screen.width, screen.availHeight)
// console.log(navigator.language)
// console.log(navigator.onLine);
// console.log(history);
// console.log(history.length);

// var x = 10
// console.log(x == window.x);
// console.log(window.x);

// x = 15
// console.log(window.x);

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstElementChild.children);
// console.log(document.body.firstElementChild.firstElementChild.textContent);

// console.log(document.body.firstElementChild.firstElementChild.firstChild);


// let cls  = document.getElementsByClassName("first-div")
// let tag  = document.getElementsByTagName("p")
// let id  = document.getElementById("fiftin")

// for(let i in tag){
//     console.log(tag[ i]);
//    tag[ i] = "Not now"
// }

// console.log();
// for(let i of tag){
//     console.log(i);
// }
// console.log(id);

// console.log(document.childNodes);

// let children = document.body.children
// let parent = document.body.parentElement
// let sibling = document.body.previousElementSibling

// console.log("the children " )
// console.log(children);
// console.log(parent);
// console.log(sibling);

let cls  = document.getElementsByClassName("first-div")
let tag  = document.getElementsByTagName("p")
let id  = document.getElementById("fiftin")

let namee2 = document.createElement("a")
let namee = document.createElement("p")
namee.innerHtml = "Changed background botton colour"
namee2.textContent = "change the botton colour"
cls[0].append(namee)
cls[0].prepend(namee2)