let malik = "hi malik how are you doing today know you are fit for this take how to know you are capable to do this "

let newMalik = ""
for (let i = 0; i < malik.length; i++) {
    if (malik[i] === 'h') {
        newMalik += "H"
        continue
    }
    newMalik += malik[i]
}
newMalik = newMalik.split(" ")
lastMalik = ""
for (let i = 0; i < newMalik.length; i++) {
    if (newMalik[i] === "How") newMalik[i] = "know"
    else if (newMalik[i] === "know") newMalik[i] = "How"
    lastMalik += newMalik[i] + " "
}
console.log(lastMalik)