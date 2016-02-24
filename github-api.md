## How does the API handle authentication?

The API handles authentication three different ways. These three ways will be touched on a little later on in the document. There are a few errors thrown when getting an unauthenticated request: 401 - unauthorized, 403 - forbidden, or 404 - not found.

* Do I need to authenticate?

   * Sometimes. Unauthenticated requests coming in to a public repository will be processed up to a point, and after that point is reached, the site will reject further requests, just in case there is malicious intent behind these queries.  


* What can I do with an unauthenticated request?   

   * For Github, there's a limit (that we found out today) of requests that we're allowed to make per hour. It goes up to 5,000 per hour if you use some Basic Authentication, and it's only 60 per hour if it's unauthenticated.  


* How can I authenticate my request? (3 ways)

   * The first is Basic Authentication. Typing this: `curl -u "username" https://api.github.com` into the command line does the trick here.
   * The second is to use OAuth Tokens. These can be either set in the header with this code: `curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com`, or sent as a parameter like this: `curl https://api.github.com/?access_token=OAUTH-TOKEN`
   * The third way is to use an OAuth Key/Secret. This should only be used in a server to server setting. You've got to be very careful with this, and you don't want to leak this information to your users.


## How do I ask the API for...

* The profile information for a specific user?

   * This is where AJAX comes in handy. The code looks like: `GET /users/:username`, where `:username` is the username of the specific user that you're interested in.


* The repository listing for a specific user?

   * This is also an AJAX call. Here, we use: `GET/user/repos`. This returns an array of objects, with each object in the array being a separate repo.


* The recent, public activity for a specific user?

   * This is a wider net to cast, with a few different options, depending on what we want to see about a specific user.
   `GET /repos/:owner/:repo/events` will return the recent repository activity of a specific user.
   `GET /users/:username/events/public` will return the recent public events performed by the user.


## Is there a limit to the number of requests I can make?

   Absolutely. There's a limit of 60 requests per hour if we're unauthenticated, and 5000 requests per hour if we're authenticated. However, search API requests have a different limit. Authenticated users can make up to 30 requests a minute, unauthenticated users are limited to 10 requests per minute.

* Is there a way of extending that limit?

   * Getting authenticated will extend the limit quite a bit. Further, the limit related to the IP address, and not any particular user. This could be what we ran into a bit on Tuesday.


* What happens when I hit the limit?

   * Github puts the brakes on a bit for you. They do this by giving you a 403 error - forbidden. At this point, the only thing to do is wait for a while for the limit to reset, or get authenticated.


## What if there is a lot of data returned?


* How can I ask for more (or less) data from a request?

   * We can refine our data returned by adding a few more parameters to our AJAX request. You can look by a wide variety of things, from language, to date of creation, to number of stars or size. [This section](https://developer.github.com/v3/search/#search-code) has really good information on what's needed to specify the correct information.


* How do I know that there is more data available?

   * We can concatenate more selectors onto our search function to pull in more data, or remove all of the selectors to go as broad a possible.


## What are the endpoints for fetching...


* the profile data for a user?

   * 


* the organizations a user belongs to?
* the repositories a user has created?
* a filtered list of repositories?
* a sorted list of repositories?
* public events for a user?
## When fetching public events for a user...
* How many results are returned by default?
* What limitations exist on fetching more results?
* What is the basic structure of the results?
* What fields are included in each result?
* What are the data types for each field?
* What are some of the different values for the type field?
