var express = require('express');
var app = express();

var blocks = {
  'Fixed': 'Fastened securely in position',
   'Movable': 'Capable of being moved',
   'Rotating': 'Moving in a cirlce around its center'
};

var locations = {
 'Fixed': 'First floor', 'Movable': 'Second floor', 'Rotating': 'Penthouse'   
};

app.param('name', function(request, responce, next){
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    request.blockName = block; // can be accessed from other routes in the application
    
    next();
})

app.params('name', function(request, responce, next) {
    
});

app.get('/blocks/:name', function(request, responce) {
    var description = blocks[request.blockName];
});

app.get('/locations/:name', function(request, responce){
    var location = locations[request.blockName];
})
/* app.get('blocks/:name', function(request, responce) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase(); // First letter will be uppercase but every other letter will be lowercase
  //  var description = blocks[blocks]; // block name is now indentical as to the properties of the block object
     //if (!description) {
        
//    }
     var description = blocks[request.params.name]; // returns undefined when no property is found for a given Block name // It does 2 things at once.. reading the request parameter and then finding the objects name or description
     if (!description) { // checks for the presense of a description to determine the responce
     responce.status(404) // 404 is a error status // .json('No description found for ' + request.params.name); // once calling it using the curl method it saids the following text after recieving an error and a friendly *corny* name
        
     }else {
     
     responce.json(description); // status code for 200 for success
}
         
     });

 
});
*/
app.listen(3000, function(){
    console.log('Listening to port 3000, part 2')
});
