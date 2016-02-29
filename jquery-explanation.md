# Inserting Elements with jQuery

## Overview:

There are several situations when it's necessary to use JavaScript/jQuery to insert some HTML dynamically. There are a few methods for this, and the usage depends on where we want to insert our HTML in relation to the existing structure.

The first thing to note is that all of these methods are preceded by a dot. These methods use the dot to target the element that precedes them. For example, `$('li').before(element)` lets jQuery know that we would like to insert the element before the `li` that we're targeting.


## Methods:

#### .before()

As stated above, .before() looks for a few things. First off, we need to declare the jQuery variable that it'll be acting on. `$('ul').before('<p>This goes before the Unordered List</p>')` This code drops the `<p>` tag into the HTML in front of every Unordered List.  

#### .prepend()

Prepend is pretty useful. Say there's a icon-font that you'd like to add before the starting word of every new `<p>` tag that lives on your page. That's where prepend comes in. The entire code looks like this:
`$('p').prepend(':-) ')` This will put :-) in front of the first word in the `<p>` tag.

#### .append()

Append is the opposite side of the coin from prepend. With the code:

`$(li).append(This is the end of the list)`

Append will add the string `This is the end of the list` to the end of each of the list items, after all of the other content.

#### .after()

Now that we're at the other end of the spectrum, `.after` is the opposite of `.before()`.

`$(.tastyWine).after(<li>syrah</li>)` adds the list element containing syrah after any HTML tags with the class tastyWine.

##### Footer:

Hi Jasmine and Kelly! I've had a little wine today, hence that last shout out in .after(). I'm going to bed now. I'd like to do a code review Monday. Keep being awesome you two!
