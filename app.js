var express = require('express');
var app = express();


/*app.get('/', function(request, responce) {
    responce.sendFile(__dirname + '/public/index.html');
});
*/

app.use(express.static('public'));

app.get('/blocks', function(request, responce){
 var blocks = ['Fixed', 'Movable', 'Rotating'];
 responce.json(blocks); // creating a array of blocks and synorizing it back to the client 
})

app.listen(3000);