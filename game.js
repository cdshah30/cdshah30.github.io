(function () {

    var guessesLeft, randomNumber, guessInput, submitButton, answerDisplay, maxGuesses;

    maxGuesses = 10;

    // Load all the element references from the DOM
    // so that we don't need to do that every time we chek the answer
	guessInput = document.getElementById("guess");
    submitButton = document.getElementById("submitAnswer");

    // Let's use a DIV element to display the answer.
    // It's nicer than using alert().
    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "<h4>Please make a guess of number!</h4>";

    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });

    initGame();

    function initGame () {
        guessesLeft = maxGuesses;
        randomNumber = Math.round((Math.random() * 100))%100  + 1;
	guessInput.value = "";
    }

    function checkAnswer () {

        if (guessInput.value == randomNumber) {
            answerDisplay.innerHTML = "<h3>You win! " + randomNumber + " is correct.</h3> " +
                "<h3>Please input your next guess to start again.</h3>";
            initGame();
            return;
        }
        else if (guessInput.value > randomNumber) {
            answerDisplay.innerHTML = "<h4> Thats high!</h4>" + "<h4>You have </h4>" + guessesLeft + "<h4> left</h4>";
        }
        else {
            answerDisplay.innerHTML = "<h4> Thats low!</h4>" + "<h4>You have</h4> " + guessesLeft + "<h4> Chances left</h4>";
        }

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            answerDisplay.innerHTML += "<h3><br/> No guesses left - The answer was " +  randomNumber + "<h3> you lost!</h3>";           
            initGame();
        }
    }


}());

