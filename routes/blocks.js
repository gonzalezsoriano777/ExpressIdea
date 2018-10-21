var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var blocks = {
  'Fixed': 'Fastened securely in position',
   'Movable': 'Capable of being moved',
   'Rotating': 'Moving in a cirlce around its center'
};

router.route('/') // the root path relative to the path where it's mounted from app.js for 'app.use('/blocks', ...)
.get(function(request, responce){ 
       
   })
    .post(parseUrlencoded, function(request, responce){ // lines starting with dot indicate functions calls on the object returned from the previous line
        
    });

router.route('/:name') // if this was an actual browser to be used, then it will the all attribute first and then filter to the next attribute called eiter .get or .use 
 .all(function (request, responce, next){ // identical to app.params
     var name = request.params.name;
     var block = name[0].toUpperCase() + name.slice(1).toLowerCase(); // same code that turns first characters to uppercase and remaining characters to lowercase
     request.blockName = block;
     next();
 })
 .get(function (request, responce) {
    var description = blocks[request.blockName];
});
  .delete(function (request, responce){
    delete blocks[request.blockName];
    responce.sendStatus(200);// Sending the status code of 200 sends the status responce as OK
});

module.exports = router; // exports the router as a Node Module