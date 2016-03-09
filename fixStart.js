// create fxn fixStart: take a single argument (string), return a version were all occurrences of it's first character have been replaced with * except for first character. assume string at least one character long.

// ex: fixStart('babble'): ba**lea

function fixStart(str){
    stringArray = str.split(""); //string to letters
    firstLetter = stringArray[0];
    for(var i = 0; i < stringArray.length; i++){ //move through array
        if(firstLetter === stringArray[i+1]){
            stringArray.slice(i, 1);
            stringArray[i+1] = "*";
        }
    }
    stringFinal = stringArray.join("");
    console.log(stringFinal);
};//end fixStart

fixStart("bobble");
fixStart("bottle");
fixStart("turtle");
fixStart("canticle");
fixStart("cocoon");
fixStart("oboe");
fixStart("trumpet");
