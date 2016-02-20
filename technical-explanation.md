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
