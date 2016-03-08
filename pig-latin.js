// as a user, I want to translate a word or sentence into Pig Latin:

// words that start with a vowel, add 'ay' to end of the word
// words with one or more consonants, move leading consonants to end of word and add 'ay'
// qu in leading consonants - move u and q to end and add 'ay'
// y = consonant

var letters = [];
var vowels = ['a', 'e', 'i', 'o', 'u'];


function pigLatin(str){
    letters = str.split(''); //puts the string into letters, each letter own index
    for(var i = 0; i <= vowels.length - 1; i++){
        if(letters[0] === vowels[i]){
            letters.push('ay');
            var word = letters.join('');
            console.log(word);
            return;
        }else if (letters[0] !== vowels[i] && letters[0] !== 'q') {
            var consonants = letters.slice(0, 1)
            letters.shift(0,1);
            letters.push(consonants + 'ay');
            var word2 = letters.join('');
            console.log(word2);
            return;
        }

    };//end of for loop


};


pigLatin('long')
