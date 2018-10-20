var express = require('express');
var app = express();


// Logger, displays the duration of each request made to the application
/* var logger = require('./logger');
app.use(logger);
*/


/*app.get('/', function(request, responce) {
    responce.sendFile(__dirname + '/public/index.html');
});
*/

// app.use(express.static('public'));

app.get('/blocks/', function(request, responce){
 var blocks = ['Fixed', 'Movable', 'Rotating'];
 if (request.query.limit >= 0) {
     responce.json(Object.keys.blocks.slice(0, request.query.limit));// sets a conditional statement, tha looks at numeric value for the limit is part of the URL
     // Object.keys grabs only the names or "keys" inside the variable object, but not the description... this is more specific and efficent
 } else {
     responce.json(blocks);
 }
 
 //responce.json(blocks); // creating a array of blocks and synorizing it back to the client 
})

app.listen(3000, function(){
    console.log('Listening to port 3000')
});