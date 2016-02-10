// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen: "You are either NN or NN"
// call the function three times with different sets of values.

function (one number, second number) {
   age1 = one number - second number
   age2 = one number - second number - 1
   You are either age1 or age2
}


function calculateAge(birthYear, currentYear) {
   var age1 = currentYear - birthYear;
   var age2 = currentYear - birthYear - 1;
   if (age1 < 0 || age2 < 0 ){
       console.log("You haven't been born yet!")
   }
   else if

   console.log("You are either " + age1 + " or " + age2);
};
