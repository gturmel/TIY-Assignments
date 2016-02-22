// write a function named greaterNum that:
// takes two arguments, both numbers,
// returns whichever number is greater (higher)
// call that function two times with different number pairs, and log the output:
// "The greater number of 5 and 10 is 10."

function greaterNum(num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(num1 > num2){
        console.log("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
    }
    else if (num1 < num2) {
        console.log("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
    };
}
    else if (num1 === num2) {
    console.log("These numbers are the same.")
}
else{
    console.log("Please enter two numbers to compare");
};

};

greaterNum(5,2);
greaterNum(543, 2342);
greaterNum("strawberry", 9);
greaterNum(4, 4);
