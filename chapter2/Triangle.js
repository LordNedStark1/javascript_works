
//
// for (let i = 0; i < 5; i++) {
//     let hash = "#";
//     for (let j = 0; j <i ; j++) {
//         hash += "#"
//     }
//     console.log(hash)
// }
// for (let i = 6; i > 0; i--) {
//     let hash = "";
//     for (let j = i; j >0 ; j--) {
//         hash += "#"
//     }
//     console.log(hash)
// }

for (let i = 5; i > 0; i--) {
    let hash = "";
    for (let j = i; j > 0; j--) {
        hash += " "
    }
    hash += "#"
    for (let k = 1; k > 0; k--) {
        hash += "#";
    }
        console.log(hash)
}