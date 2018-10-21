$(function(){
    
    $.get('/blocks', appendToList);
    
    function appendToList(blocks) { // appendTolist makes an empty array of lists 
        var list = [];
        var content, block;
        for(var i in blocks){
            block = blocks[i];
            content = '<a href="/blocks/'+block+'">'+block+'</a>'; // page the displayes the block description
             '<a href="#" data-block="'+block+'"><img src="del.jpg"></a>';
             
            list.push($('<li>', { html: content }));
        }
        
        $('.block-list').append(list)
    } 
});
    
    $('form').on('submit', function(event){
        event.preventDefault();
        var form = $(this);
        var blockData = form.serialize();
        
        $.ajax({
            type: 'POST', url: '/blocks', data: blockData
            
        }).done(function(blockName){
            appendToList([blockName]);
            form.trigger('reset') // clears the input the input text fields
        });
    });
    $('.block-list').on('click', 'a[data-block]', function(event){
        if(!confirm('Are you sure ?')) {
            return false;
        }
        
        var target = $(event.currentTarget); // the link element that was clicked
        
        $.ajax({ // this is the ajax delete attribute
            type: 'DELETE', url: '/blocks/' + target.data('block')
            
        }).done(function(){
            target.parents('li').remove();// removes li element containing the link
        });
    })