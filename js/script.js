$( document ).ready(function() {
    // $('#optionsRadios1').append('House Lannister');
    // $('#optionsRadios2').append('House Baratheon');
    // $('#optionsRadios3').append('House Tyrell');
    // $('#optionsRadios4').append('House Stark');

    $('input[name="optionsRadiosHN"]').change(function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosHN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });

    $('input[name="optionsRadiosCN"]').change(function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosCN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });

   var loadHN = function(questionNum) {
   		
   	$('#optionsRadiosHN1').append(questions[0].hn[0]);

   }

   loadHN();
});