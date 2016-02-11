// ever wonder how much a lifetime supply of your favorite snack is? Wonder no more

// write a fxn named calculate Supply that
// takes two arguments, age, amnt/day
// cals the amnt consumed for rest of the life (constant max age)
// onputs "you will need NN to last you until the ripe old age of x
// call 3x, using different values each time"

var age = 32;
var totalAge = 75;
var amountPerDay = 5;
var totalAmount = 0;

function calculateSupply (age, amountPerDay) {
    for (age; age <= 75; age ++) {
        amountPerDay = age * 365 * amountPerDay;
        totalAmount = amountPerDay + totalAmount;
        console.log(totalAmount);
    };
};

console.log("You will need " + totalAmount + " M&M's to last you until the ripe old age of " + totalAge + ".");

console.log(calculateSupply(1, 2));


//the right answer

function calculateSupply(age, numPerDay) {
   var maxAge = 100;
   var totalNeeded = (numPerday * 365) * (maxAge - age);
   var message = "You will need " + totalNeeded + " cups of tea to last you until the ripe old age of " + maxAge;
   console.log(message);
}

calculateSupply(28, 36);


// or

function calculateSupply(age)
