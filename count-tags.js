// write a function that takes a certain type of tag and counts the number of elements with that tag. The fxn shoudl return "there are x tags of type y on the page. "

var tagCount = [];


function countTags(tagName){
    $('html').find(tagName);
        $('tagName').push(tagCount);
    console.log('There are ' + tagCount.length + ' tags of type ' + tagName + ' on the page.');
};

countTags(p);
