// largest palindromic number made from the product of two three digit numbers

// goals: work through all three digit number product combos
// check if the number is a palindrome.
// if so, push to an array.
// sort the array
// get the highest value// largest palindromic number made from the product of two three digit numbers

// goals: work through all three digit number product combos
// check if the number is a palindrome.
// if so, push to an array.
// sort the array
// get the highest value

// var firstNum = 100;
var secondNum = 100;
var palinCheck = [];
var palindromeArr = [];
// var product;

// for(var i = 0; i <= 10; i++){
//     product = firstNum * secondNum;
//     product.toString();
//     palinCheck.push(product);
//     palinCheck.split('');
//     console.log(palinCheck);
//     // if(product === palinCheck[0]){
//     //     palindromeArr.push(product);
//     //     palindromeArr.sort();
//     //     console.log(palindromeArr);
//     }
//     firstNum++;
// };


for(firstNum = 100; firstNum <1000; firstNum++){
    product = firstNum * secondNum;
    var rabble = product.toString();
    rabble2 = rabble.split('').reverse().join('')

    if(rabble === rabble2){
        console.log(rabble + ' is a palindrome');
    }
}
