

function zerosAndOnes( userInput) {
   let sum = 0;
   let counter = 1;
    while (userInput != 0) {
        if (userInput % 10 == 1){
            sum = sum + counter;
            userInput /= 10;
        }else {
            userInput /=10;
        }
            console.log(userInput )
        counter *= 2;
    }
    return sum;
}
console.log(zerosAndOnes(1101))