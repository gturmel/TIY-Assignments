// write a function named helloWorld that:
// takes 1 argument, a lang code (eg "es", "de", "en")
// returns "hello world" for the given lang, for at least 3 lang
// default to returning english.
// call that function for each supported lang, log result

function helloWorld (lang){
    if(lang === "es") {
        console.log("Hola, Mundo");
    }
    else {
        console.log("Hello, World")
    }


};


helloWorld("es");
helloWorld("yep");
