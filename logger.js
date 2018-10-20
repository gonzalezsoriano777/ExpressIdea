module.exports = function(request,responce, next) {
     
     var start = +new Date();
     var stream = process.stdout;
     var url = request.url;
     var method = request.method;
     
     
     responce.on('finish', function() { // event handler function runs 'asynchronously' timing protocol begins once indicated
         var duration = +new Date() - start; // Calculate the duration of the request
         var message = method + ' to ' + url + '/ntook' + duration + ' ms /n/n';
         stream.write(message); // prints the log message
     });
     
     
     
     next();
 }