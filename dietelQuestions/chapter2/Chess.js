// for (let i = 0; i < 7; i++) {
//     if(i % 2 == 1 ) console.log("# # # # #")
//     else console.log(" # # # # # ")
// }

const addUp = function (width ,length){
    let hash = ""
    for (let i = 0; i < length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < width; j++) {
                hash += " #"
            }
            hash += "\n"
        }
            else {
            for (let j = 0; j < width; j++) {
                hash += "# "
            }
            hash += "\n"
        }
    }
    console.log(hash)
}
addUp(5,8)

