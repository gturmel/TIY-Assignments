/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()

var testArray = [3, 89, 42, "Chewie", 19, "Zeus"];

console.log(testArray.sort()); returns  [ 19, 3, 42, 89, 'Chewie', 'Zeus' ]
why is 3 after 19?

// .concat()

var numArray = [45, 34, 23, 76, 88, 11];
var numArray2 = [22, 44, 11, 45, 66, 77, 10];

console.log(numArray.concat(numArray2)); returns [45, 34, 23, 76, 88, 11, 22, 44, 11, 45, 66, 77, 10]

// .indexOf()

var characters = ["Chewie", "Han", "Luke", "Leia", "Vader", "Tarkin", "Akbar"];

console.log(characters.indexOf("Luke"));  returns '2'

var numArray = [45, 34, 23, 76, 88, 11];

console.log(numArray.indexOf(76)); returns '3'

// .split()

var starShips = "Enterprise, Executor, Serenity, Galactica, Nostromo";

console.log(starShips.split()); returns [ 'Enterprise, Executor, Serenity, Galactica, Nostromo' ]

// .join()

var starShips = ["Enterprise", "Executor", "Serenity", "Galactica", "Nostromo"];

console.log(starShips.join(", ")); returns Enterprise, Executor, Serenity, Galactica, Nostromo

// .pop()

var starShips = ["Enterprise", "Executor", "Serenity", "Galactica", "Nostromo"];

console.log(starShips.pop()); returns Nostromo
then running
console.log(starShips); returns [ 'Enterprise', 'Executor', 'Serenity', 'Galactica' ]

// .push()

var starShips = ["Enterprise", "Executor", "Serenity", "Galactica", "Nostromo"];

console.log(starShips.push("Millenium Falcon")); returns 6

console.log(starShips); returns [ 'Enterprise', 'Executor', 'Serenity', 'Galactica', 'Nostromo', 'Millenium Falcon' ]

// .slice()

var stringForSlicing = "One day, all this will be yours! What, the curtains?";

console.log(stringForSlicing.slice(18,31)); returns "will be yours"

// .splice()

var starWarsMovies = ["Ep1", "Ep2", "Ep3", "Ep4", "Ep5", "Ep6", "Ep7"];

var goodStarWarsMovies = starWarsMovies.splice(3, 6);

console.log(goodStarWarsMovies) returns [ 'Ep4', 'Ep5', 'Ep6', 'Ep7' ]

// .shift()

var houses = ["Carolina", "Woodland Church", "New Hope"]

console.log(houses.shift()); returns Carolina
console.log(houses);      now returns [ 'Woodland Church', 'New Hope' ]

// .unshift()

var houses = ["Woodland Church", "New Hope", "Chalk Level"];

console.log(houses.unshift("Carolina")); returns 4
console.log(houses);                      now returns: [ 'Carolina', 'Woodland Church', 'New Hope', 'Chalk Level' ]

// .filter()

function isSmallEnough(value) {
    return value <=32;
};

var filtered = [15, 30, 19, 35, 88, 93, 23].filter(isSmallEnough);
console.log(filtered);              returns [ 15, 30, 19, 23 ]


// .map()

var num = [1, 4, 56, 2, 77, 33, 99];

var numPlusTwo = num.map(function(num){
    return num + 2;
});

console.log(numPlusTwo);            returns [ 3, 6, 58, 4, 79, 35, 101 ]
