
var correctGuesses = 0;
	
var wins = 0;
var tries = 15;
var pacman = ["P","A","C","M","A","N"];
var spentLetters = [];

		document.onkeyup = function(event) {


		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

// Check to see whether key pressed is in the spentLetters array. If it is not,
// push to array.

		if(spentLetters.indexOf(userGuess) === -1) {
			spentLetters.push(userGuess);
			document.getElementById("spentLetters").innerHTML = spentLetters.toString();
				if(pacman.indexOf(userGuess) !== -1) {
					if(pacman.indexOf(userGuess) === 0) {
					document.getElementById("l0").innerHTML = userGuess;
					correctGuesses++;
					}  
					if(pacman.indexOf(userGuess) === 1) {
					document.getElementById("l1").innerHTML = userGuess;
					correctGuesses++;
					}
					if(pacman.indexOf(userGuess) === 2) {
					document.getElementById("l2").innerHTML = userGuess;
					correctGuesses++;
					}
					if(pacman.indexOf(userGuess) === 3) {
					document.getElementById("l3").innerHTML = userGuess;
					correctGuesses++;
					}
					if(pacman.indexOf(userGuess,3) === 4) {
					document.getElementById("l4").innerHTML = userGuess;
					correctGuesses++;
					}
					if(pacman.indexOf(userGuess) === 5) {
					document.getElementById("l5").innerHTML = userGuess;
					correctGuesses++;
					}
				} else {

					tries--;
					document.getElementById("tries").innerHTML = tries;
				}
				

			}

		if(tries === 0) {
			document.getElementById("solved").innerHTML = "You lose.";
			

		}


		if(correctGuesses === pacman.length) {

			document.getElementById("solved").innerHTML = "You Win!";
			wins++;

	document.getElementById("wins").innerHTML = wins;


		}


	}







