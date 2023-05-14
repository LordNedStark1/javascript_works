

let cls = document.getElementsByClassName("first_div")

let width = window.outerWidth
let height = window.outerHeight

let browserName = window.navigator.appName

let area = width * height

let foundCLass = document.getElementsByClassName("first_div")[0].children

foundCLass[1].textContent += browserName 

foundCLass[2].textContent += area
foundCLass[4].textContent += window.location.hostname

foundCLass[5].textContent += window.location.href