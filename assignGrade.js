// write a function named assignGrade that:
// takes 1 argument, a number score
// returns a grade for the score, either A B C D or F
// call that function for a few different scores and log the reseult to make sure it works.

function assignGrade(num) {
    if (typeof num !== "number") {
        console.log("Please enter the numerical grade.");
    } else if (num > 100 || num < 0)
    {
        console.log("Please enter a number between 0 and 100");
    }
    else if (num <= 100 && num >=90)
    {
        console.log("Your grade is an A");
    } else if (num <=89 && num >=80) {
        console.log("Your grade is a B");
    }else if (num <= 79 && num >=70){
        console.log("Your grade is a C");
    } else if (num <=69 && num >=60) {
        console.log("Your grade is a D");
    } else {console.log("Your grade is a F");}
};

assignGrade(43);
assignGrade(101);
assignGrade(78);
assignGrade(799);
