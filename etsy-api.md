# Etsy API!

1. How do I make API requests?

   There are two ways to make an API request. The first is without Authentication, the second uses OAuth. They both start with the same base though: `https://openapi.etsy.com/v2`. After that, it ends with the command. This is where the most specific parts of the API call come into play, and where we'll insert variables into the URL to pull out what we want. Finally, the API key goes on the very end.

   * What is the base URL for all requests?  
`https://openapi.etsy.com/v2`

   * Are there any headers or query parameters required?
      Right after `v2` in the base URL, `users/:user_id` follows. While the `users` part remains the same, the `:user_id` part needs to be either `etsystore` or an ID for a specific user. The former will result in the JSON for all of Etsy, and the latter will return the information for a particular user.

   * What kind of response should I expect?
      A delicious JSON that's really rather large. Lots of things to pull from here. Lots and lots.

2. How does the API handle authentication?

   Etsy uses OAuth 1.0 authentication.

   * Do I need to authenticate? with user credentials?
        If we want to get private account information, then we do need to authenticate. If we're just going to use what's publicly available/on the site for all to see, no.
        With User Credentials: There's a three step process to authenticate.
         1. The app requests some temporary credentials called through the API key
         2. The app directs the member to a page on etsy, so the credentials can be approved and linked to the account.
         3. The temporary credentials are switched to a permanent set that give limited access to the member's account via the API key.

   * What can I do with an unauthenticated request?
      There's still a lot of information that's publicly available on the API.


   * How can I authenticate my request? (what methods)
      I touched on this in the section above

3. What Resource in the API represents...
   * an individual product?


   * a group or collection of products?
      Sellers can group items into `shopsections` to keep related things together.
      There's also several keys to narrow down some of the information that we can sift through.
      `findAllShopListingsActive` target the items currently available in a specific shop
      `findAllListingActive` will get all the active listings on Etsy (too much information!)


   * images associated with a product?
      each listing can have 5 images: `MainImage` or `images`
      there's also `findAllListingImages`, but that's also way too much information
   * sizes and colors for a product?
      `item_length`
      `item_width`
      `item_dimensions_unit`
      `style`
      `color`

      * What actions and endpoints exist for each of these Resources?
      for the dimensions: it's going to be a key:value pair inside the `listing` object.
      for the style: it's an array with strings
      for the color: There's stuff here that I haven't heard of. color: color_triplet? color_wiggle?
      there are in the `findAllShopListingsActive` and `findAllListingActive` methods, and I think there's some JSON traversing needed, but I'm not sure what `color_triplet` and `color_wiggle` mean...

      * What parameters do each endpoint require or accept?

      
      * What fields are returned for each Resource, specifically:
   * an individual product?
   * a group or collection of products?
   * What additional fields can be requested for each?
