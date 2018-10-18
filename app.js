// Where all the work will be done...

var express = require('express');
var app = express();

app.get('/', function(request, responce){
    responce.send('Hello World'); // this is an express function or Express API
    // You can also use res.write('Hello World'), and then end it with res.end() which is the same as the current Express Function used above
})

app.get('/blocks', function(request, responce){
 responce.redirect(301, '/parts'); // using the 301 status code it makes it into a permantly redirect

/*var blocks = ['Fixed', 'Movable', 'Rotating'];
responce.send(blocks); // convert this function into a JSON
// responce.json(blocks); responds the same as the Send function for object and arrays
*/
})



/* app.listen(3000, function(){
    console.log('Listening on port 3000')
}); // takes an optional call back function as a second arguement, once opening the browser it show the url but also show the port# which is 3000

// changes to code requires server restart
*/
