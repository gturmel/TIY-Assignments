// write a javascript function that returns a passed string with letters in alphabetical order.
// ex input: webmaster
// ex output: abeemrstw:

var alphArray = [];

function alphabetical(string){
    alphArray = string.split("");
    alphArray.sort();
    console.log(alphArray);

};

alphabetical('leeroy jen kins');
alphabetical("zy xwedcb a");
