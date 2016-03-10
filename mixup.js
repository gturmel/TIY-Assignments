// create function mixUp. Take two strings, return the concatenation of the two strings (sep by a space .join(" ")). slicing out and swapping the first two characters of each (slice(0, 2)). assume strings are at least 2 char long for ex: mixUp("mix", "pod") pox mid.

function mixUp(str, str2){
    var firstString = str.split("");
    var secondString = str2.split("");
    var swapFirst = firstString.splice(0,2);
    var swapSecond = secondString.splice(0,2);
    var final = swapSecond.join("")+firstString.join("")+ " "+swapFirst.join("")+secondString.join("");
    console.log(final);


};

mixUp("lets","this");
mixUp("rabble", "babble");
mixUp("check", "wreck");
mixUp("code", "ukelele");
