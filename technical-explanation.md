# A Technical Explanation of Running the Fibonacci Sequence

Overview:
--------------------------------------------

The Fibonacci Sequence is a set of numbers derived from starting at 0 and 1, finding the sum of those numbers, and then adding the last number in the expression to the product. For example:
`0 + 1 = 1` is followed by the expression: `1 + 1 = 2`. The first several numbers in the sequence are `0, 1, 1, 2, 3, 5, 8, 13, 21, 34...`.
This number is found in the natural world quite a bit, and it's incredibly useful in higher-order mathematics. Because it is so simple to calculate, finding the sum of some subset of Fibonacci numbers is a common programming question. It shows the ability to think logically, and work through the issues of what to exclude when building a test. I will go through a few test cases and find the sum of several of these numbers, with notes explaining the process throughout.

The Set-Up:
---------------------------------

First thing's first: we need to determine a few guidelines to build out our code.

* What are we looking for?  

 * For this first pass, we're going to be looking for the sum of odd numbers of the Fibonacci sequence up to 4,000,000. While this is going to take an incredibly long amount of time for a human to calculate this, it'll be a snap for the computer.  


* How are we going to get there?  

   * Using a loop! This will let us tell the computer to count from 0 to our desired number, adding all the odds together as we go.  


* How will we know that we're right?

   * There are a lot of good resources out there, but a quick Google should tell us what we need to know.


*  What will we need?

   * Two variables, and a calculation. We also need to make sure we can log the result somewhere, so we can see what happened in our calculation.  


Building the Skeleton:
---

We'll start by declaring some variables. We want to declare them outside of the function itself, because they need to be around for the function to grab.

`var firstNumber = 0`  
`var secondNumber = 1`
`var oddFibonnaciSum = [];`

Then we set up our `for` loop. We'll need to figure out the starting and stopping points of this. We want to start at 0, and iterate up the Fibonacci Sequence until we get to at least 4000000. I don't know how many times we need to run through the Fibonacci to get to 4000000, so we'll make sure to limit the iterations a bit later on in the loop.

`for(num = 0; num <= 50; num++)`

Now comes the math part of the sequence.

```
var sum = firstNumber + secondNumber;
firstNumber = secondNumber;
secondNumber = sum;
```

The variable `sum` is the sum of the `firstNumber` and `secondNumber` variables. We then set the `firstNumber` variable equal to the `secondNumber` variable, and the `secondNumber` variable equal to the `sum` variable. If we just stopped now, this function would generate the first 50 terms of the Fibonacci Sequence.

Now we need to filter for what we need.
```
if(sum < 4000000 && sum % 2 !== 0){
   console.log(sum);
   oddFibonnaciSum.push(sum);
};
```

The `if` statement checks that the `sum` is both less than 4000000 and that `sum` is odd. The term `sum % 2 !== 0` takes `sum`, divides it by 2, and checks to see what the remainder is. If there is a remainder, `sum` is odd. We then push the `sum` into an empty array.

Now that we've got all of our odd terms of the Fibonacci Sequence stored in our array, it's time to go back and add them all up.

We'll start a new `for` loop for this, but before that, we need to declare a new variable - the variable that will hold the sum of all the elements in the array.

```
var sumFibonnaci = 0;

for(num = oddFibonnaciSum.length; num > 0; num--){
   sumFibonnaci = sumFibonnaci + oddFibonnaciSum.pop();
};
console.log(sumFibonnaci);
```

We've declared our variable, and then we iterate through the array length. Each pass through the loop takes a value from the array and adds it to `sumFibonnaci`. This runs until the array is empty. We then log the result to our console! The whole code looks like this:

```
var one = 0;
var two = 1
var oddFib = [];

for(i = 0; i < 50; i++){
    var three = one + two;
    one = two;
    two = three;
    if(three < 4000000 && three % 2 !== 0){
        oddFib.push(three);
    };
};
console.log(oddFib);

var sumFib = 0;

for(num = oddFib.length; num > 0; num--){
    sumFib = sumFib + oddFib.pop();
    console.log(sumFib);
};
```

Thanks for reading!
