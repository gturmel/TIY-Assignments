// create an object to hold information on your favorite recipe.
//
// it should have properties for title (string)
// servings (number), ingredients (array of strings)
//
// on sep lines (one console.log statement for each)
// log recipe info so it looks like:
//
// mole
// serves 2
// ingredients:
// cinnamon,
// cumin
// cocoa


var drinksForAll = {
   "title": "Boulevardier",
   "servings": "serves until we're out",
   "ingredients": ["1.5 oz Bourbon", "1.5 oz Campari", "1.5 oz Sweet Vermouth", "Orange Bitters", "Orange Peel"]
};

console.log(drinksForAll.title);
console.log(drinksForAll.servings);
for(num = 0; num < drinksForAll.ingredients.length; num++){}
console.log(drinksForAll.ingredients[num]);
};
