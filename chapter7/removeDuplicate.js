

function noDuplicate(arr){
    let newArr = []
    let bool = false
    newArr.push(arr[0])
    for (let i = 0; i < arr.length; i++) {
        bool = false
        for (let j = 0; j <newArr.length; j++) {
            if(arr[i] === newArr[j]){
                bool = false;
              break
            }
            else if(arr[i] !== newArr[j]){
                bool = true
            }
        }
        if (bool) newArr.push(arr[i])
    }
    return newArr
}

let question = [2,3,3,4,1,1,12,4]
console.log(noDuplicate(question))