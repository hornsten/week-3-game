
var correctGuesses = 0;
	
var wins = 0;
var tries = 15;
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
			"T","U","V","W","X","Y","Z"];

var pacman = ["P","A","C","M","A","N"];

	console.log(pacman);
		document.onkeyup = function(event) {


		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		if(pacman.indexOf(userGuess) === -1) {
				tries--;
			document.getElementById("tries").innerHTML = tries;

			}

		if(tries === 0) {
			document.getElementById("solved").innerHTML = "You lose.";
			

		}

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

		if(correctGuesses === pacman.length) {

			document.getElementById("solved").innerHTML = "You Win!";
			wins++;

	document.getElementById("wins").innerHTML = wins;


		}


	}







