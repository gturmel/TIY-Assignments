//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if //the current number is even or odd, and report that to the screen (e.g. "2 is even").

for(num = 0; num <= 20; num++) {
    if (num % 2 !== 0) {
        console.log(num + " is odd")
    } else {
        console.log(num + " is even")
    };
};
