
      var bodyStyle = document.querySelector("body");
      bodyStyle.style.fontFamily = "Arial, sans-serif";

//span replaced by my own information
      var personalInfo = ["Greg Turmel", "Elizabeth City, NC", "Children of Men", "Sandwiches"]

      var spanName = document.getElementById("fullname");
      spanName.textContent = personalInfo.shift();

      var spanHometown = document.getElementById("hometown");
      spanHometown.textContent = personalInfo.shift();

      var spanMovie = document.getElementById("movie");
      spanMovie.textContent = personalInfo.shift();

      var spanFood = document.getElementById("food");
      spanFood.textContent = personalInfo.shift();

// Iterate through each li and change the class to listitem.
// Add a style tag that sets a rule for listitem to make the color red.


var list = document.getElementsByTagName("li");

for(num = 0; num <= list.length; num++ )
      {
         list[num].className = "listItem";
         list[num].style.color = "red";
      };


var myImg = new Image();
myImg.src = "About Me/myImg.jpg";
console.log(myImg);
body.appendChild(myImg);

// var img1 = new Image(); // HTML5 Constructor
// img1.src = 'image1.png';
// img1.alt = 'alt';
// document.body.appendChild(img1);

//create a new img that links to a image of myself
