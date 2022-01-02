//*alert("Warning: This site is for internal use in CX DXB Engineering only, it's purpose is for easy access to important files in our cluttered G-Drive, this is not an official website of Cathay Pacific Airways.")



$(document).ready(function(){
	
	$('#button').click(function(){
        
	var toAdd = $('input[name=checkListItem]').val();
        
	$('.list').append('<div class= "item">'+ toAdd +'</div>');
    })  
    
    
	$(document).on('click','.item',function(){
        
		$(this).remove();
    })

	$('#button').hover(
    function(){
    
		$(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');    
    }
  );
	
		$('input').focus(function(){
        
		$(this).css('outline-color', '#FF0000');
    })
})//