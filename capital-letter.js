// have the function letterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words sep by only one space. use toUpperCase

function letterCapitalize(str){
    var letter = str.split("");
    console.log(letter);
    var capLetter = letter[0].toUpperCase();
    console.log(capLetter);
    console.log(capLetter + letter.join(""));

    // take str, assign to var = []
    // split each letter into an array
    // cap first position str.toUpperCase();
    // join all the letters back together
    // console.log new string
    // console.log(str.toUpperCase());
};

letterCapitalize("woo")
