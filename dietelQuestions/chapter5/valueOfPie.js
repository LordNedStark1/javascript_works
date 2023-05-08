
let sum = 4;


let divisor = 1;
let location = 0;
for (let i = 1; i <= 136_121; i++) {
    divisor = divisor +2;



    if (i% 2 === 0){
        sum += (4/(divisor ));

    }
    else {

        sum -= ( 4 / (divisor ));

    }

    if (sum ===  3.141599999994786){
        location = i;

    }

}
console.log("\n"+location);


