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

   * From what I understand (and this could be pretty far off), an endpoint is what we get from the API after asking AJAX to `GET` a particular piece of data. The endpoints that we get from requesting profile data are everything from User Name, to date they joined, to company they work for, to if they're hireable or not. The complete list can be found [here](https://developer.github.com/v3/users/#get-a-single-user).


* the organizations a user belongs to?

   * This returns a much smaller list than the complete profile information. This list includes all of the Public memberships of a user. This is also regardless of authentication. The detailed list can be found [here](https://developer.github.com/v3/orgs/#list-user-organizations).


* the repositories a user has created?

   * This will return an array of objects, with each object being a separate repo. This goes up to 100 repos, which is a lot. The data returned in each object is manifold. Each object has another object nested inside of it with the user's information. The rest of the object contains information about the repo, like stars, forks, and date created.


* a filtered list of repositories?

   * This is going to depend on the filters. Right up at the top of [this](https://developer.github.com/v3/repos/#list-user-repositories) page there's a list of different filters that we can apply to hunt for different things. The repositories will be returned to us as the traditional array of objects, but ordered by the parameters that we've passed into the search function.


* a sorted list of repositories?

   * This starts with `sort`, and a type `string` that can be `stars`, `forks`, or `updated`. The default is that results are sorted by best match.


* public events for a user?

   * This has two different directions. There are public events that a user has received, and it's accessed by using `GET /users/:username/received_events/public`. Then there's public events that a user has performed, found at `GET /users/:username/events/public`.


## When fetching public events for a user...


* How many results are returned by default?

   * 100 or 30 per page. Either way, that's a lot. It can get unwieldy really quickly. Why the different number? You get 100 results when you query the GibHub Search API, and 30 results when you call GitHub's public repositories. You can also limit the results, but the max of 100 on a page. You can navigate around to different pages by changing the page number at the very end of the link.  <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=2>



* What limitations exist on fetching more results?

   * Fetching up to 10 pages of 30 results is supported, after that, GitHub is like: Go home, you don't need more information. Also, only events created in the last 90 days will be included, even if that leaves the number less than 300.

* What is the basic structure of the results?

   * It also creates an array, with several objects within it. There's some basic information about the Repo, the Owner, and the Organization that the Owner belongs to.

* What fields are included in each result?

   * "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"


* What are the data types for each field?

   * Mostly strings, with some numbers scattered throughout. There's also a time value for `created_at`.


* What are some of the different values for the type field?

   * Kelly and Jasmine, I'm sorry, but I"m tired. I'll come back to this later, but I can't seem to find it, and I needed to get more work done today. I also didn't save this last night, and I had at least the first few sections knocked out, which is why I accidentally attached it to the Homework Submission Form yesterday.
