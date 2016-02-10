// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
//
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//t = title , a = author, b = boolean
var bookList = [
   {t:"The Unbearable Lightness of Being", a:"Milan Kundera", b:1},
   {t:"Crime and Punishment", a:"F. Doestoyevsky", b:0},
   {t:"War and Peace", a:"L. Tolstoy", b:0},
   {t:"World War Z", a:"Max Brooks", b:0},
   {t:"Catcher in the Rye", a:"JD Salinger", b:0},
];

console.log(bookList[0]);
for (num = 0; num < bookList.length; num++){
   console.log(bookList[num].t + " by " + bookList[num].a);
};

for (num = 0; num < bookList.length; num++){
   if (bookList[num].b === true){
      console.log("You already read " + bookList[num].t + " by " + bookList[num].a)
   } else {
      console.log("You still need to read " + bookList[num].t + " by " + bookList[num].a)
   };
};
