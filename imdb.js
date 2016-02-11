// create an object to store the following information about your favorite movie: a title (string), duration (number), and starts (an array of strings)
// create a fxn to print out the movie info like so: "Puff the magic Drag lasts for 30 mins. Stars Puff, jacke, living sneezes"

var movie = {
    title: "The Dark Knight",
    duration: 2,
    stars: [
        "The Batman",
        "The Joker",
        "The Police Dude",
        "The Other Guy"]
};

function printMovie () {
    console.log(movie.title + " lasts for " + movie.duration + " hours.  Stars " + movie.stars[0] + ", " + movie.stars[1] + ", " + movie.stars[2] + ", " + movie.stars[3] + ".")
};

printMovie(movie);
