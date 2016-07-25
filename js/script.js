// This is executed when the page is loaded
$( document ).ready(function() {
	// This is called / executed when optionsRadiosHN (House names options) a differrnt is clicked
    $('#choices').on('change', 'input[name="optionsRadiosHN"]', function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosHN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });
	// This is called / executed when optionsRadiosCN (Character names options) a differrnt is clicked
    $('#choices').on('change', 'input[name="optionsRadiosCN"]', function(){
    	console.log('changed', $(this).parent().text());
    	$('input[name="optionsRadiosCN"]').parent().removeClass('checked');
    	$(this).parent().addClass('checked');
    });

	var currentQuestion;
	var correctPoints = 0

	// This function loads the House Names and Character names options in the correct HTML elements as well as the image
    var loadQuestion = function(questionNum) {
   		// Assign the current question from the array of question objects (questions.js)
   		currentQuestion = questions[questionNum];
   		// var questionHN = currentQuestion.hn;
   		// var questionCN = currentQuestion.cn;


   		// TODO
   		// delete or empty the <label> elements before adding the new answers
   		// generate the HTML <input> to insert inside the <label>
   		//As far as I understand, this is finding the ID - Choices, and filling the labels with empty text after each submission so it clears before the next question.
   		//However I'm not sure why this has overwritten my script above because now the selections don't change color.  Is it because I used the .text() function?
		// $('#choices').find('label').contents().filter(function(){
		// 	return this.nodeType == 3;
		// }).remove();

		$('#choices').find('label')
			.removeClass('checked') // remove checked (black bg) on all labels
			.empty();

		// Same as above
		// $('#choices').find('label').removeClass('checked'); 
		// $('#choices').find('label').empty();

		// for loop that loads the proper answers to both columns based on what question has been loaded
		// set the 2 set of answers for each question
		for (var i = 0; i < 5; i ++) {
			var radioButtonHN = '<input type="radio" name="optionsRadiosHN" value="option' + (i + 1) + '" style="display: none;">';
			var radioButtonCN = '<input type="radio" name="optionsRadiosCN" value="option' + (i + 1) + '" style="display: none;">';

			$('#optionsRadiosHN'+(i+1)).append(radioButtonHN + currentQuestion.hn[i]);
			$('#optionsRadiosCN'+(i+1)).append(radioButtonCN + currentQuestion.cn[i]);
		}

		//load the image based on the current Question		
		$('#image').attr("src", currentQuestion.pic);
    }
	// Set variable to start off on the 1st question
    var currentQuestionNumber = 0;
    
    // run function passing the currentQuestionNumber, which at the beginning is the 1st question
    loadQuestion(currentQuestionNumber);

    function answerScreen(answerResult) {
		$('.modal-title').text(answerResult);
		$('#modalDesc').find('img').attr('src', currentQuestion.pic);
		$('#correctAns').text(currentQuestion.correctcn + ' of ' + currentQuestion.correcthn);
		$('#correctDesc').text(currentQuestion.desc);
	};

	function gameOver(finalScore) {
		$('#choices').hide();
		$('#gameOver h1').text("Game Over!");
		$('#gameOver p').text("You're final score is: " + finalScore);
		$('#gameOver').show().removeClass('hidden');
		$('#modalButton').text("Done");
		$('#submitButton').hide();
	}

    //When user clicks the submit button add 1 to the currentQuestion number to allow the next question and answers to appear
    $('#submitButton').click(function(){
    	var correctHN = currentQuestion.correcthn;
		var correctCN = currentQuestion.correctcn;
   		var choiceHN = $('#choices .checked').first().text();
   		console.log(choiceHN);
   		var choiceCN = $('#choices .checked').last().text();
   		console.log(choiceCN);

   		var questionPic = currentQuestion.pic;
		var questionDesc = currentQuestion.desc;

   		if (choiceHN == '' && choiceCN == '') {
   			console.log("You must select a House Name");
  			return;
   		}

   		if (choiceHN === correctHN && choiceCN === correctCN) {
   			console.log("You're correct!");
   			answerScreen("You're correct!");
   			correctPoints+=2;
   		}
   		else if (choiceHN === correctHN || choiceCN === correctCN) {
   			console.log("You're half correct!");
   			answerScreen("You're half correct!");
   			correctPoints+=1;
   		}
   		else {
   			console.log("Sorry, both answers are incorrect!");
   			answerScreen("Sorry, both answers are incorrect!");
   		}
   		

   		if (currentQuestionNumber >= 4) {
   			gameOver(correctPoints);
   			return;
   		}
   
   		currentQuestionNumber++;
   		loadQuestion(currentQuestionNumber);
    });
});