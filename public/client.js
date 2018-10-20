$(function(){
    
    $.get('/blocks', appendToList);
    
    function appendToList(blocks) { // appendTolist makes an empty array of lists 
        var list = [];
        for(var i in blocks){
            list.push($('<li>', { text : blocks[i] }));
        }
        $('.block-list').append(list);
    }
});