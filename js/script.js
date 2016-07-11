
//This loads the javascript below
$( document ).ready(function() {
    // $('#optionsRadios1').append('House Lannister');
    // $('#optionsRadios2').append('House Baratheon');
    // $('#optionsRadios3').append('House Tyrell');
    // $('#optionsRadios4').append('House Stark');
//Calls the ID optionsRadiosHN to change if a different optionsRadiosHN is selected
    $('input[name="optionsRadiosHN"]').change(function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosHN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });
//Calls the ID optionsRadiosCN to change if a different optionsRadiosCN is selected
    $('input[name="optionsRadiosCN"]').change(function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosCN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });
//Load the variable loadquestion
   var loadQuestion = function(questionNum) {
   		//assign the current question in the array to the variable currentQuestion
   		var currentQuestion = questions[questionNum];
		//for loop that loads the proper answers to both columns based on what question has been loaded
		for (var i = 0; i < 5; i ++) {
			$('#optionsRadiosHN'+(i+1)).append(currentQuestion.hn[i]);
			$('#optionsRadiosCN'+(i+1)).append(currentQuestion.cn[i]);
		}
		//load the image based on the current Question			
		$('#image').attr("src", currentQuestion.pic);
   }
//Load the variable currentQuestionNumber and start off on the 1st question
   var currentQuestionNumber = 0;
   //use variable loadQuestion to pass the currentQuestionNumber as the 1st question
   loadQuestion(currentQuestionNumber);
   //When user clicks the submit button load the function that adds 1 to the currentQuestion number and reloads the function, allowing the next question and answers to appear
   $('button').click(function(){
   		currentQuestionNumber++;
   		loadQuestion(currentQuestionNumber);
   });
});