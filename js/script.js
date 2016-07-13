// This is executed when the page is loaded
$( document ).ready(function() {
	// This is called / executed when optionsRadiosHN (House names options) a differrnt is clicked
    $('input[name="optionsRadiosHN"]').change(function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosHN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });
	// This is called / executed when optionsRadiosCN (Character names options) a differrnt is clicked
    $('input[name="optionsRadiosCN"]').change(function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosCN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });
	
	// This function loads the House Names and Character names options in the correct HTML elements as well as the image
    var loadQuestion = function(questionNum) {
   		// Assign the current question from the array of question objects (questions.js)
   		var currentQuestion = questions[questionNum];
   		// var questionHN = currentQuestion.hn;
   		// var questionCN = currentQuestion.cn;


   		// TODO
   		// delete or empty the <label> elements before adding the new answers
   		// generate the HTML <input> to insert inside the <label>
   		$('#choices').find('label').text('');



		// for loop that loads the proper answers to both columns based on what question has been loaded
		// set the 2 set of answers for each question
		for (var i = 0; i < 5; i ++) {
			$('#optionsRadiosHN'+(i+1)).append(currentQuestion.hn[i]);
			$('#optionsRadiosCN'+(i+1)).append(currentQuestion.cn[i]);
		}
		//load the image based on the current Question		
		$('#image').attr("src", currentQuestion.pic);
    }
	// Set variable to start off on the 1st question
    var currentQuestionNumber = 0;
    
    // run function passing the currentQuestionNumber, which at the beginnig is the 1st question
    loadQuestion(currentQuestionNumber);

    //When user clicks the submit button add 1 to the currentQuestion number to allow the next question and answers to appear
    $('button').click(function(){
   		currentQuestionNumber++;
   		loadQuestion(currentQuestionNumber);
    });
});