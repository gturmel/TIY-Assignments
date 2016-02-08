var sumFifteens = 0;
var sumThreesAndFives = 0;

for(num = 0; num < 1000; num++){
    if (num % 15 === 0) {
        sumFifteens = sumFifteens + num;
    } else if (num % 5 === 0) {
        sumThreesAndFives = sumThreesAndFives + num;
    } else if (num % 3 === 0 ) {
        sumThreesAndFives = sumThreesAndFives + num;
    }
}

var totalSum = sumFifteens + sumThreesAndFives;
console.log(totalSum);
