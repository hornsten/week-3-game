
var correctGuesses = 0;
	
var wins = 0;
var tries = 15;
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
			"T","U","V","W","X","Y","Z"];

var answer = {	pacman: ["P","A","C","M","A","N"],
				tetris: ["T","E","T","R","I","S"] 
		
	};


	document.onkeyup = function(event) {


		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		if(userGuess !== answer.pacman[0] && userGuess !== answer.pacman[1] &&
		userGuess !== answer.pacman[2] && userGuess !== answer.pacman[3]
			&& userGuess !== answer.pacman[4] && userGuess !== answer.pacman[5]) {
				tries--;
			document.getElementById("tries").innerHTML = tries;
			}



		if(userGuess === answer.pacman[0]) {
		document.getElementById("l0").innerHTML = userGuess;
		correctGuesses++;
		}  
		if(userGuess === answer.pacman[1]) {
		document.getElementById("l1").innerHTML = userGuess;
		correctGuesses++;
		}
		if(userGuess === answer.pacman[2]) {
		document.getElementById("l2").innerHTML = userGuess;
		correctGuesses++;
		}
		if(userGuess === answer.pacman[3]) {
		document.getElementById("l3").innerHTML = userGuess;
		correctGuesses++;
		}
		if(userGuess === answer.pacman[4]) {
		document.getElementById("l4").innerHTML = userGuess;
		correctGuesses++;
		}
		if(userGuess === answer.pacman[5]) {
		document.getElementById("l5").innerHTML = userGuess;
		correctGuesses++;
		}

		if(correctGuesses === answer.pacman.length) {

			document.getElementById("solved").innerHTML = "You Win!";
			wins++;

	document.getElementById("wins").innerHTML = wins;

		}


	}



