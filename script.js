// Notes 


// Express?
/*

What Express is..

A web application framework for Node
- Minimal and Flexible
- Great for building Web API's
- Popular services built on Express
Ex... MySpace, Ghost and more
- Foundation for other tools and framework, like Kraken and Sails
- Can install Express using npm
- And to install the latest version of Express you must use the @ sign indicating what version you would like to update it too

*/

// What is MiddleWare
/*

Middle ware is functions executed sequentially that access request and responce
There are 3 sections it passes before reaching the route, the 3 are Validation, Authentication, and Data Parsing

The first middle ware 'middleware A' is a function that takes the request and responce of the function as an arguement and then uses the next function to move from MiddleWare A to MiddleWare B, Like a pattern

*/

/*

Using multiple route handlers is useful for re-using middleware that load resources, perform validations, authentication, etc.

*/