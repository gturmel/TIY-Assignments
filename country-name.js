// write a javascript fxn that accepts a list of country anmes as input and returns the longest  country name as output.
// ex: fxn: longest_c_name(['australia', 'germany', 'united states of america'])
// expected output = 'united states of america'

var countries = ["Spain", "Italy", "France", "Iceland", "Argentina"];
var charArray = [];
var max = 0;

var longestCountryName = function(arr){
    for(var i = 0; i <= arr.length-1; i++){
        var length = arr[i].split("").length;
        charArray.push(length);
        console.log(length);
        if (length > max){
            max = length;
        }
    };
    console.log(charArray);
};

longestCountryName(countries);

//this currenlty doesn't work...


//This is Byron's solution, and it's cool as heck. I'll have to check it out and deconstruct it a bit.

// function longest_country_name(arr){
//   console.log(arr);
//   arr.sort(function (a, b) { return b.length - a.length })[0];
//   console.log(arr);
//   console.log(arr[0]);
// }
// ​
// ​
// longest_country_name(['Abyssinia', 'Bechuanaland', 'Grain Coast', 'Songhay', 'Stellaland', 'Kingdom of Tungning', 'British North Borneo', 'Gorkhali', 'Kampuchea', 'Mustang, Kingdom of', 'Inini', 'Confœderatio Helvetica', 'Pridnestrovia', 'Spitzbergen'])
